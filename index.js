// Load the Dipslay Container

var displayButton = document.getElementById('display_container')

// Load Save Modal Elements for Modal Container and Modal Dialog
var saveModal = document.getElementById('save_modal')
var saveModalDialog = document.getElementById('save_modal_dialog')
var saveButton = document.getElementById('displaySave')

// Load Reset Modal Elements for Modal Container, Dialog and Buttons
var resetModal = document.getElementById('reset_modal')
var resetModalDialog = document.getElementById('reset_modal_dialog')
var resetButton = document.getElementById('displayReset')

// JSON.parse() function is being used to retrieve the string
// value of tallyCountSaved key into a variable called tallyCount
tallyCount = JSON.parse(localStorage.getItem('tallyCountSaved'))

// The web-page element with an ID of 'displayCounter' is
// being loaded into a variable called 'displayVar' for easy access
let displayVar = document.getElementById("displayCounter")

// Increment function is adding 1 to the tallyCount variable 
// (which has the tallyCountSaved value loaded from localStorage)
// and modifying textContent of the web-page element called
// 'displayCounter' whose address is loaded into displayVar variable
const tallyIncrement = () => {
    tallyCount += 1
    displayVar.textContent = tallyCount
}

// JSON.stringify() function is converting the integer value of 
// tallyCount into a string since localStorage can only save string 
// values
const tallySave = () => {
    localStorage.setItem('tallyCountSaved', JSON.stringify(tallyCount));
}

// tallyReset function is setting the tallyCount to 0, and saving
// the same value in localStorage against the key 'totalCountSave'
// so that upon reload it may get read by JSON.parse() function as 
// an integer
const tallyReset = () => {
    tallyCount = 0
    localStorage.setItem('tallyCountSaved', '0')
    displayVar.textContent = tallyCount
}

// This is merely setting the initial display of the web-page based 
// on the tallyCount loaded from localStorage
if (tallyCount === null) {
    displayVar.textContent = 0 
} else {
        displayVar.textContent = tallyCount
}

// Adding eventListeners to Elements on the Document



// Display Button which on tap would initiate the increment function
displayButton.addEventListener ("click", () => {
    tallyIncrement()
})


// Save Button would Show Save Modal while Saving the Counter
saveButton.addEventListener ("click", () => {
    tallySave()
    saveModal.classList.add('visible')
})

saveModal.addEventListener ("click", () => {
    saveModal.classList.remove('visible')
})

saveModalDialog.addEventListener ("click", () => {
    saveModal.classList.remove('visible')
})

// Reset Button would Show the Reset Modal seeking Confirmation for Resetting
resetButton.addEventListener ("click", () => {
    resetModal.classList.add('visible')
})

resetModal.addEventListener ("click", () => {
    resetModal.classList.remove('visible')
})

resetModalDialog.addEventListener ("click", () => {
    tallyReset()
    resetModal.classList.remove('visible')
})
