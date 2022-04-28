export const hoverImg = () => {
  let bg = document.querySelectorAll('.mouse-bg')
  for (let i = 0; i < bg.length; i++) {
    bg[i].addEventListener('mousemove', function (e) {
      let x = e.clientX / window.innerWidth
      let y = e.clientY / window.innerHeight
      bg[i].style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)'
    })
  }
}
