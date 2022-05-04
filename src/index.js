// //////////////////////
// Rehearsal
// //////////////////////
// 1. Select an element (the button)
// const button = document.querySelector("#click-me");
// // 2. Listen to a click
// button.addEventListener("click", (event) => {
//   console.log(event);
//   // 3. Change the DOM (disable + change text)
//   event.currentTarget.classList.add("disabled");
//   event.currentTarget.innerText = "Loading...";
// });


// //////////////////////
// HTTP GET request
// //////////////////////

// 1. Select elements (search button, input, list)
const input = document.querySelector("#keyword");
const button = document.querySelector("#submit");
const list = document.querySelector("#results");

// 2. Listen to a click on the button
button.addEventListener("click", (event) => {
  event.preventDefault(); // stop the default refresh from browser
  console.log(event);
  const keyword = input.value;
  const url = `https://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;
  // 2.5 Fetch the OMdbAPI
  // const data = fetch(url) // cannot do that!
  console.log("before the fetch")
  fetch(url)
    .then( response => response.json())
    .then( (data) => {
      console.log("the data arrives!")
      console.log(data.Search);
      list.innerHTML = ""; // clean up the ul list
      data.Search.forEach((movie) => {
        // 3. Display the movies in the list
        list.insertAdjacentHTML(
          "beforeend", 
          `<li class='list-inline-item'>
            <img src="${movie.Poster}" alt="" />
            <p>${movie.Title}</p>
          </li>`);
      });
    })
  console.log("after the fetch")
});


// //////////////////////
// HTTP POST request
// //////////////////////
const signUp = (event) => {
  event.preventDefault()
  const emailValue = document.getElementById("email").value
  const passwordValue = document.getElementById("password").value
  const data = {
    "email": emailValue, 
    "password": passwordValue
  };
  const url = "https://reqres.in/api/register";
  const options = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  }
  fetch(url, options)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
    })
}

// 1. select the form 
const form = document.querySelector("#form")
// 2. listening to a submit event on the form
form.addEventListener("submit", signUp)