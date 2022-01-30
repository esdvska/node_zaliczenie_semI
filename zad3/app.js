const fs = require("fs");

const filePath = __filename;

const fileStats = () => {
  fs.stat(filePath, (err, stats) => {
    if (err) {
      console.log("Nie udało się pobrać statystyk pliku");
    } else {
      console.log(`Czas utworzenia: ${stats.birthtime}
        Czas modyfikacji: ${stats.mtime}
        Rozmiar pliku: ${stats.size}`);
    }
  });
};

fileStats();
