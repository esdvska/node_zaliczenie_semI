const yargs = require("yargs");
const colors = require("colors");
const args = yargs.argv;

(() => {
  if (args.rainbow) {
    console.log(args.rainbow.rainbow);
  } else {
    console.log(
      `Proszę podaj mi parametry wejściowe '--rainbow=Twój_ciąg_znaków'`
    );
  }
})();
