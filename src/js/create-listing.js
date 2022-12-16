import {addListingButton, returnMessage} from "../js/main";
import {API_LISTINGS_URL} from "../main";

let title = document.getElementById("createTitle");
let endsAt = document.getElementById("createEndsAt");
let media = document.getElementById("createMedia");
let description = document.getElementById("createDescription");
let tags = document.getElementById("createTags");

// Media / Image URL validation
const isValidMedia = media => {
    const mediaRegex = /\.(jpg|jpeg|png|webp|avif|gif)$/;
    return mediaRegex.test(String(media));
};

// Function that creates an object and validate inputs before sending to API
async function createListing() {
    let validTitle = title.value.trim();
    let validEndsAt = endsAt.value.trim();
    validEndsAt = new Date(validEndsAt);
    let validMedia = [media.value.trim()];
    let validDescription = description.value.trim();
    let validTags = [tags.value.trim()];

    // object to be sent to api
    let createData = {
        "title": validTitle,
        "endsAt": validEndsAt,
        "media": validMedia,
        "description": validDescription,
        "tags": validTags
    }

    // if statements for validating the user created listing
    if (!validTitle) {
        returnMessage.innerHTML = 'Title cannot be empty.';
        return;
    }
    if (!validEndsAt) {
        returnMessage.innerHTML = 'Deadline needs to be set.';
        return;
    }
    if (!isValidMedia(validMedia)) {
        returnMessage.innerHTML = 'Invalid image URL.';
        return;
    }
    // console.log(createData);
    apiCreateListing(API_LISTINGS_URL, createData);
}

// Fetching the newly created listing
async function apiCreateListing(API_LISTINGS_URL, newListing) {
    // console.log(newListing);
    try {
        const options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "content-Type": "application/json",
            },
            body: JSON.stringify(newListing),
        };

        const response = await fetch(API_LISTINGS_URL, options);
        // console.log(`response = ${response}`);
        const json = await response.json();
        // console.log(json);
        if (!response.ok) {
            // console.log(json.errors[0].message);
            returnMessage.innerHTML = `${json.errors[0].message}`;
            throw new Error();
        }
        // console.log(response.status);

        document.getElementById('create-modal').classList.add('hidden');

        setTimeout(() => {
            window.location.reload();
        }, 2000);

    } catch (error) {
        returnMessage.innerHTML = `${json.errors[0].message}`;
        // console.log(error);
    }
}


addListingButton.addEventListener('click', (event) => {
    event.preventDefault();
    createListing();
});