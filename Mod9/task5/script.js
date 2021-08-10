const ti = document.querySelector('input')
const dub = document.querySelector('#duplicateField')
const btn = document.querySelector('form  button')

const chars = ['Tab', 'CapsLock', 'Shift', 'Control', 'Alt', 'Escape', 'Backspace', 'Enter', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Delete', 'Insert', 'NumLock', 'Process', 'Home', 'End', 'PageUp', 'PageDown']

ti.addEventListener('keyup', (e) => {
  dub.innerText = ti.value
})

btn.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(dub.innerText);
  dub.innerText = ''
  ti.value = ''
})