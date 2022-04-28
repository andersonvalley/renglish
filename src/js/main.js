import { burger } from './components/burger'
import { hoverImg } from './components/hoverImg'
import SmoothScroll from 'smooth-scroll'

document.addEventListener('DOMContentLoaded', () => {
  const scroll = new SmoothScroll('a[href*="#"]')
  burger()
  hoverImg()
})
