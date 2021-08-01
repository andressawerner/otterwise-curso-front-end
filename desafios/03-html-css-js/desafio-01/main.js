function openMenuMobile(elem) {
  if (elem.classList.contains('change')) {
    elem.innerHTML = '<i class="fas fa-bars fa-2x"></i>'
  } else {
    elem.innerHTML = '<i class="fas fa-times fa-2x"></i>'
  }
  document.getElementById('menu-mobile').classList.toggle('active')
  elem.classList.toggle('change')
}

function closeMenuMobile(elem) {
  const menuMobile = document.getElementById('menu-mobile')
  const topBarMobile = document.getElementById('topbar-mobile')
  topBarMobile.innerHTML = '<i class="fas fa-bars fa-2x"></i>'
  topBarMobile.classList.toggle('change')
  menuMobile.classList.toggle('active')
}

window.onload = () => {}
