export const burger = () => {
  const burgerBtn = document.querySelector('.burger')

  function hideMenu() {
    burgerBtn.classList.remove('burger--active')
    document.body.style.overflow = ''
  }

  function showMenu() {
    burgerBtn.classList.toggle('burger--active')

    if (burgerBtn.classList.contains('burger--active')) {
      document.body.style.overflow = 'hidden'

      document.querySelector('.header__nav').addEventListener('click', e => {
        if (e.target.getAttribute('data-link') === 'link') hideMenu()
        if (e.target !== e.currentTarget) return
        hideMenu()
      })
    } else {
      hideMenu()
    }
  }

  if (burgerBtn) {
    burgerBtn.addEventListener('click', showMenu)
  }
}
