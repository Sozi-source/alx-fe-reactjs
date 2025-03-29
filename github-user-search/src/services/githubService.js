import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/search/users";
const GITHUB_PAT = "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"; // Securely get PAT

export const fetchUserData = async (username, location, minRepos, page = 1) => {
  try {
    const query = `${username} ${location ? `location:${location}` : ""} ${
      minRepos ? `repos:>${minRepos}` : ""
    }`;

    const response = await axios.get(`${GITHUB_API_URL}?q=${encodeURIComponent(query)}&page=${page}&per_page=12`, {
      headers: {
        Authorization: `token ${GITHUB_PAT}`,
      },
    });

    if (!response.data.items || response.data.items.length === 0) {
      throw new Error("No users found with the given criteria");
    }

    const userDetailsPromises = response.data.items.map(async (user) => {
      const res = await axios.get(user.url, {
        headers: {
          Authorization: `token ${GITHUB_PAT}`,
        },
      });
      return res.data;
    });

    const usersDetailed = await Promise.all(userDetailsPromises);

    return {
      items: usersDetailed,
      total_count: response.data.total_count,
    };
  } catch (err) {
    throw new Error(err.response?.data?.message || "User not found or API limit exceeded");
  }
};

