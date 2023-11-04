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
// for each loop over array and create student cards using boostrap

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
  // replace and update innerHTML w/ domstring contents
  app.innerHTML = domString;
}
renderToDom(students);


// ---------------------------------------

const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

 
const newCard = (event) => {
  event.preventDefault(); 

  const houseRandom = houses[Math.floor(Math.random() * houses.length)];
  // too long to put in object, this works
  // I must select the input ID. This affects new card showing up once I type the first and last name! 
  const firstName = document.querySelector("#typeName").value;
  const lastName = document.querySelector("#typeName").value;

  // create object for new student +1 will add one more to the length of the students array
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
// need queryselector and event listener for submit button. Or getELementById** was changed 

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

// function is event listener that listens for click w/ an element that has an id that includes text "delete". 
const expelStudent = (event) => {
  // if delete button is clicked, function proceeds. event.target is the element thats triggered by the event. 
  if (event.target.id.includes("delete")) {
    // splits delete button id and assigns 2nd part (student id) to the id variable
    const [, id] = event.target.id.split('--');
    const voldyCardsContainer = document.querySelector('#voldy-cards');
    // The Element.closest() method is a built-in JavaScript method that helps you find the nearest ancestor (parent or grandparent) element.
    // Starts w/ delete button selected id and then uses closest method to find the closest ancestor w/ the class card
    const expelledCard = document.querySelector(`#delete--${id}`).closest('.card');

    if (expelledCard) {
      voldyCardsContainer.appendChild(expelledCard);
      // line above appends expelledCard to voldycardscontainer - moving the student card to voldys army on the dom 
    }

    // Update the students array to remove the expelled student 
    const index = students.findIndex((obj) => obj.id === Number(id));
    students.splice(index, 1);

    renderToDom(students); // Rerender the remaining students
  }
};
// 
app.addEventListener("click", expelStudent);
// adding expelStudent function as a click event listener to the app el


 
