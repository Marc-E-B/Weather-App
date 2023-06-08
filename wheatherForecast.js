const openWeatherKey = "7ba655eb789e1c8afa1c27eadfbe989e";
const openCageKey = "12f708e6ad9c488ca3e2d52e036d9249";
const btnRequest = document.querySelector("#btn");
const searchBarRequest = document.querySelector(".searchZone input");
const daySelect = document.querySelector("select");
const image = document.querySelectorAll("img");
const text = document.querySelectorAll(".weekDay");
const eye = document.querySelector("section");
const temperaturetext = document.querySelectorAll(".temperature");

console.log(temperaturetext)
// Remove the loading eye
eye.classList.remove("stage")

btnRequest.addEventListener("click",async function (){

    // Add an eye while loading
    eye.classList.add("stage")
    initializeIcons(image)
    initializeTexts(text)
    initializeTexts(temperaturetext)

    let resultOpenCageCall = await callOpenCageApi(searchBarRequest, openCageKey);

    let resultOpenWeatherCall = await callOpenWeatherApi(resultOpenCageCall[0], resultOpenCageCall[1], openWeatherKey);

    // Remove the loading eye
    eye.classList.remove("stage")

    console.log(resultOpenWeatherCall)

    generateIcons(resultOpenWeatherCall, image, daySelect)
    wichDay(text, daySelect, resultOpenWeatherCall)
    getTemperature(resultOpenWeatherCall, temperaturetext, daySelect)

    darkMode(resultOpenWeatherCall)
    
})