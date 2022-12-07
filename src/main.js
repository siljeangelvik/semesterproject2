import './css/input.css';
import './ganttchart/ganttchart.css';
import './css/styles.scss'
// export { setupCounter } from './counter';
// export javascriptLogo from '../../public/assets/javascript.svg';

// URLS
export const API_BASE_URL = 'https://api.noroff.dev/api/v1/auction';
export const listingsUrl = `${API_BASE_URL}/listings`;
export const loginUrl = `${API_BASE_URL}/auth/login`;
export const registerUrl = `${API_BASE_URL}/auth/register`;


// PROFILE
export const profileButton = document.getElementById("profileButton"); // onclick check if localStorage has content or === null..
export const profileUsername = document.getElementById("profileUsername");
export const profileAvatar = document.getElementById("profileAvatar");
export const profileCredits = document.getElementById("profileCredits");
export const profileEmail = document.getElementById("profileEmail");
// let profileCards = document.getElementById("profileCards");


// ROOT HTML / LISTINGS
//export const updateBidButton = document.getElementById("updateBidButton"); // onclick check if localStorage has content or === null..

// LOCAL STORAGE
// export const checkLocalStorage = document.querySelectorAll('.checkLocalStorage');



// FUNCTIONS
// focus search input field
document.getElementById("focusButton").addEventListener("click", () => {
    document.getElementById("myTextField").focus();
});

// welcome user login
document.getElementById("welcomeUser").innerHTML = localStorage.getItem("name");
