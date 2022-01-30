// Napisz aplikację która odczyta z pliku data.json liczbę oraz nazwę pliku, a następnie:

// pobierze z API informacje o danej liczbie (http://numbersapi.com/{number}, np http://numbersapi.com/42)
// informacje pobrane z API zapisze w pliku o pobranej wcześniej nazwie

// Pamiętaj o obsłudze błędów. Żądania do API oraz zapis do pliku wykonuj asynchronicznie.

const axios = require("axios");
const fsPromises = require("fs/promises");
const filePath = "data.json";

const getNumberInfo = async (numFromFile) => {
  const url = `http://numbersapi.com/${numFromFile}`;
  const response = await axios.get(url);
  return response.data;
};

const validateJSON = (body) => {
  try {
    const data = JSON.parse(body);
    return data;
  } catch (err) {
    // failed to parse
    console.log("Nieprawidłowy plik.");
    return null;
  }
};

(async () => {
  try {
    const dataFromFilePromise = await fsPromises.readFile(filePath);
    const dataFromFile = validateJSON(dataFromFilePromise);
    if (dataFromFile) {
      if (dataFromFile.number) {
        const numberInfo = await getNumberInfo(dataFromFile.number);
        fsPromises.appendFile(filePath, JSON.stringify(numberInfo));
      } else {
        console.log("Twój plik nie zawiera numeru.");
      }
    }
    return;
  } catch (err) {
    console.error(err);
  }
})();
