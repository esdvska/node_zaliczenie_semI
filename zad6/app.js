const { argv } = require("yargs");
const yargs = require("yargs/yargs");
const appendFileModule = require("./append-file");
const readFileModule = require("./read-file");
const path = "todolist.js";

yargs(process.argv.slice(2))
  .command({
    command: "list",
    aliases: ["lista"],
    desc: "Wyświetl moją listę TODO",
    handler: () => {
      readFileModule.readFile(path);
    },
  })
  .command({
    command: "add [value]",
    aliases: ["dodaj"],
    desc: "Dodaj zadanie do listy TODO",

    handler: (argv) => {
      if (argv.value) {
        appendFileModule.appendFile(path, argv.value);
      } else {
        console.log(`Po słowie 'dodaj' podaj zadanie, które chcesz dodać`);
      }
    },
  }).argv;

if (!argv._[0] || argv != "dodaj" || argv != "lista") {
  console.log(
    `Jeśli chcesz uruchomić aplikację proszę wybierz jedną z dwóch opcji:
    dodaj 'Twoje zadanie do dodania' - jeśli chcesz dodać zadanie do listy TODO,
    lista - jeśli chcesz wyświetlić swoją listę TODO`
  );
}
