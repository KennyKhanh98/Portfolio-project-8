const main = document.getElementsByClassName('container');
const overlay = document.getElementsByClassName('overlay');
const modals = document.getElementsByClassName('modals');
const card = document.getElementsByClassName('user-card');



// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

fetch('https://randomuser.me/api/?results=12&nat=ca&inc=name,email,location,picture,cell,dob')
  .then(response => response.json())
  .then(data => generateUsers(data.results))

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function generateUsers(data) {
  for (let i = 0; i < data.length; i++) {
    const user = data[i];
    const html = `
      <div class="user-card">
        <img class="user-image" src='${user.picture.medium}' alt>
        <div class="info">
          <h2 class="user-name">${user.name.first} ${user.name.last}</h2>
          <p class="user-email">${user.email}</p>
          <p class="user-city">${user.location.city}</p>
        </div>
      </div>
    `;
    main[i].innerHTML += html;

  }
}



// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------






// ------------------------------------------
//  POST DATA
// ------------------------------------------
