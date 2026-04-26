
//   document.addEventListener('DOMContentLoaded', function () {
//     var calendarEl = document.getElementById('calendar');

//     var calendar = new FullCalendar.Calendar(calendarEl, {
//       initialView: 'dayGridMonth',

     
//     });

//     calendar.render();
//   });

    // Creating the garde cards
function displayGrades(){
    let gradesHtml =``;

   

    for (let grade = 1; grade <= 12; grade ++){

    gradesHtml += `<div class = "grade-grid">   
        <div class = "card">
        <h3>Grade ${grade}</h3>
        <p>Explore Grade ${grade} education</p>
        <button class= "btn id = "start-button ">Start</button>
        </div>`;
        
    }
 
  
    let gradesElement = document.querySelector("#grade-cards")

    gradesElement.innerHTML = gradesHtml;

}
displayGrades();