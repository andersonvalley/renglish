import SmoothScroll from 'smooth-scroll'
import AOS from 'aos'
import { burger } from './components/burger'
import { hoverImg } from './components/hoverImg'
import { playVideo } from './components/youtube'
import { validatePhone } from './components/validatePhone'
import { openModal } from './components/openModal'
import { showMap } from './components/showMap'

document.addEventListener('DOMContentLoaded', () => {
  const scroll = new SmoothScroll('a[href*="#"]')
  AOS.init()
  burger()
  hoverImg()
  playVideo()
  validatePhone()
  openModal()
  showMap()
})
