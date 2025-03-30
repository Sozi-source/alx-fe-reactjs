import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/search/users";
const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY || "";
const headers = GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : {};

/**
 * Fetch GitHub users based on search criteria.
 * @param {string} username - GitHub username.
 * @param {string} location - User location.
 * @param {string} minRepos - Minimum number of repositories.
 * @param {number} page - Page number for pagination.
 * @returns {Promise<{items: Array, total_count: number}>} - List of users and total count.
 */
export const fetchUserData = async (username = "", location = "", minRepos = "", page = 1) => {
  try {
    if (!username && !location && !minRepos) {
      throw new Error("Please provide at least one search parameter.");
    }

    // Construct GitHub search query
    const queryParts = [
      username ? username : "",
      location ? `location:${location}` : "",
      minRepos ? `repos:>${minRepos}` : ""
    ].filter(Boolean);

    const query = queryParts.join(" ");

    // Make the initial API request
    const response = await axios.get(`${GITHUB_API_URL}?q=${encodeURIComponent(query)}&page=${page}&per_page=12`, { headers });

    if (!response.data.items?.length) {
      throw new Error("No users found matching your search criteria.");
    }

    // Check API rate limit
    const remainingRequests = parseInt(response.headers["x-ratelimit-remaining"] || "1", 10);
    if (remainingRequests <= 0) {
      throw new Error("GitHub API rate limit exceeded. Please try again later.");
    }

    // Fetch detailed user profiles (if needed)
    const usersDetailed = await Promise.allSettled(
      response.data.items.map((user) => axios.get(user.url, { headers }))
    );

    const users = usersDetailed.map((result, index) => 
      result.status === "fulfilled" ? result.value.data : response.data.items[index] // Fallback to basic data
    );

    return {
      items: users,
      total_count: response.data.total_count,
    };

  } catch (err) {
    throw new Error(err.response?.data?.message || "An error occurred while fetching GitHub data.");
  }
};
