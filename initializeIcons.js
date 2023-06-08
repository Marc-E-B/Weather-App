// These 2 functions help us to display the right amount of days by initialize the displaying them with empty ""

function initializeIcons(anImage){
    anImage.forEach((elem) => {
        elem.src = ""
    })
}

function initializeTexts(aText){
    aText.forEach((elem) => {
        elem.innerText = ""
    })
}