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
export const helloUsername = document.getElementById("helloUsername");

// export const loginMessage = document.getElementById("loginMessage");
export const listingsTitle = document.getElementById("listingsTitle");
export const listingsMedia = document.getElementById("listingsMedia");
export const listingsDescription = document.getElementById("listingsDescription");
export const listingsTags = document.getElementById("listingsTags");
export const listingsBids = document.getElementById("listingsBids");
export const listingsBidButton = document.getElementById("listingBidButton");

// REGISTER
export const registerUrl = `${API_BASE_URL}/api/v1/auction/auth/register`;
export const registerUsername = document.getElementById("username");
export const registerEmail = document.getElementById("email");
export const registerPassword = document.getElementById("password");
export const registerButton = document.getElementById("registerButton");

// LOGIN
export const loginUrl = `${API_BASE_URL}/api/v1/auction/auth/login`;
export const loginEmail = document.getElementById("email");
export const loginPassword = document.getElementById("password");
export const loginButton = document.getElementById("loginButton");

// LOGOUT
export const returnMessage = document.querySelector('.error');
export const logoutButton = document.getElementById('logoutButton');

// PROFILE
export const profileAvatar = document.getElementById("profileAvatar");
export const profileUser = document.getElementById("profileUser");
export const profileUsername = document.getElementById("profileUsername");
export const profileEmail = document.getElementById("profileEmail");
export const profileCredits = document.getElementById("profileCredits");