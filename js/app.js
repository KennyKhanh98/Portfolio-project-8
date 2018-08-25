const main = document.getElementsByClassName('container');
const overlays = document.getElementsByClassName('overlay');
const card = document.getElementsByClassName('user-card');
const randomUser = document.querySelectorAll('.user');
const exit = document.getElementsByClassName('exit-button');
const next = document.getElementsByClassName('right-button');
const previous = document.getElementsByClassName('left-button');



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
        <img class="user-image" src='${user.picture.large}' alt>
        <div class="info">
          <h2 class="user-name">${user.name.first} ${user.name.last}</h2>
          <p class="user-email">${user.email}</p>
          <p class="user-city">${user.location.city}</p>
        </div>
      </div>
    `;
    main[0].innerHTML += html;

    // Generating user modals when is clicked
    for (let i = 0; i < randomUser.length; i++) {
      randomUser[i].addEventListener('click', function() {
        createOverlay[i];
      });
    }
  }
}

function creatModals(data) {
  for (let i = 0; i < data.length; i++) {
    const user = data[i];
    const html = `
      <div class="user">
        <span class="exit-button">&#935;</span>
        <div class="overlay">
          <span class="left-button">&lt;</span>
          <div class="user-info">
            <img class="user-image" src='${user.picture.large}' alt>
            <h2 class="user-name">${user.name.first} ${user.name.last}</h2>
            <p class="user-email">${user.email}</p>
            <p class="user-city">${user.location.city}</p>
            <hr>
            <p class="user-phone">${user.cell}</p>
            <p class="user-address">${user.location.street}, ${user.location.state} ${user.location.postcode}</p>
            <p class="date-of-birth">DoB: ${user.dob.date.substring(5,7)}/${user.dob.date.substring(8,10)}/${user.dob.date.substring(0,4)}</p>
          </div>
          <span class="right-button">&gt;</span>
        </div>
      </div>
    `;
    main[0].innerHTML += html;
  }
}

function creatOverlay(index) {

}

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

// function addEvent() {
//   for (let i = 0; i < randomUser.length; i++) {
//     const container = main[0];
//     const userInfo = randomUser[i];
//     const close = exit[i];
//     const slideNext = next[i];
//     const slideBack = previous[i];
//     close.addEventListener('click', function() {
//       userInfo.style.display = "none";
//     })
//     container.addEventListener('click', function() {
//       userInfo.style.display = "block";
//     })
//
//   }
// }
