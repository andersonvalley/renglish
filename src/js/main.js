import { burger } from './components/burger'
import { hoverImg } from './components/hoverImg'
import SmoothScroll from 'smooth-scroll'
import { playVideo } from './components/youtube'
import { validatePhone } from './components/validatePhone'
import { openModal } from './components/openModal'

document.addEventListener('DOMContentLoaded', () => {
  const scroll = new SmoothScroll('a[href*="#"]')
  burger()
  hoverImg()
  playVideo()
  validatePhone()
  openModal()
})
