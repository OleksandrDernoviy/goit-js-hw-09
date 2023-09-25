const formEl = document.querySelector('.form')
formEl.addEventListener('submit', onSubmit)

function onSubmit(evt) {
  evt.preventDefault()
 let delayVal = Number(evt.currentTarget.delay.value)
 const stepVal = Number(evt.currentTarget.step.value)
 const amountVal = Number(evt.currentTarget.amount.value)
  for (let i = 1; i <= amountVal; i += 1) {
  createPromise(i, delayVal)
  .then(({ position, delay }) => {
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
    })
  .catch(({ position, delay }) => {
  console.log(`❌ Rejected promise ${position} in ${delay}ms`)
    })
  delayVal += stepVal
  }
  evt.currentTarget.reset()
  // console.log(delayVal)
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
