import './css/input.css';
import './ganttchart/ganttchart.css';
import './css/styles.scss'

// MEDIA
export const API_BASE_URL = 'https://api.noroff.dev/api/v1';
// export javascriptLogo from '../../public/assets/javascript.svg';

// PAGES / VIEWS
export { setupCounter } from './counter';

// PROFILE
export const profileButton = document.getElementById("profileButton"); // onclick check if localStorage has content or === null..
export const profileUsername = document.getElementById("profileUsername");
export const profileAvatar = document.getElementById("profileAvatar");
export const profileCredits = document.getElementById("profileCredits");
export const profileEmail = document.getElementById("profileEmail");

// ROOT HTML / LISTINGS
export const listUrl = `${API_BASE_URL}/api/v1/auction/listings`;
// export const listOutput = document.getElementById("listOutput");
//export const createListingButton = document.getElementById("createListingButton"); // onclick check if localStorage has content or === null..
//export const updateBidButton = document.getElementById("updateBidButton"); // onclick check if localStorage has content or === null..

// REGISTER & LOGIN
export const loginUrl = `${API_BASE_URL}/api/v1/auction/auth/login`;
export const registerUrl = `${API_BASE_URL}/api/v1/auction/auth/register`;

// LOCAL STORAGE
//export const checkLocalStorage = document.querySelectorAll('.checkLocalStorage');

// function onClick search-icon = focus search-input-field
document.getElementById("focusButton").addEventListener("click", () => {
    document.getElementById("myTextField").focus();
});

// welcome message to logged in user
//export const helloUsername = document.getElementById("helloUsername");
//helloUsername.innerHTML = localStorage.getItem("username");