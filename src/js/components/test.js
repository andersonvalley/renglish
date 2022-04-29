const questions = [
  { id: 1, quest: 'Do you speak … English?', ans: { 1: 'in', 2: 'on', 3: '-' } },
  { id: 2, quest: 'I … this film', ans: { 1: 'have seen', 2: 'saw', 3: 'was see' } },
  { id: 3, quest: 'Tom is … than me', ans: { 1: 'more tall', 2: 'taller', 3: 'more taller' } },
  { id: 4, quest: 'You should … it yesterday', ans: { 1: 'have done', 2: 'do', 3: 'did' } },
  {
    id: 5,
    quest: '… less you know, … better you sleep',
    ans: { 1: 'than …, then', 2: 'than …., the', 3: 'the …, the…' },
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
          <form name="data">
            <div class="test__ans">
            <input type="radio" id="1" checked name="contact" value="${questions[current].ans[1]}">
            <label for="1">${questions[current].ans[1]}</label>
          </div>
          <div class="test__ans">
            <input type="radio" id="2" name="contact" value="${questions[current].ans[2]}">
            <label for="2">${questions[current].ans[2]}</label>
          </div>
          <div class="test__ans">
            <input type="radio" id="3" name="contact" value="${questions[current].ans[3]}">
            <label for="3">${questions[current].ans[3]}</label>
          </div>
        </form>
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
