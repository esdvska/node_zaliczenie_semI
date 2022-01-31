const showUserInfo = (userData, repositoriesData, args) => {
  console.log(
    `Nazwa użytkownika: ${userData.name || "Brak nazwy użytkownika"}
    Ilość repozytoriów: ${repositoriesData.length} `
  );
  if (repositoriesData.length) {
    console.log(
      `Nazwy repozytoriów: ${repositoriesData
        .map((rep) => rep.name)
        .join(", ")}`
    );
  }
  if (args.showFollowers) {
    console.log(`Ilość obserwatorów: ${userData.followers}`);
  }
};

module.exports = { showUserInfo };
