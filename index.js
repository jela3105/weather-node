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
        const selectedPlace = places.find((p) => p.id === idSelected);
        console.log("\nCity information\n".green);
        console.log("City: ", selectedPlace.name);
        console.log("Lat: ", selectedPlace.lat);
        console.log("Lng: ", selectedPlace.lng);
        console.log("Temperature: ");
        console.log("Min: ");
        console.log("Max: ");
        break;
    }
    if (opt !== 0) await pause();
  } while (opt != 0);
};

main();
//console.log(process.env);
