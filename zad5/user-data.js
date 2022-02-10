const axios = require("axios");

const getUserData = async (username) => {
  const userData = await axios(`https://api.github.com/users/${username}`);
  return userData.data;
};

const getUserRepositories = async (username) => {
  const userRepositories = await axios(
    `https://api.github.com/users/${username}/repos`
  );
  return userRepositories.data;
};

module.exports = { getUserData, getUserRepositories };
