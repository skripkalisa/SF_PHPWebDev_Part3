const trafficLightEl = document.querySelectorAll('#trafficLight > p ');

const parent = document.querySelector('#trafficLight ')
const traffic = parent.nextElementSibling.children

const setSpeed = (n) => {
  for (el of traffic)
    el.setAttribute('style', `animation-duration: ${n}s;`)
}
const trafficSpeed = (n) => {
  console.log("speed");
  switch (n) {
    case 0:
      setSpeed(0)
      break
    case 1:
      setSpeed(16)
      break
    case 2:
      setSpeed(2)
      break
  }
}

let n = 0
const colors = ['red', 'yellow', 'green']
const trafficLight = () => {
  trafficSpeed(n)
  for (el of trafficLightEl)
    el.style = 'background-color: black;'
  trafficLightEl[n].style = `background-color: ${colors[n]};`
  n++
  if (n >= 3) n = 0
}

const test = () => console.log("click");

trafficLightEl.forEach(el => {
  el.addEventListener('click', trafficLight)
})