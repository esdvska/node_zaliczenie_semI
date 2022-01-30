// Stwórz aplikację która pobierze z GitHuba informacje o użytkowniku i jego repozytoriach. Dodatkowo sprawdź aktualną pogodę w lokalizacji użytkownika.

// w parametrach uruchomienia jest podawany login użytkownika oraz opcjonalnie informacja czy wyświetlać liczbę śledzących użytkownika, sposób obsługi parametrów wejściowych jest dowolny (w kodzie rozwiązania należy dodać komentarz z przykładowym wywołaniem).
// wyświetl nazwę użytkownika (name)
// wyświetl liczbę śledzących użytkownika (followers) - tylko jeżeli użyto odpowiedniego parametru przy uruchomieniu aplikacji
// wyświetl liczbę repozytoriów
// wyświetl nazwy repozytoriów (name)
// wyświetl opis pogody (weather.main, weather.description) w lokalizacji użytkownika (location - zwraca GitHub w danych użytkownika)
// żądania do API wysyłaj asynchronicznie
// pamiętaj o obsłudze błędów
// podziel rozwiązanie na moduły
// Lista endpointów API:

// dane użytkownika: https://api.github.com/users/{userName}
// np https://api.github.com/users/octocat
// repozytoria użytkownika: https://api.github.com/users/{username}/repos
// np https://api.github.com/users/octocat/repos
// pogoda: https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q={name}
// np https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q=Białystok

const yargs = require("yargs");
const args = yargs.argv;
const userDataModule = require("./user-data");

//parametry wejściowe: np.'--username=esdvska --showFollowers
(async () => {
  if (args.username) {
    try {
      const userData = await userDataModule.getUserData(args.username);
      const repositoriesData = await userDataModule.getUserRepositories(
        args.username
      );

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
    } catch (err) {
      console.log("Używkonik nie istnieje");
    }
  } else {
    console.log(
      `Proszę podać wymagane parametry wejściowe '--username=Twój_ciąg_znaków'`
    );
  }
})();
