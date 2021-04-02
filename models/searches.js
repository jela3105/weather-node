class Searches {
  history = ["Ciudad de Mexico", "Madrid"];
  constructor() {
    //TODO: Retrieve db if exist
  }

  async city(place = "") {
    //http request
    console.log(place);
    return []; //return all places that match whith the place
  }
}

module.exports = Searches;
