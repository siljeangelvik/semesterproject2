// --- BASE --- //
export const API_BASE_URL = 'https://api.noroff.dev';
export { setupCounter } from "./counter";

// IMPORT
import './input.css';
import './ganttchart/ganttchart.css';
import './styles.scss';

// LISTINGS
export const listUrl = `${API_BASE_URL}/api/v1/auction/listings`;
export const listData = document.getElementById("listData");
export const listingsTitle = document.getElementById("listingsTitle");
export const listingsMedia = document.getElementById("listingsMedia");
export const listingsDescription = document.getElementById("listingsDescription");
export const listingsTags = document.getElementById("listingsTags");
export const listingsBids = document.getElementById("listingsBids");
export const listingsBidButton = document.getElementById("listingBidButton");

// REGISTER   /   LOGIN   /   LOGOUT
export const registerUrl = `${API_BASE_URL}/api/v1/auction/auth/register`;
export const loginUrl = `${API_BASE_URL}/api/v1/auction/auth/login`;
export const returnMessage = document.querySelector('.error');
export const loginButton = document.getElementById("loginButton");
export const registerButton = document.getElementById("registerButton");
export const logoutButton = document.getElementById('logoutButton');
export const helloUsername = document.getElementById("helloUsername");
// export const loginMessage = document.getElementById("loginMessage");

//



export const isValidUserName = username => {
    let usernameRegex = /^[a-z0-9_æøå]{2,25}$/i;
    return usernameRegex.test(String(username));
};
export const isValidEmail = email => {
    const emailRegex = /^[a-z0-9_æøå]{4,25}@(stud.)?noroff\.no$/i;
    return emailRegex.test(String(email));
};
export const isValidPassword = password => {
    let passwordRegex = /^[a-z0-9_æøå]{8,25}$/i;
    return passwordRegex.test(String(password));
};

export let validUsername = password.value.trim();
export let validEmail = email.value.trim();
export let validPassword = password.value.trim();

//


export const loginEmail = document.getElementById("email");
export const loginPassword = document.getElementById("password");

export const registerUsername = document.getElementById("username");
export const registerEmail = document.getElementById("email");
export const registerPassword = document.getElementById("password");

export const profileUsernameTop = document.getElementById("profileUsernameTop");
export const profileUsername = document.getElementById("profileUsername");
// export const profileUsernames = document.querySelectorAll('.profileUsername');
export const profileAvatar = document.getElementById("profileAvatar");
export const profileCredits = document.getElementById("profileCredits");
export const profileEmail = document.getElementById("profileEmail");

