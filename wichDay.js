function wichDay (aText, dayselected, resOpenWeatherCall){
    
    let countDay = 0
    let day = 0;
    let dayByDay = 0;
    let name = ""

    // This function assigns day names to dayByDay states
    function dateName(dayByDay, name){
        if(dayByDay == 0){
            return name = "Sun"
        }
        if(dayByDay == 1){
            return name = "Mon"
        }
        if(dayByDay == 2){
            return name = "Tue"
        }
        if(dayByDay == 3){
            return name = "Wed"
        }
        if(dayByDay == 4){
            return name = "Thu"
        }
        if(dayByDay == 5){
            return name = "Fri"
        }
        if(dayByDay == 6){
            return name = "Sat"
        }

    }

    //  This function change the innerText of the html to display the names of the days selected
    for(let i=0; i<40; i+=8) {

        day = new Date(resOpenWeatherCall.list[i].dt_txt);
        dayByDay = day.getDay();

        if(countDay == 0 ){
            aText[countDay].innerText = dateName(dayByDay, name)
        }
            else if(countDay == 1){
                aText[countDay].innerText = dateName(dayByDay, name)
            }
                else if(countDay == 2){
                    aText[countDay].innerText = dateName(dayByDay, name)
                }
                    else if(countDay == 3){
                        aText[countDay].innerText = dateName(dayByDay, name)
                    }
                        else if(countDay == 4){
                            aText[countDay].innerText = dateName(dayByDay, name)
                        }
        // Stop the loop since the number of days requested are aimed
        if(dayselected.value == countDay){
            break
        }

        //console.log(aText[countDay].innerText)
        countDay++

        
    };
}