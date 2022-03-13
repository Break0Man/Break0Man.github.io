const togglButton = document.getElementsByClassName('toggle-btn')[0]
const navbarLinks = document.getElementsByClassName('items')[0]
togglButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})