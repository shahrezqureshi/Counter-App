let darkMode = localStorage.getItem('darkModeStatus')

const themeSwitch = document.getElementById('theme_switch')

const enableDarkMode = () => {
    document.body.classList.add('dark_mode')
    localStorage.setItem('darkModeStatus', 'active')
}

const disableDarkMode = () => {
    document.body.classList.remove('dark_mode')
    localStorage.setItem('darkModeStatus', null)
}

if (darkMode === 'active') enableDarkMode()


themeSwitch.addEventListener ("click", () => {
    darkMode = localStorage.getItem('darkModeStatus')
    darkMode !== 'active' ? enableDarkMode() : disableDarkMode()
})