import { burger } from './components/burger'
import { hoverImg } from './components/hoverImg'
import SmoothScroll from 'smooth-scroll'
import { playVideo } from './components/youtube'

document.addEventListener('DOMContentLoaded', () => {
  const scroll = new SmoothScroll('a[href*="#"]')
  burger()
  hoverImg()
  playVideo()
})
