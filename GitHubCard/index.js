import axios from 'axios'; // was getting undefined error using script-element - installed pkg instead
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/teigrgwyn')
  .then(res => {
    createCard(res.data);
  })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'https://api.github.com/users/tetondan',
  'https://api.github.com/users/dustinmyers',
  'https://api.github.com/users/justsml',
  'https://api.github.com/users/luishrd',
  'https://api.github.com/users/bigknell'
];

followersArray.forEach(url => {
  axios.get(url)
    .then(res => {
      createCard(res.data);
    })
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function createCard(user) {
  // create elements
  const card = document.createElement('div');
  const img = document.createElement('img');
  const info = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const loc = document.createElement('p');
  const profile = document.createElement('p');
  const profile_info = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  // set values
  card.classList.add("card");
  img.setAttribute('src', user.avatar_url);
  info.classList.add("card-info");
  name.classList.add("name");
  name.textContent = user.name;
  username.classList.add("username");
  username.textContent = user.login;
  loc.textContent = `Location: ${user.location}`;
  profile.textContent = "Profile: ";
  profile_info.setAttribute('href', `${user.html_url}`);
  profile_info.textContent = user.html_url;
  followers.textContent = `Followers: ${user.followers}`;
  following.textContent = `Following: ${user.following}`;
  bio.textContent = `Bio: ${user.bio}`;

  // assemble hierarchy
  card.appendChild(img);
  card.appendChild(info);
  info.appendChild(name);
  info.appendChild(username);
  info.appendChild(loc);
  info.appendChild(profile)
  profile.appendChild(profile_info);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);

  document.querySelector('.cards').appendChild(card);
  console.log(card);
  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
