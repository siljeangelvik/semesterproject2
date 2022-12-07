import './css/input.css';
import './css/styles.scss'
import './ganttchart/ganttchart.css';
// export { setupCounter } from './counter';
// export javascriptLogo from '../../public/assets/javascript.svg';

// URLS
export const API_BASE_URL = 'https://api.noroff.dev/api/v1/auction';
export const listingsUrl = `${API_BASE_URL}/listings`;
export const loginUrl = `${API_BASE_URL}/auth/login`;
export const registerUrl = `${API_BASE_URL}/auth/register`;
export const createUrl = `${API_BASE_URL}/listings`

// PROFILE
export const profileUsername = document.getElementById("profileUsername");
export const profileAvatar = document.getElementById("profileAvatar");
export const profileCredits = document.getElementById("profileCredits");
export const profileEmail = document.getElementById("profileEmail");
// let profileCards = document.getElementById("profileCards");


// ROOT HTML / LISTINGS
//export const updateBidButton = document.getElementById("updateBidButton"); // onclick check if localStorage has content or === null..

// LOCAL STORAGE
// export const checkLocalStorage = document.querySelectorAll('.checkLocalStorage');


///// FUNCTIONS
// focus search input field
document.getElementById("focusButton").addEventListener("click", () => {
    document.getElementById("myTextField").focus();
});

// welcome message on user login
let userWelcomeContainer = document.getElementById("welcomeContainer");
let userWelcomeMessage = document.getElementById("welcomeUser");
if (localStorage.getItem("name")) {
    userWelcomeContainer.classList.remove("invisible");
    userWelcomeMessage = `${localStorage.getItem("name")}`;
}

// menu profile button - if you're not logged in, write alert and redirect to login
const profilePageButton = document.getElementById("profilePageButton");
profilePageButton.addEventListener('click', () => {
    if (!localStorage.getItem("accessToken")) {
        window.alert("You need to be logged in to view your profile page");
        window.location = '../login/index.html';
    }
    window.location = '../profile/index.html';
})