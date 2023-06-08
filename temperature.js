function getTemperature(resOpenWeatherCall, aText, dayselected){
    let countDay = 0;
    
    for (let i = 0; i < 40; i+=8) {

        aText[countDay].innerText = `${resOpenWeatherCall.list[i].main.temp - 273,15}°C`

        if(dayselected.value == countDay){
            break
        }

    countDay ++
        
        
    }
}