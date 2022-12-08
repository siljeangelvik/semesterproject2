import './css/input.css';
import './css/styles.scss'
import './ganttchart/ganttchart.css';
// export { setupCounter } from './counter';
// export javascriptLogo from '../../public/assets/javascript.svg';



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

// if user is logged in, remove class "invisible"
if (localStorage.getItem("accessToken")) {
    document.getElementById("welcomeContainer").classList.remove("invisible");
   /* document.getElementById("logoutButtonTop").classList.remove("invisible");
    document.getElementById("loginPageButton").classList.remove("visible");
    document.getElementById("registerPageButton").classList.remove("visible");
    document.getElementById("loginPageButton").classList.add("invisible");
    document.getElementById("registerPageButton").classList.add("invisible"); */
}

// menu profile button - if you're not logged in, write alert and redirect to log in
const profilePageButton = document.getElementById("profilePageButton");
profilePageButton.addEventListener('click', () => {
    if (!localStorage.getItem("accessToken")) {
        window.alert("You need to be logged in to view your profile page");
        window.location = '../login/index.html';
    }
    window.location = '../profile/index.html';
})