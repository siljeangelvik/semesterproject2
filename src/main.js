import './css/input.css';
import './css/styles.scss';
import './ganttchart/ganttchart.css';

// URLS
export const API_BASE_URL = 'https://api.noroff.dev/api/v1/auction';
export const API_LISTINGS_URL = `${API_BASE_URL}/listings`;


//export const bidsUrl = `${API_BASE_URL}/listings/<id>/bids`;
//export const singleUrl = `${API_BASE_URL}/listings/`;
//export const deleteUrl = `${API_BASE_URL}/listings/{}`;


// BUTTONS
export const loadMoreButton = document.getElementById("load-more");


///// FUNCTIONS
// focus search input field
document.getElementById("focusButton").addEventListener("click", () => {
    document.getElementById("myTextField").focus();
});

// welcome message on user login and on profile page
[...document.querySelectorAll('.welcomeUser')].forEach(function (item) {
    document.getElementById("welcomeUser").innerHTML = localStorage.getItem('name');
    console.log(`ITEMS: ${item.innerHTML}\n\nITEMS ID: ${item.id}`);
});

// if user is logged in
if (localStorage.getItem("accessToken")) {
    document.getElementById("welcomeContainer").classList.remove("invisible");
}

// if user is not logged in
if (!localStorage.getItem("accessToken")) {
    [...document.querySelectorAll('.welcomeUser')].classList.remove("hidden");
}

// menu profile button - if you're not logged in, write alert and redirect to log in
const profilePageButton = document.getElementById("profilePageButton");
profilePageButton.addEventListener('click', () => {
    if (localStorage.getItem("accessToken")) {
        window.location = '../profile/index.html';
    }
    window.alert("You need to be logged in to view your profile page");
    window.location = '../login/index.html';
});

