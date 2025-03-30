import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/search/users?q";
const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY || "";
const headers = GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : {};

export const fetchUserData = async (username, location, minRepos, page = 1) => {
  try {
    if (!username && !location && !minRepos) {
      throw new Error("Please provide at least one search parameter.");
    }

    const query = `${username} ${location ? `location:${location}` : ""} ${minRepos ? `repos:>${minRepos}` : ""}`;
    
    const response = await axios.get(`${GITHUB_API_URL}?q=${encodeURIComponent(query)}&page=${page}&per_page=12`, { headers });

    if (!response.data.items || response.data.items.length === 0) {
      throw new Error("No users found with the given criteria.");
    }

    // Fetch additional user details
    const userDetailsPromises = response.data.items.map(async (user) => {
      const res = await axios.get(user.url, { headers });
      console.log(response.headers["x-ratelimit-remaining"]);
      return res.data;
    });

    const usersDetailed = await Promise.all(userDetailsPromises);

    return {
      items: usersDetailed,
      total_count: response.data.total_count,
    };
  } catch (err) {
    if (err.response?.status === 403 && err.response?.headers["x-ratelimit-remaining"] === "0") {
      throw new Error("GitHub API rate limit exceeded. Please try again later.");
    }
    throw new Error(err.response?.data?.message || "User not found or API limit exceeded.");
  }
};
