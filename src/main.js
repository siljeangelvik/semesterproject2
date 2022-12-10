/* formatter:off */
import './css/input.css';
import './css/styles.scss';
import './ganttchart/ganttchart.css';

// URLS
export const API_BASE_URL = 'https://api.noroff.dev/api/v1/auction';

//export const bidsUrl = `${API_BASE_URL}/listings/<id>/bids`;
//export const singleUrl = `${API_BASE_URL}/listings/`;
//export const deleteUrl = `${API_BASE_URL}/listings/{}`;


///// FUNCTIONS

// navigate to listings page and focus search field
document.getElementById("focusButton").addEventListener("click", () => {
    window.location.href = "/index.html";
    setTimeout(() => {
        const inputField = document.getElementById("myTextField");
        inputField.focus();
    }, 1000);
});

// hide elements when logged in
[...document.querySelectorAll('.loginHidden')].forEach(function (item) {
    if (localStorage.getItem("accessToken")) {
        item.classList.add("hidden");
    }
});

// hide elements when logged out
[...document.querySelectorAll('.logoutHidden')].forEach(function (item) {
    if (!localStorage.getItem("accessToken")) {
        item.classList.add("hidden");
    }
});
