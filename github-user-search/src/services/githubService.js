// import axios from "axios";

// const GITHUB_API_URL = "https://api.github.com/search/users?q";
// const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY || "";
// const headers = GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : {};

// /**
//  * Fetch GitHub users based on search criteria.
//  * @param {string} username - GitHub username.
//  * @param {string} location - User location.
//  * @param {string} minRepos - Minimum number of repositories.
//  * @param {number} page - Page number for pagination.
//  * @returns {Promise<{items: Array, total_count: number}>} - List of users and total count.
//  */
// export const fetchUserData = async (username, location, minRepos, page = 1) => {
//   try {
//     if (!username.trim() && !location.trim() && !minRepos.trim()) {
//       throw new Error("Please provide at least one search parameter.");
//     }

//     // Construct GitHub search query
//     let queryParts = [];
//     if (username.trim()) queryParts.push(username.trim());
//     if (location.trim()) queryParts.push(`location:${location.trim()}`);
//     if (minRepos.trim()) queryParts.push(`repos:>${minRepos.trim()}`);

//     const query = queryParts.join(" ");

//     // GitHub API request
//     const response = await axios.get(`${GITHUB_API_URL}?q=${encodeURIComponent(query)}&page=${page}&per_page=12`, { headers });

//     if (!response.data.items || response.data.items.length === 0) {
//       throw new Error("No users found matching your search criteria.");
//     }

//     // 🛑 Check rate limit before making extra calls
//     const remainingRequests = parseInt(response.headers["x-ratelimit-remaining"] || "1", 10);
//     if (remainingRequests <= 0) {
//       throw new Error("GitHub API rate limit exceeded. Please try again later.");
//     }

//     // Optional: Fetch detailed user profiles only when necessary
//     const usersDetailed = await Promise.all(
//       response.data.items.map(async (user) => {
//         try {
//           const userRes = await axios.get(user.url, { headers });
//           return userRes.data;
//         } catch {
//           return user; // Fallback to basic user data if detailed request fails
//         }
//       })
//     );

//     return {
//       items: usersDetailed,
//       total_count: response.data.total_count,
//     };
//   } catch (err) {
//     // Handle rate limit errors
//     if (err.response?.status === 403 && err.response?.headers["x-ratelimit-remaining"] === "0") {
//       throw new Error("GitHub API rate limit exceeded. Please try again later.");
//     }

//     throw new Error(err.response?.data?.message || "Error fetching data from GitHub.");
//   }
// };

import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/search/users"; // Base URL already includes `?q`
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
export const fetchUserData = async (username, location, minRepos, page = 1) => {
  try {
    if (!username.trim() && !location.trim() && !minRepos.trim()) {
      throw new Error("Please provide at least one search parameter.");
    }

    // Construct GitHub search query
    let queryParts = [];
    if (username.trim()) queryParts.push(username.trim());
    if (location.trim()) queryParts.push(`location:${location.trim()}`);
    if (minRepos.trim()) queryParts.push(`repos:>${minRepos.trim()}`);

    const query = encodeURIComponent(queryParts.join(" ")); // Correctly encode query

    // 🛑 Check rate limit before making the API request
    console.log("Rate Limit Check - Before Request");

    // GitHub API request (correct URL formatting)
    const response = await axios.get(`${GITHUB_API_URL}?q=${query}&page=${page}&per_page=12`, { headers });

    console.log("Rate Limit Remaining:", response.headers["x-ratelimit-remaining"]);

    if (!response.data.items || response.data.items.length === 0) {
      throw new Error("No users found matching your search criteria.");
    }

    // Optional: Fetch detailed user profiles only when necessary
    const usersDetailed = await Promise.all(
      response.data.items.map(async (user) => {
        try {
          const userRes = await axios.get(user.url, { headers });
          return userRes.data;
        } catch {
          return user; // Fallback to basic user data if detailed request fails
        }
      })
    );

    return {
      items: usersDetailed,
      total_count: response.data.total_count,
    };
  } catch (err) {
    // Handle rate limit errors
    if (err.response?.status === 403 && err.response?.headers["x-ratelimit-remaining"] === "0") {
      throw new Error("GitHub API rate limit exceeded. Please try again later.");
    }

    throw new Error(err.response?.data?.message || "Error fetching data from GitHub.");
  }
};
