import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/search/users"; // Correct endpoint

export const fetchUserData = async (username, location, minRepos) => {
  try {
    const query = `q=${username} ${location ? `location:${location}` : ""} ${
      minRepos ? `repos:>${minRepos}` : ""
    }`;

    const response = await axios.get(`${GITHUB_API_URL}?${query}`, {
    });

    // if (response.data.items.length === 0) {
    //   throw new Error("No users found with the given criteria");
    // }

    // Fetch full user details using the first match
    const userDetails = await axios.get(response.data.items[0].url);

    return userDetails.data;
  } catch (error) {
    throw new Error("User not found or API limit exceeded");
  }
};
