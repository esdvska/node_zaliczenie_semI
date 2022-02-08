const { argv } = require("yargs");
const yargs = require("yargs/yargs");
const appendFileModule = require("./append-file");
const readFileModule = require("./read-file");
const path = "todolist.js";

yargs(process.argv.slice(2))
  .command({
    command: "list",
    aliases: ["lista", "list"],
    desc: "Wyświetl moją listę TODO",
    handler: (argv) => {
      readFileModule.readFile(path);
    },
  })
  .command({
    command: "add [value]",
    aliases: ["dodaj", "add"],
    desc: "Dodaj zadanie do listy TODO",
    builder: (yargs) =>
      yargs.default(
        "value",
        "Po słowie 'dodaj' podaj zadanie, które chcesz dodać"
      ),
    handler: (argv) => {
      appendFileModule.appendFile(path, argv.value);
    },
  }).argv;

if (!argv._[0]) {
  console.log(
    `Jeśli chcesz uruchomić aplikację proszę wybierz jedną z dwóch opcji:
    dodaj 'Twoje zadanie do dodania' - jeśli chcesz dodać zadanie do listy TODO,
    lista - jeśli chcesz wyświetlić swoją listę TODO`
  );
}
