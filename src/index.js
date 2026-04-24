
//   document.addEventListener('DOMContentLoaded', function () {
//     var calendarEl = document.getElementById('calendar');

//     var calendar = new FullCalendar.Calendar(calendarEl, {
//       initialView: 'dayGridMonth',

     
//     });

//     calendar.render();
//   });

function displayGrades(){
    let gradesHtml =``

    let grade = 12
   gradesHtml = `<div class = "grade-grid">   
    <div class = "card">
        <h3>Grade ${grade}</h3>
        <p>Explore grade ${grade} education</p>
        <button class= "btn">Start</button>
    </div>`;

    let gradesElement = document.querySelector("#grade-cards")

    gradesElement.innerHTML = gradesHtml;

}
displayGrades();