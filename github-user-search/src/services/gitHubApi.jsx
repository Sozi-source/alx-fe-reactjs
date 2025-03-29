import axios from "axios";

const GITHUB_API_URL= import.meta.env.VITE_GITHUB_API_URL || "https://api.github.com/users/"


export const fetchGitHubUser = async (username) => {
    try {
      const response = await axios.get(`${GITHUB_API_URL}${username}`, {
       
      });
      return response.data;
    } catch (error) {
      throw new Error("User not found or API limit exceeded");
    }
  };