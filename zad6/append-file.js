const fs = require("fs");
const fsPromises = fs.promises;
const appendFile = async (path, dataToAppend) => {
  try {
    await fsPromises.appendFile(
      path,
      `
      - ${dataToAppend}
        `
    );
    console.log(
      `Zadanie --> ${dataToAppend} <-- zostało dopisane do Twojej listy TODO`
    );
  } catch (err) {
    console.log(err);
  }
};
module.exports = { appendFile };
