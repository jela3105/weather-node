require("dotenv").config();
const {
  readInput,
  inquirerMenu,
  pause,
  placesList,
} = require("./helpers/inquirer");
const Searches = require("./models/searches");

const main = async () => {
  let opt;

  const searches = new Searches();
  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        const placeToSearch = await readInput("City: ");
        const places = await searches.city(placeToSearch);
        const idSelected = await placesList(places);
        if (idSelected == "0") continue;
        const selectedPlace = places.find((p) => p.id === idSelected);
        searches.addHistory(selectedPlace.name);
        const weather = await searches.weatherByPlace(
          selectedPlace.lat,
          selectedPlace.lng
        );
        console.clear();
        console.log("\nCity information\n".green);
        console.log("City: ", selectedPlace.name);
        console.log("Lat: ", selectedPlace.lat);
        console.log("Lng: ", selectedPlace.lng);
        console.log("Temperature: ", weather.temp);
        console.log("Min: ", weather.min);
        console.log("Max: ", weather.max);
        console.log("Description: ", weather.desc);
        break;
      case 2:
        searches.history.forEach((place, i) => {
          const idx = `${i + 1}.`.green;
          console.log(`${idx} ${place}`);
        });
        break;
    }
    if (opt !== 0) await pause();
  } while (opt != 0);
};

main();
//console.log(process.env);
