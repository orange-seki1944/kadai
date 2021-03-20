const week = ["日", "月", "火", "水", "木", "金", "土"];
const today = new Date();

let ShowDate = new Date(today.getFullYear(), today.getMonth(), 1);


window.onload = function () {
    showProcess(today, calendar);
};

function prev(){
    ShowDate.setMonth(ShowDate.getMonth() - 1);

    showProcess(ShowDate);
}

function next(){
    ShowDate.setMonth(ShowDate.getMonth() + 1);

    showProcess(ShowDate);
}

function showProcess(date) {
    
    let year = date.getFullYear();

    let month = date.getMonth();

    document.querySelector('#header').innerHTML = year + "年 " + (month + 1) + "月";

    let calendar = createProcess(year, month);

    document.querySelector('#calendar').innerHTML = calendar;
}

function createProcess(year, month) {
    let calendar = "<table><tr class='dayOfWeek'>";

    for (let i = 0; i < week.length; i++) {
        calendar += "<th>" + week[i] + "</th>";
    }
    calendar += "</tr>";

    let count = 0;

    let StartDay = new Date(year, month, 1).getDay();

    let EndDate = new Date(year, month + 1, 0).getDate();

    let LastDate = new Date(year, month, 0).getDate();

    let row = Math.ceil((StartDay + EndDate) / week.length);

    for (let i = 0; i < row; i++) {
        calendar += "<tr>";

        for (let j = 0; j < week.length; j++) {

            if (i == 0 && j < StartDay) {

                calendar += "<td class='disabled'>" + (LastDate - StartDay + j + 1) + "</td>";

            } else if (count >= EndDate) {

                count++;

                calendar += "<td class='disabled'>" + (count - EndDate) + "</td>";
            } else {

                count++;

                if(year == today.getFullYear() && month == (today.getMonth()) && count == today.getDate()){

                    calendar += "<td class='today'>" + "<a href = 'kanri.html'>" + count + "</a>" + "</td>";

                } else {

                    calendar += "<td>" + "<a href = 'kanri.html'>" + count + "</a>"+ "</td>";

                }
            }
        }
        calendar += "</tr>";
    }
    return calendar;
}