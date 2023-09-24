import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const inputPicker = document.querySelector('#datetime-picker')
const btnstart = document.querySelector('[data-start]')
const daysEl = document.querySelector('[data-days]')
const hoursEl = document.querySelector('[data-hours]')
const minutesEl = document.querySelector('[data-minutes]')
const secondsEl = document.querySelector('[data-seconds]')
const valueEl = document.querySelector('.value')
const divTimer = document.querySelector('.timer')
divTimer.style.display = 'flex'
divTimer.style.gap = '25px'
btnstart.setAttribute('disabled', true)
btnstart.addEventListener('click', onStart)
let timerId = null

flatpickr(inputPicker, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        
    if (selectedDates[0] <= new Date()) {
        btnstart.setAttribute('disabled', true)
        window.alert("Please choose a date in the future")
    } else {
        btnstart.removeAttribute('disabled')
        btnstart.style.cursor = 'pointer'
    }
    }
    })

function onStart() {
    timerId = setInterval(() => {
    const selectedDate = new Date(inputPicker.value)
    const finalTime = selectedDate - new Date()
        if (finalTime < 1000) {
            clearInterval(timerId)
            }
    const convertTime = convertMs(finalTime)
    onTimer(convertTime)
    }, 1000)
}
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}  

function onTimer({ days, hours, minutes, seconds }) {
    // daysEl.textContent = `${days}`;
    // hoursEl.textContent = `${hours}`;
    // minutesEl.textContent = `${minutes}`;
    // secondsEl.textContent = `${seconds}`;
    daysEl.textContent = addLeadingZero(days)
    hoursEl.textContent = addLeadingZero(hours)
    minutesEl.textContent = addLeadingZero(minutes)
    secondsEl.textContent = addLeadingZero(seconds)

    }


function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
}








