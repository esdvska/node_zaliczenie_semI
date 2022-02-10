const { argv } = require("yargs");
const colors = require("colors");

(() => {
  if (argv && argv.rainbow && argv.rainbow.length > 0) {
    console.log(argv.rainbow.rainbow);
  } else {
    console.log(
      `Proszę podaj mi parametry wejściowe '--rainbow=Twój_ciąg_znaków'`
    );
  }
})();
