const main = document.getElementsByClassName('container');
const overlays = document.getElementsByClassName('overlay');
const modals = document.getElementsByClassName('modals');
const card = document.getElementsByClassName('user-card');
const randomUser = document.getElementsByClassName('user');
const exit = document.getElementsByClassName('exit-button');



// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

fetch('https://randomuser.me/api/?results=12&nat=ca&inc=name,email,location,picture,cell,dob')
  .then(response => response.json())
  .then(data => generateUsers(data.results))
  .then(data => addEvent())

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function generateUsers(data) {
  for (let i = 0; i < data.length; i++) {
    const user = data[i];
    const html = `
      <div class="user">
        <div class="overlay">
          <div class="modals">
            <h1 class="exit-button">&#935;</h1>
            <img class="user-image" src='${user.picture.large}' alt>
            <h2 class="user-name">${user.name.first} ${user.name.last}</h2>
            <p class="user-email">${user.email}</p>
            <p class="user-city">${user.location.city}</p>
            <hr>
            <p class="user-phone">${user.cell}</p>
            <p class="user-address">${user.location.street}, ${user.location.state} ${user.location.postcode}</p>
            <p class="date-of-birth">DoB: ${user.dob.date.substring(5,7)}/${user.dob.date.substring(8,10)}/${user.dob.date.substring(0,4)}</p>
          </div>
        </div>

        <div class="user-card">
          <img class="user-image" src='${user.picture.large}' alt>
          <div class="info">
            <h2 class="user-name">${user.name.first} ${user.name.last}</h2>
            <p class="user-email">${user.email}</p>
            <p class="user-city">${user.location.city}</p>
          </div>
        </div>
      </div>
      `;
    main[0].innerHTML += html;
  }
}

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

function addEvent() {
  for (let i = 0; i < randomUser.length; i++) {
    const userInfo = randomUser[i];
    const overlay = overlays[i];
    const close = exit[i];
    userInfo.addEventListener('click', function() {
      overlay.style.display = "block";
    })
    close.addEventListener('click', function() {
      overlay.style.display = "none";
    })
  }
}
