import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/search/users"; // Correct endpoint

export const fetchUserData = async (username, location, minRepos, page=1) => {
  try {
    const query = `q=${username} ${location ? `location:${location}` : ""} ${
      minRepos ? `repos:>${minRepos}` : ""
    }&page=${page}&per_page=10`;

    console.log("Fetching data with query:", query);

    const response = await axios.get(`${GITHUB_API_URL}?${query}`);

    if(!response.data.items || response.data.items.length === 0){
      throw new Error ("No users found with the given criteria");
    }

    const userDetailsPromises = response.data.items.map((user)=>
    axios.get(user.url).then((res)=>res.data));

    const usersDetailed = await Promise.all(userDetailsPromises);
  

    return{
      items: usersDetailed,
      total_count: response.data.total_count,
    };
} catch (err){
  console.error("Error fetching data:", err.response?.data || err.message);
  throw new Error(err.response?.data?.message || "User not found or API limit exceeded")
}
};
