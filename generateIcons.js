function generateIcons(resOpenWeatherCall, anImage, dayselected){

    // Initialize the number of days
    let countDay = 0;

    for(let i=0; i<40; i+=8){ 
        if(resOpenWeatherCall.list[i].weather[0].id <= 232){
            anImage[countDay].src = "Icons/thunderstorm.png"
        }
            else if(resOpenWeatherCall.list[i].weather[0].id  <= 321){
                anImage[countDay].src = "Icons/rain.png"
            }
                else if(resOpenWeatherCall.list[i].weather[0].id  <= 531){
                    anImage[countDay].src = "Icons/rain.png"
                }
                    else if(resOpenWeatherCall.list[i].weather[0].id  <= 622){
                        anImage[countDay].src = "Icons/snow.png"
                        }
                        else if(resOpenWeatherCall.list[i].weather[0].id <= 781){
                            anImage[countDay].src = "Icons/mist.png"
                        }
                            else if(resOpenWeatherCall.list[i].weather[0].id  == 800){
                                anImage[countDay].src = "Icons/clear.png"
                            }
                                else if(resOpenWeatherCall.list[i].weather[0].id  >= 801){
                                    anImage[countDay].src = "Icons/clouds.png"
                                }
        
        // Stop the loop since the number of days requested are aimed
        if(dayselected.value == countDay){
            break
        }

        // Add days
        countDay ++
    }
}