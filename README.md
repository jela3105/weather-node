# weather-node
Project to learn how to make http requests to other API with node.

## Quick start 
Install [nodejs](https://nodejs.org/en/download/)

Clone the and open the project:
```sh
git clone https://github.com/jela3105/weather-node.git
cd weather-node
```
Create the file ```.env``` 

Add your API keys from [Open Weather API](https://home.openweathermap.org/api_keys) and [Mapbox](https://docs.mapbox.com/)
to ```.env``` file:
```.env
OPENWEATHER_KEY={your open weather api key here}
MAPBOX_KEY={your mapbox api key here}
```

Run the project with the command:
```sh
node index.js
```
