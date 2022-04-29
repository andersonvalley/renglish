export const showMap = () => {
  const observer = new IntersectionObserver(trueCallback)
  const target = document.querySelector('.contacts__map')
  observer.observe(target)

  const src =
    'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad4c9d580790e3e3784d6341532be1138281bdac81f8766a2577ca75264a438d3&amp;width=100%25&amp;height=580&amp;lang=ru_RU&amp;scroll=true'

  function trueCallback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const script = document.createElement('script')
        script.setAttribute('src', src)
        entry.target.append(script)
        observer.disconnect()
      }
    })
  }
}
