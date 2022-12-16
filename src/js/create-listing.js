import {addListingButton, returnMessage} from "../js/main";
import {API_LISTINGS_URL} from "../main";

let title = document.getElementById("createTitle");
let endsAt = document.getElementById("createEndsAt");
let media = document.getElementById("createMedia");
let description = document.getElementById("createDescription");
let tags = document.getElementById("createTags");

//


const isValidMedia = media => {
    const mediaRegex = /\.(jpg|jpeg|png|webp|avif|gif)$/;
    return mediaRegex.test(String(media));
};


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

    console.log(createData);

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

    apiCreateListing(API_LISTINGS_URL, createData);
}


async function apiCreateListing(API_LISTINGS_URL, newListing) {
    console.log(newListing);
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
        console.log(`response = ${response}`);
        const json = await response.json();
        console.log(json);
        if (!response.ok) {
            // console.log(json.errors[0].message);
            returnMessage.innerHTML = `${json.errors[0].message}`;
            throw new Error();
        }
        console.log("OK");
        console.log(response.status);

        setTimeout(() => {
            window.location.reload();
        }, 1500);

    } catch (error) {
        console.log(error);
    }
}


addListingButton.addEventListener('click', (event) => {
    event.preventDefault();
    createListing();
});