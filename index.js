const { readInput, inquirerMenu, pause } = require("./helpers/inquirer");
const Searches = require("./models/searches");

const main = async () => {
  let opt;

  const searches = new Searches();
  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        //show massage
        //
        const place = await readInput("City: ");
        await searches.city(place);
        console.log(place);
        //search places
        //
        //select place
        //
        //Weather data
        //
        //show results
        //
        console.log("\nCity information\n".green);
        console.log("City:");
        console.log("Lat:");
        console.log("Lng:");
        console.log("Temperature:");
        console.log("Min:");
        console.log("Max:");
        break;
    }
    if (opt !== 0) await pause();
  } while (opt != 0);
};

main();
