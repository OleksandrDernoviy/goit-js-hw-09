
const btnStart = document.querySelector('[data-start]')
const btnStop = document.querySelector('[data-stop]')
const bodyEl = document.querySelector('body')
let timerId = null;
// const buttonEl = document.querySelector('button')
// bodyEl.style.textAlign = 'center'
    btnStart.style.padding = '15px'
    btnStart.style.borderRadius = '37px'
    btnStart.style.backgroundColor = 'transparent'
    btnStart.style.display = 'block'
    btnStart.style.margin = '0 auto'
    btnStop.style.display = 'block'
    btnStop.style.margin = '0 auto'

btnStart.addEventListener("click", () => {
    timerId = setInterval(() => {
    let bodyArt = getRandomHexColor() 
    btnStart.setAttribute('disabled', true)    
    bodyEl.style.backgroundColor = bodyArt
    }, 1000);
});

btnStop.addEventListener("click", () => {
    clearInterval(timerId);
    btnStart.removeAttribute('disabled'); 
});

  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}