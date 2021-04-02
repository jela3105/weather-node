const axios = require("axios");
class Searches {
  history = ["Ciudad de Mexico", "Madrid"];
  constructor() {
    //TODO: Retrieve db if exist
  }

  get paramsMapbox() {
    return {
      access_token: "",
      limit: 5,
    };
  }

  async city(place = "") {
    //http request
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
        params: this.paramsMapbox,
      });
      const resp = await instance.get();
      console.log(resp.data);
    } catch (error) {
      return []; //return all places that match whith the place
    }
  }
}

module.exports = Searches;
