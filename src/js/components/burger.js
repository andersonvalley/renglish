export const burger = () => {
  const burgerBtn = document.querySelector('.burger')

  function showMenu() {
    burgerBtn.classList.toggle('burger--active')

    if (burgerBtn.classList.contains('burger--active')) {
      document.body.style.overflow = 'hidden'

      document.querySelector('.header__nav').addEventListener('click', e => {
        if (e.target !== e.currentTarget) return
        burgerBtn.classList.remove('burger--active')
        document.body.style.overflow = ''
      })
    } else {
      document.body.style.overflow = ''
    }
  }

  if (burgerBtn) {
    burgerBtn.addEventListener('click', showMenu)
  }
}
