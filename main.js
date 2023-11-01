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
      firstName: "Ron",
      lastName: "Weasley",
      houseType: "Gryffindor",
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

// Function to render cards to dom that takes array
// create domstring to push cards to it
// for each loop over array and create student cards 

const renderToDom = (students) => {
  let domString = "";
  students.forEach((student) => { // Use an arrow function here
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-header">${student.firstName}</div>
    <div class="card-body">
      <h5 class="card-title">${student.lastName}</h5>
      <div class="card-footer">${student.houseType}</div>
      <button class="btn btn-danger" id="delete--${student.id}">Delete</button>
    </div>
    </div>`;
  });
  const app = document.querySelector("#app");
  app.innerHTML = domString;
}
renderToDom(students);


