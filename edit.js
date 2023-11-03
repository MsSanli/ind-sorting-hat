// const students = [
//   {
//    id: 1,
//    firstName: "Harry",
//    lastName: "Potter",
//    houseType: "Gryffindor",
//    // image later 
//   },
//    {
//      id: 2,
//      firstName: "Draco",
//      lastName: "Malfoy",
//      houseType: "Slytherin",
//      // image later 
//    },
//    {
//      id: 3,
//      firstName: "Ron",
//      lastName: "Weasley",
//      houseType: "Gryffindor",
//      // image later 
//    },
//    {
//      id: 4,
//      firstName: "Hermione",
//      lastName: "Granger",
//      houseType: "Hufflepuff",
//      // image later 
//    }
 
// ]

// // SHOW FORM
// // need button for lets start sorting button only 
// const startButton = document.getElementById("startButton").hidden = false; 
// const typeName = document.getElementById("typeName").hidden = true;
// const submit = document.getElementById("submit").hidden = true; 

// document.getElementById("startButton").addEventListener("click", () => {
// document.getElementById("typeName").hidden = false;
// document.getElementById("submit").hidden = false;
// })





// // Function to render cards to dom that takes array
// // create domstring to push cards to it
// // for each loop over array and create student cards 

// const renderToDom = (students) => {
//  let domString = "";
//  students.forEach((student) => { // Use an arrow function here
//    domString += `<div class="card" style="width: 18rem;">
//    <div class="card-header">${student.firstName}</div>
//    <div class="card-body">
//      <h5 class="card-title">${student.lastName}</h5>
//      <div class="card-footer">${student.houseType}</div>
//      <button class="btn btn-danger" id="delete--${student.id}">Delete</button>
//    </div>
//    </div>`;
//  });
//  const app = document.querySelector("#app");
//  app.innerHTML = domString;
// }
// renderToDom(students);


// const app = document.querySelector("#new-student-cards");



// // Create click event, a students name will assign student to random house. randomizer. it should also clear the form after clicking. 
// // type the name 
// // randomly select house
// // create new card for student
// // render new card to "first year students" div

// const form = document.querySelector('form');
// // house indexes to use randomizer/.lengeth methods 
// const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

// const newCard = (event) => {
//  event.preventDefault(); 

//  const houseRandom = houses[Math.floor(Math.random() * houses.length)];
// //   const newStudentCard = students[houseRandom];
// //   const firstName = document.querySelector("#firstName").value;
// //   const lastName = document.querySelector("#lastName").value;

//  // create object
//  const newStudentObj = {
//    id: students.length + 1, 
//    firstName: document.querySelector("#firstName").value,
//    lastName: document.querySelector("#lastName").value,
//    houseType: houseRandom,
//  };

// students.push(newStudentObj);
// renderToDom(students);
// // // clear form out
// form.reset();
// };

// // event listener for form submit and pass it the function 
// form.addEventListener("submit", newCard);
// // // query selector form
// // const form = document.querySelector('submit');
