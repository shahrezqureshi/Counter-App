// The web-page element with an ID of 'displayCounter' is
// being loaded into a variable called 'displayVar' for easy access
let displayVar = document.getElementById("displayCounter")

// JSON.parse() function is being used to retrieve the string
// value of tallyCountSaved key into a variable called tallyCount
tallyCount = JSON.parse(localStorage.getItem('tallyCountSaved'))

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
    localStorage.setItem('tallyCountSaved', JSON.stringify(tallyCount))
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
if (tallyCount === nul) {
    displayVar.textContent = 0 
} else {
        displayVar.textContent = tallyCount
}