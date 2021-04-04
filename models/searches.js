const fs = require("fs");

const axios = require("axios");
class Searches {
  history = [];
  dbPath = "./db/database.json";
  constructor() {
    //TODO: Retrieve db if exist
  }

  get paramsMapbox() {
    return {
      access_token: process.env.MAPBOX_KEY,
      limit: 5,
    };
  }

  get credentiasOpenweather() {
    return {
      appid: process.env.OPENWEATHER_KEY,
      units: "metric",
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
      return resp.data.features.map((place) => ({
        id: place.id,
        name: place.place_name,
        lng: place.center[0],
        lat: place.center[1],
      }));
    } catch (error) {
      return []; //return all places that match whith the place
    }
  }

  async weatherByPlace(lat, lon) {
    try {
      const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather`,
        params: { ...this.credentiasOpenweather, lat, lon },
      });
      const resp = await instance.get();
      const { weather, main } = resp.data;
      return {
        desc: weather[0].description,
        min: main.temp_min,
        max: main.temp_max,
        temp: main.temp,
      };
    } catch (error) {
      console.log(error);
    }
  }
  addHistory(place = "") {
    // TODO: prevent duplicated
    if (this.history.includes(place.toLocaleLowerCase())) return;

    this.history.unshift(place.toLocaleLowerCase());
    this.saveDB();
  }

  saveDB() {
    const payload = {
      history: this.history,
    };
    fs.writeFileSync(this.dbPath, JSON.stringify(payload));
  }

  readDB() {}
}

module.exports = Searches;
