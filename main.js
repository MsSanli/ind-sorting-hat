const students = [
   {
    id: 1,
    firstName: "Harry",
    lastName: "Potter",
    houseType: "Gryffindor",
    // image later 
   },
    {
      id: 2,
      firstName: "Draco",
      lastName: "Malfoy",
      houseType: "Slytherin",
      // image later 
    },
    {
      id: 3,
      firstName: "Sybil",
      lastName: "Trewlawney",
      houseType: "Ravenclaw",
      // image later 
    },
    {
      id: 4,
      firstName: "Hermione",
      lastName: "Granger",
      houseType: "Hufflepuff",
      // image later 
    }
  
]

// SHOW FORM
// need button for lets start sorting button only 
const startButton = document.getElementById("startButton").hidden = false; 
const typeName = document.getElementById("typeName").hidden = true;
const submit = document.getElementById("submit").hidden = true; 

document.getElementById("startButton").addEventListener("click", () => {
document.getElementById("typeName").hidden = false;
document.getElementById("submit").hidden = false;
})




const app = document.querySelector("#new-student-cards");

// Function to render cards to dom that takes array
// create domstring to push cards to it
// for each loop over array and create student cards 

function renderToDom(students) {
  let domString = "";
  students.forEach((student) => {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-header">${student.firstName}</div>
    <div class="card-body">
      <h5 class="card-title">${student.lastName}</h5>
      <div class="card-footer">${student.houseType}</div>
      <button class="btn btn-danger" id="delete--${student.id}">Expel</button>
    </div>
    </div>`;
  });
  app.innerHTML = domString;
}
renderToDom(students);


// ---------------------------------------

const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

 
const newCard = (event) => {
  event.preventDefault(); 

  const houseRandom = houses[Math.floor(Math.random() * houses.length)];
  // too long to put in object, this works
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;

  // create object
  const newStudentObj = {
    id: students.length + 1, 
    firstName,
    lastName,
    houseType: houseRandom,
  };

students.push(newStudentObj);
renderToDom(students);
// clear form out
document.querySelector('form').reset();

};
// need queryselector and event listener for submit button
// must do this after rendering to dom 

// queryselector
document.getElementById("submit").addEventListener("click", newCard);
// // -----------------------------------------------------------


// // Function to filterstudentsbyhouse
// render to const filteredstudents 

const filterStudentsByHouse = (houseType) => {
  const filteredStudents = students.filter((student) => student.houseType === houseType);
  renderToDom(filteredStudents);
};

// Event listeners for house buttons CLICK
document.querySelector("#show-button").addEventListener("click", () => renderToDom(students)); // Show all students
document.querySelector("#Gryffindor-button").addEventListener("click", () => filterStudentsByHouse("Gryffindor"));
document.querySelector("#Hufflepuff-button").addEventListener("click", () => filterStudentsByHouse("Hufflepuff"));
document.querySelector("#Ravenclaw-button").addEventListener("click", () => filterStudentsByHouse("Ravenclaw"));
document.querySelector("#Slytherin-button").addEventListener("click", () => filterStudentsByHouse("Slytherin"));


// expel student

// // add event listener to listen to each of delete button/function
const expelStudent = (event) => {
  if (event.target.id.includes("delete")) {
// use split method to do destructuring 
    c

  }}


// app.addEventListener("click", expelStudent);
