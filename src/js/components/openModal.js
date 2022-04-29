import { test } from './test'

export const openModal = () => {
  const btns = document.querySelectorAll('*[data-modal]')
  const modalOverflow = document.querySelector('.overflow')
  const content = modalOverflow.querySelector('.modal__content')

  const html = `
      <form action="/" class="form">
        <div class="form__title">
          Заполните форму
          и мы свяжемся с вами!
        </div>
        <input class="form__input" type="text" name="name" placeholder="Ваше имя">
        <input class="form__input tel" type="tel" name="tel" placeholder="Ваш телефон" required>
        <button class="btn-reset btn">Отправить</button>
      </form>
    `

  function openModal(item) {
    modalOverflow.classList.add('open')
    document.body.style.overflow = 'hidden'

    content.textContent = ''
    content.insertAdjacentHTML('beforeend', html)

    if (item.getAttribute('data-test')) {
      test(content, html)
    }
  }

  function hideModal() {
    modalOverflow.classList.remove('open')
    document.body.style.overflow = ''
  }

  modalOverflow.addEventListener('click', e => {
    if (e.target.className === 'modal__close' || e.target.className === 'modal') {
      hideModal()
    }
  })

  btns.forEach(item => {
    item.addEventListener('click', () => openModal(item))
  })
}
