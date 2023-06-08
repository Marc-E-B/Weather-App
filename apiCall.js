// APIs calls

async function callOpenCageApi(searchBarReq, key1){

    let position = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${searchBarReq.value}&key=${key1}`);
    let resPosition = await position.json();
    return [resPosition.results[0].geometry.lat , resPosition.results[0].geometry.lng];
}

async function callOpenWeatherApi(lat, lon, key2){

    let meteo = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key2}`);
    let resMeteo = await meteo.json();
    return resMeteo;
}