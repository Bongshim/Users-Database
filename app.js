const URL = "https://jsonplaceholder.typicode.com/users";

// Reset search box 
const select = document.querySelector("#filter");
const searchInput = document.querySelector("#search");
let selectedOption = select.options[select.selectedIndex].value;

searchInput.placeholder = "Search by " + selectedOption;
searchInput.value = "";


// fetch users from url
fetchUserData = () => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      renderUsers(data);
    });
};


//  Render users to the DOM
renderUsers = (users) => {
  const ul = document.querySelector(".userlist-container");

  users.forEach((user, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
    <div class="user-sum">
    <div class="userinfo">
        <span class="counter">${index + 1}.</span>
        <span class="name">${user.name}</span>
        <span class="separator">-</span>
        <span class="username">${user.username}<span>

    </div>
    <div class="more" id="moreBtn" onClick="showToggle(this)">Show more</div>
</div>
<div class="user-details">
<div class="flex-container">
    <span class="email"><span style="font-weight: 500;">Email:</span> <em>${user.email}</em></span>
    <span class="phone"><span style="font-weight: 500;">Number:</span> <em>${user.phone}</em></span>
    <span class="address"><span style="font-weight: 500;">Address:</span> <em>${user.address.street}, ${
      user.address.suite
    }, ${user.address.city}, ${user.address.zipcode} </em></span>
    <span class="website"><span style="font-weight: 500;">Website:</span> <em>${user.website}</em></span>
    </div>
</div>
    `;

    ul.appendChild(li);

    // toggling display of details
  });
};


// show more functionality
showToggle = (e) => {
  if (e.parentElement.nextElementSibling.style.display === "block") {
    e.innerText = "Show More";

    e.parentElement.nextElementSibling.style.display = "none";
  } else {
    e.innerText = "Show Less";
    e.parentElement.nextElementSibling.style.display = "block";
    
  }
};


// check what option is selected from the drop down list and update placeholder accordingly
filter = () => {
  // Get placeholder from search input
  const searchInput = document.querySelector("#search");
  const select = document.querySelector("#filter");

  // Get the value of the selected option and change placeholder
  let selectedOption = select.options[select.selectedIndex].value;
  searchInput.placeholder = "Search by " + selectedOption;
};


// Search options
searchUsersByUsername = () => {
  const searchInput = document.querySelector("#search");
  const ul = document.querySelector(".userlist-container");

  const inputValue = searchInput.value.toLowerCase();

  const userList = ul.querySelectorAll("span.username");
  // console.log(userList.querySelectorAll("span.username"));
  userList.forEach((user) => {
    const usernameSpan = user.innerText.toLowerCase();

    const isMatch = usernameSpan.indexOf(inputValue) > -1;

    if (isMatch) {
      user.parentElement.parentElement.parentElement.style.display = "block";
    } else {
      user.parentElement.parentElement.parentElement.style.display = "none";
    }
  });
};

searchUsersByName = () => {
  const searchInput = document.querySelector("#search");
  const ul = document.querySelector(".userlist-container");

  const inputValue = searchInput.value.toLowerCase();

  const userList = ul.querySelectorAll("span.name");
  // console.log(userList.querySelectorAll("span.username"));
  userList.forEach((user) => {
    const nameSpan = user.innerText.toLowerCase();

    const isMatch = nameSpan.indexOf(inputValue) > -1;

    if (isMatch) {
      user.parentElement.parentElement.parentElement.style.display = "block";
    } else {
      user.parentElement.parentElement.parentElement.style.display = "none";
    }
  });
};

searchUsersByEmail = () => {
  const searchInput = document.querySelector("#search");
  const ul = document.querySelector(".userlist-container");

  const inputValue = searchInput.value.toLowerCase();

  const userList = ul.querySelectorAll("span.email");
  // console.log(userList.querySelectorAll("span.username"));
  userList.forEach((user) => {
    const emailSpan = user.innerText.toLowerCase();

    const isMatch = emailSpan.indexOf(inputValue) > -1;

    if (isMatch) {
      user.parentElement.parentElement.parentElement.style.display = "block";
    } else {
      user.parentElement.parentElement.parentElement.style.display = "none";
    }
  });
};


// Search based on filter
searchBy = () => {
  const select = document.querySelector("#filter");
  let selectedOption = select.options[select.selectedIndex].value;

  if (selectedOption === "username") {
    searchUsersByUsername();
  } else if (selectedOption === "email") {
    searchUsersByEmail();
  } else if (selectedOption === "name") {
    searchUsersByName();
  }
};

fetchUserData();
