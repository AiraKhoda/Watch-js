let hoursSpan = document.querySelector("#hour");
let minutesSpan = document.querySelector("#minute");
let secsSpan = document.querySelector("#second");
let daysOfWeekSpan = document.querySelectorAll(".days span");
let yearSpan = document.querySelector("#year");
let monthSpan = document.querySelector("#month");
let daySpan = document.querySelector("#day");




let addZero = (number) => number < 10 ? "0" + number : number;
let currentDate = new Date();

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
let months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
];


setInterval(() => {
    let currentDate = new Date();
    hoursSpan.innerText = addZero(currentDate.getHours());
    minutesSpan.innerText = addZero(currentDate.getMinutes());
    secsSpan.innerText = addZero(currentDate.getSeconds());

}, 1000);


daysOfWeekSpan.forEach((dayOfWeek) => {

    let currentDayOfWeek = days[currentDate.getDay()]

    if (dayOfWeek.innerText === currentDayOfWeek) {
        dayOfWeek.classList.add("active");
    }
});


const displayDate = () => {
    daySpan.innerText = currentDate.getDate();
    yearSpan.innerText = currentDate.getFullYear();
    monthSpan.innerText = months[currentDate.getMonth()];
};


displayDate();