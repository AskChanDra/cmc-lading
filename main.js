import config from './modules/config'
import getPopularList from './modules/getPopularList'
import './style.css'

const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

getPopularList(config.popularRoute)

