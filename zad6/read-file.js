const fs = require("fs");
const fsPromises = fs.promises;

const readFile = async (path) => {
  try {
    if (fs.existsSync(path)) {
      console.log(
        `${(await fsPromises.readFile(path)).toString()} 
         --> To już cała Twoja lista TODO <--
        `
      );
    } else {
      console.log(
        "Nie utworzyłeś jeszcze swojej listy zadań. Dodaj pierwsze zadanie :)"
      );
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = { readFile };
