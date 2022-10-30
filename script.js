let hamburguer = document.querySelector('.hamburguer')
let links = document.querySelector('.links_hamburguer')
let hide = document.getElementById('hide')

hamburguer.addEventListener('click', () => {
  if (hide.classList.contains('hide')) {
    hide.classList.remove('hide')
  } else {
    hide.classList.add('hide')
  }
})