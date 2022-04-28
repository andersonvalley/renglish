export const playVideo = () => {
  const player = document.querySelector('.youtube')

  document.querySelector('.play').addEventListener('click', () => {
    player.classList.add('active')
    const html = `
    <iframe width="800" height="315" src="https://www.youtube.com/embed/d-wb0O5kSNc"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
      `

    player.innerHTML = html
  })
}
