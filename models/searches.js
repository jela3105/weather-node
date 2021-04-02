const axios = require("axios");
class Searches {
  history = ["Ciudad de Mexico", "Madrid"];
  constructor() {
    //TODO: Retrieve db if exist
  }

  async city(place = "") {
    //http request
    try {
      const resp = await axios.get("https://reqres.in/api/userts?page=2");
      console.log(resp.data);
    } catch (error) {
      return []; //return all places that match whith the place
    }
  }
}

module.exports = Searches;
