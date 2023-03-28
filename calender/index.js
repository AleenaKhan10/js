const monthElement = document.querySelector(".date h1");
const fulldateElement = document.querySelector(".date p");
const daysElement = document.querySelector(".days");

const monthIndex = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay()-1;
console.log(firstDay)

console.log(lastDay)
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

monthElement.innerHTML = months[monthIndex]
fulldateElement.innerHTML = new Date().toDateString()
let days = "";


for (let i=firstDay; i>0; i--){
    days += `<div class="empty"></div>`;
}
for (let i=1; i<=lastDay; i++){
    if (i===new Date().getDate()){
        days += `<div class="today">${i}</div>`
    }else{
        days += `<div>${i}</div>`;     
    }
}

daysElement.innerHTML = days;