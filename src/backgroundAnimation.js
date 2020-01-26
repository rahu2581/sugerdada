import { Scene } from 'three/src/scenes/Scene'
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer'
import { Texture } from 'three/src/textures/Texture'
import { SpriteMaterial } from 'three/src/materials/SpriteMaterial'
import { Sprite } from 'three/src/objects/Sprite'
import { Color } from 'three/src/math/Color'

function drawCircle (canvas, radius) {
  const context = canvas.getContext('2d')
  const centerX = canvas.width / 2
  const centerY = canvas.height / 2
  context.beginPath()
  context.arc(centerX, centerY, radius, 0, Math.PI * 2, false)
  context.fillStyle = 'white'
  context.fill()
}

function createCanvas (width, height) {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  return canvas
}

function createTexture () {
  const canvas = createCanvas(256, 256)
  drawCircle(canvas, 20)
  const texture = new Texture(canvas)
  texture.needsUpdate = true
  return texture
}

const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000)
camera.position.z = 1000
camera.position.y = 500
camera.rotateZ(1.58)
camera.rotateX(-0.65)
const scene = new Scene()
const texture = createTexture()
const particles = []
let i = 0
for (let ix = 0; ix < 30; ix++) {
  for (let iy = 0; iy < 30; iy++) {
    const material = new SpriteMaterial({ map: texture, color: 0x2e294e, fog: false })
    const particle = particles[i++] = new Sprite(material)
    particle.scale.set(32, 32, 1)
    particle.position.y = ix * 100 - ((20 * 100) / 2)
    particle.position.z = iy * 100 - ((20 * 100) / 2)
    scene.add(particle)
  }
}
const renderer = new WebGLRenderer()
renderer.setClearColor(0x2f2c33, 1)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.prepend(renderer.domElement)
let count = 0
const scale = (val, a, b, max, min) => (b - a) * ((val - min) / (max - min)) + a
const animate = () => {
  requestAnimationFrame(animate)
  let i = 0
  for (let ix = 0; ix < 30; ix++) {
    for (let iy = 0; iy < 30; iy++) {
      const particle = particles[i++]
      const sin = Math.sin(count) * 0.5 + 0.5
      const hue = Math.floor(scale(sin, 200, 58, 1, 0))
      const saturation = Math.floor(scale(sin, 0.95, 0.15, 1, 0) * 100)
      const light = Math.floor(scale(sin, 0.91, 0.43, 1, 0) * 100)
      particle.material.color = new Color(`hsl(${hue}, ${saturation}%, ${light}%)`)
      particle.position.x = (Math.sin((ix + count) * 0.3) * 25) +
        (Math.sin((iy + count) * 0.5) * 25) + 300
      particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 20 +
        (Math.sin((iy + count) * 0.5) + 1) * 20
    }
  }
  count += 0.01
  renderer.render(scene, camera)
}
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

export {
  animate,
}
