function darkMode(resOpenWeatherCall) {

    // Compare the day time with sunset and sunrise hours
    if((resOpenWeatherCall.list[0].dt ) <= resOpenWeatherCall.city.sunset && (resOpenWeatherCall.list[0].dt ) >= resOpenWeatherCall.city.sunrise){
        document.body.classList.remove("nightMode")
    }
    else{
        document.body.classList.add("nightMode")
    }
}