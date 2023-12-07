const showBTN = document.querySelector('#showBTN')
const hideBTN = document.querySelector('#hideBTN')
function show() {
  hideBTN.classList.add('addSideMenu')
  hideBTN.classList.remove('removeSideMenu')
  showBTN.style.display = 'none'
}
function hide() {
  hideBTN.classList.remove('addSideMenu')
  showBTN.classList.add('addSideMenu')
  showBTN.style.display = 'block'
}

const theme = document.querySelector('.themeColor')
function toggles() {
  theme.classList.toggle('themesChange')
}
