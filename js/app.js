const main = document.getElementsByClassName('container');
const overlay = document.getElementsByClassName('overlay');
const modals = document.getElementsByClassName('modals');
const card = document.getElementsByClassName('user-card');



// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

fetch('https://randomuser.me/api/?results=12&inc=picture,name,gender,nat,location,dob,email')
  .then(response => response.json())
  .then(data => generateUsers(data.results))

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function generateUsers(data) {
  data.forEach(user => {
    const html = `
      <img class="user-image" src='${user.picture}' alt>
      <h2 class="user-name">${user.name.first} + ${user.name.last}</h2>
      <p class="user-email">${user.email}</p>
      <p class="user-city">${user.location.city}</p>
    `;
    card.innerHTML = html;
  });
}



// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------






// ------------------------------------------
//  POST DATA
// ------------------------------------------
