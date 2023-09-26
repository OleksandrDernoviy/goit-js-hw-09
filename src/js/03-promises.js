
import Notiflix from 'notiflix'

const formEl = document.querySelector('.form')
formEl.addEventListener('submit', onSubmit)

function onSubmit(evt) {
  evt.preventDefault()
 let delayVal = Number(evt.currentTarget.delay.value)
 const stepVal = Number(evt.currentTarget.step.value)
  const amountVal = Number(evt.currentTarget.amount.value)
  if (delayVal < 0 || stepVal < 0 || amountVal <= 0) {
    evt.currentTarget.reset()
    Notiflix.Notify.warning(`Please, input positiv number !`)
    !createPromise(position, delay)  
  } 
  
  for (let i = 1; i <= amountVal; i += 1) {
  createPromise(i, delayVal)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${ position } in ${ delay } ms `)
    })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${ position } in ${ delay } ms `)
    })
  delayVal += stepVal
  }
  evt.currentTarget.reset()
}

function createPromise(position, delay) {
  const promArr = { position, delay };
  const shouldResolve = Math.random() > 0.3
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (shouldResolve) {
      resolve(promArr);
    } else {
      reject(promArr);
    }
    }, delay);
  });
}
