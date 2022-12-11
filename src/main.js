/* formatter:off */

// URLS
export const API_BASE_URL = 'https://api.noroff.dev/api/v1/auction';
export const API_LISTINGS_URL = `${API_BASE_URL}/listings`;


//export const bidsUrl = `${API_BASE_URL}/listings/<id>/bids`;
//export const singleUrl = `${API_BASE_URL}/listings/`;
//export const deleteUrl = `${API_BASE_URL}/listings/{}`;



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
