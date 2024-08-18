// Setup

tallyCount = 0
let displayVar = document.getElementById("displayCounter") 
let saveVar = document.getElementById("displaySaveCount")

// Reset Function
function tallyReset(){
    tallyCount = 0
    displayVar.textContent = tallyCount
    saveVar.textContent = ""
}

// Increment Function
function tallyIncrement() {
    tallyCount += 1
    displayVar.textContent = tallyCount
}

// Save Function
function tallySave(){
    saveVar.textContent += tallyCount + " - "
}
