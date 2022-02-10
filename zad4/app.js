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

(async () => {
  try {
    const dataFromFilePromise = await fsPromises.readFile(filePath);
    const dataFromFile = JSON.parse(dataFromFilePromise);
    if (dataFromFile.number) {
      const numberInfo = await getNumberInfo(dataFromFile.number);
      fsPromises.appendFile(filePath, JSON.stringify(numberInfo));
    } else {
      console.log("Twój plik nie zawiera numeru.");
    }
  } catch (err) {
    console.error(err);
  }
})();
