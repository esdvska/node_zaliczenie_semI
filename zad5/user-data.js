const axios = require("axios");
const getUserData = async (username) => {
  try {
    const userData = await axios(`https://api.github.com/users/${username}`);
    return userData.data;
  } catch (err) {
    console.log(err);
  }
};
const getUserRepositories = async (username) => {
  try {
    const userRepositories = await axios(
      `https://api.github.com/users/${username}/repos`
    );
    return userRepositories.data;
  } catch (err) {
    console.log(err);
  }
};
module.exports = { getUserData, getUserRepositories };
