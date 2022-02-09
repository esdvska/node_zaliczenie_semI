const yargs = require("yargs");
const colors = require("colors");

const args = yargs.argv;
(() => {
  if (args.rainbow) {
    console.log(args.$0);
  } else {
    console.log(
      `Proszę podaj mi parametry wejściowe '--rainbow==Twój_ciąg_znaków'`
    );
  }
})();
