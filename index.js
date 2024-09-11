const btn = document.getElementById("btn");
const yearsP = document.getElementById("yearsParagraph");
const monthsP = document.getElementById("monthsParagraph");
const daysP = document.getElementById("daysParagraph");
const message = document.getElementById("message");

const d = new Date();
console.log(d);

function calculateAge() {
    const day = document.getElementById("day");
    const month = document.getElementById("month");
    const year = document.getElementById("year");

    if (day.value === "" || month.value === "" || year.value === "") {
        message.textContent = "Incorrect, Please enter in all fields";
        return;
    } else {
        message.textContent = "";
    }

    if (day.value > 31) {
        message.textContent = "Incorrect day value, day must be a number from 1 to 31";
        return;
    } else {
        message.textContent = "";
    }

    if (month.value > 12) {
        message.textContent = "Incorrect month value, month must be from 1 to 12";
        return;
    } else {
        message.textContent = "";
    }

    if (year.value > 2024) {
        message.textContent = "Incorrect year value, year must be less or eqaul to 2024";
        return;
    } else {
        message.textContent = "";
    }

    yearsP.textContent = d.getFullYear() - year.value;
    monthsP.textContent = d.getMonth() - month.value;
    daysP.textContent = d.getDate() - day.value;

    if (d.getDate() < day.value) {
        daysP.textContent = day.value - d.getDate();
    } if (month.value > d.getMonth()) {
        monthsP.textContent = month.value - d.getMonth();
    }
}

btn.onclick = calculateAge;