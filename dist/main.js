/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

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
var input = document.querySelector("#keyword");
var button = document.querySelector("#submit");
var list = document.querySelector("#results"); // 2. Listen to a click on the button

button.addEventListener("click", function (event) {
  event.preventDefault(); // stop the default refresh from browser

  console.log(event);
  var keyword = input.value;
  var url = "https://www.omdbapi.com/?s=".concat(keyword, "&apikey=adf1f2d7"); // 2.5 Fetch the OMdbAPI
  // const data = fetch(url) // cannot do that!

  console.log("before the fetch");
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log("the data arrives!");
    console.log(data.Search);
    list.innerHTML = ""; // clean up the ul list

    data.Search.forEach(function (movie) {
      // 3. Display the movies in the list
      list.insertAdjacentHTML("beforeend", "<li class='list-inline-item'>\n            <img src=\"".concat(movie.Poster, "\" alt=\"\" />\n            <p>").concat(movie.Title, "</p>\n          </li>"));
    });
  });
  console.log("after the fetch");
}); // //////////////////////
// HTTP POST request
// //////////////////////

var signUp = function signUp(event) {
  event.preventDefault();
  var emailValue = document.getElementById("email").value;
  var passwordValue = document.getElementById("password").value;
  var data = {
    "email": emailValue,
    "password": passwordValue
  };
  var url = "https://reqres.in/api/register";
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  fetch(url, options).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
  });
}; // 1. select the form 


var form = document.querySelector("#form"); // 2. listening to a submit event on the form

form.addEventListener("submit", signUp);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map