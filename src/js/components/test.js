import { validatePhone } from './validatePhone'

const questions = [
  { id: 1, quest: 'Do you speak … English?', ans: ['in', 'on', '-'] },
  { id: 2, quest: 'I … this film', ans: ['have seen', 'saw', 'was see'] },
  { id: 3, quest: 'Tom is … than me', ans: ['more tall', 'taller', 'more taller'] },
  { id: 4, quest: 'You should … it yesterday', ans: ['have done', 'do', 'did'] },
  {
    id: 5,
    quest: '… less you know, … better you sleep',
    ans: ['than …, then', 'than …., the', 'the …, the…'],
  },
]

export const test = (content, form) => {
  let current = 0
  let answers = []

  function rerender() {
    content.textContent = ''
    content.insertAdjacentHTML('beforeend', html())
    const next = content.querySelector('.next')
    const prev = content.querySelector('.prev')
    next.addEventListener('click', nextQuestion)

    if (current > 0) {
      prev.addEventListener('click', prevQuestion)
      prev.disabled = false
    }
  }

  function html() {
    return `
      <div class="test__header">
        <p>
          Определите свой уровень языка, чтобы мы могли подобрать для вас группу
        </p>
        <span class="test__count">${current + 1}/${questions.length}</span>
      </div>

      <div class="test__content">
        <p class="quest">${questions[current].id}. ${questions[current].quest}</p>
          ${questions[current].ans
            .map((item, index) => {
              return `
                <div class="test__ans">
                  <input type="radio" id="${index + 1}" ${
                index === 0 && 'checked'
              } name="contact" value="${item}">
                  <label for="${index + 1}">${item}</label>
                </div>
            `
            })
            .join('')}
      </div>
  
      <div class="test__btns">
        <button disabled class="prev btn-reset btn">← Назад</button>
        <button class="next btn-reset btn">${
          current + 1 === questions.length ? 'Результат' : 'Далее →'
        }</button>
      </div>
    `
  }

  rerender()

  function nextQuestion() {
    const answered = document.querySelector('input[name="contact"]:checked').value
    answers[questions[current].quest] = answered

    current += 1

    if (current + 1 > questions.length) {
      content.textContent = ''
      content.insertAdjacentHTML('beforeend', form)
      validatePhone()
      return
    }

    rerender()

    console.log(answers)
  }

  function prevQuestion() {
    delete answers[questions[current].quest]

    current -= 1

    if (current + 1 > questions.length) {
      content.textContent = ''
      content.insertAdjacentHTML('beforeend', form)

      return
    }

    rerender()
  }
}
