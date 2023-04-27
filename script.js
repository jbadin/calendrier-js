
let days = [];

function generateCalendar(date = new Date) {

    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let numberOfDaysinMonth = new Date(year, month, 0).getDate();

    let firstDayinMonth = new Date(`${year}-${month}-1`).getDay();
    let lastDayinMonth = new Date(`${year}-${month}-${numberOfDaysinMonth}`).getDay();
    let numberOfTiles = numberOfDaysinMonth + (firstDayinMonth - 1) + (7 - lastDayinMonth);
    calendarBody.innerHTML = '';

    console.log('mois : ', month)
    console.log('année : ', year)
    console.log('nombre de jour dans le mois : ', numberOfDaysinMonth)
    console.log('premier jour du mois : ', firstDayinMonth)
    console.log('dernier jour du mois : ', lastDayinMonth)
    console.log('nombre de cases  : ', numberOfTiles)

    for (let i = 0; i <= numberOfTiles; i++) {
        if (i % 7 == 0 && days.length > 0) {

            let newWeek = document.createElement('tr');
            for (let newDay of days) {
                newWeek.appendChild(newDay);
            }
            calendarBody.appendChild(newWeek);
            days = [];
        }

        let tile = document.createElement('td');

        if (firstDayinMonth < i && numberOfDaysinMonth + firstDayinMonth >= i) {
            tile.innerText = i - firstDayinMonth + 1;
        }
        days.push(tile);
    }
}

generateCalendar(new Date);

previous.onclick = () => {
    generateCalendar(new Date)
}

