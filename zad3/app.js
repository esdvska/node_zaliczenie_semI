const fs = require("fs");
const filePath = __filename;

(() => {
  fs.stat(filePath, (err, stats) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Czas utworzenia: ${stats.birthtime}
        Czas modyfikacji: ${stats.mtime}
        Rozmiar pliku: ${stats.size}`);
    }
  });
})();
