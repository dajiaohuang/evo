// Optional enhancement for pre-rendered Pages maps. No network or dependencies.
const viewport = document.querySelector('.map-viewport')
const toolbar = document.querySelector('.map-tools')
if (viewport && toolbar) {
  const image = viewport.querySelector('img')
  const output = toolbar.querySelector('output')
  let scale = 1
  let x = 0
  let y = 0
  let pointer = null
  const paint = () => {
    const boundX = viewport.clientWidth * (scale - 1) / 2
    const boundY = viewport.clientHeight * (scale - 1) / 2
    x = Math.max(-boundX, Math.min(boundX, x))
    y = Math.max(-boundY, Math.min(boundY, y))
    image.style.transform = `translate(${x}px, ${y}px) scale(${scale})`
    output.value = `${Math.round(scale * 100)}%`
    toolbar.querySelector('[data-zoom="1"]').disabled = scale >= 4
    toolbar.querySelector('[data-zoom="-1"]').disabled = scale <= 1
  }
  const zoom = (delta) => { scale = Math.max(1, Math.min(4, scale + delta * .5)); paint() }
  const reset = () => { scale = 1; x = 0; y = 0; paint() }
  toolbar.querySelectorAll('[data-zoom]').forEach((button) => button.addEventListener('click', () => zoom(Number(button.dataset.zoom))))
  toolbar.querySelector('[data-reset]').addEventListener('click', reset)
  viewport.addEventListener('keydown', (event) => {
    if (event.key === '+' || event.key === '=') zoom(1)
    else if (event.key === '-') zoom(-1)
    else if (event.key === '0') reset()
    else if (event.key === 'ArrowLeft') { x += 40; paint() }
    else if (event.key === 'ArrowRight') { x -= 40; paint() }
    else if (event.key === 'ArrowUp') { y += 40; paint() }
    else if (event.key === 'ArrowDown') { y -= 40; paint() }
    else return
    event.preventDefault()
  })
  viewport.addEventListener('pointerdown', (event) => {
    if (!event.isPrimary || event.button !== 0) return
    pointer = { id: event.pointerId, x: event.clientX, y: event.clientY }
    viewport.setPointerCapture(event.pointerId)
    viewport.dataset.dragging = ''
  })
  viewport.addEventListener('pointermove', (event) => {
    if (!pointer || pointer.id !== event.pointerId) return
    x += event.clientX - pointer.x
    y += event.clientY - pointer.y
    pointer.x = event.clientX
    pointer.y = event.clientY
    paint()
  })
  const stop = () => { pointer = null; delete viewport.dataset.dragging }
  viewport.addEventListener('pointerup', stop)
  viewport.addEventListener('pointercancel', stop)
  viewport.addEventListener('lostpointercapture', stop)
  window.addEventListener('resize', paint)
  viewport.dataset.interactive = ''
  toolbar.hidden = false
  paint()
}
