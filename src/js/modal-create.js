/* @formatter:off */


import {API_LISTINGS_URL} from "../main";
import {returnMessage} from "../login/login";

// const form = document.getElementById('formCreateListing');
const modalCreateListing = document.getElementById("modal");
let title = document.querySelector('#createTitle');
let endsAt = document.querySelector('#createEndsAt');
let description = document.querySelector('#createDescription');
let media = document.querySelector('#createMedia');
let tags = document.querySelector('#createTags');

// media validation
const isValidMedia = media => {
    const mediaRegex = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i;
    return mediaRegex.test(String(media));
}


async function formCreateListing() {
    let validTitle = title.value.trim();
    let validDeadline = endsAt.value.trim();
    let validMedia = media.value.trim();
    let validDescription = description.value.trim();
    let validTags = tags.value.trim();

    const formData = {
        "title": validTitle,
        "endsAt": validDeadline,
        "media": isValidMedia(validMedia),
        "description": validDescription,
        "tags": validTags
    }

    if (!validTitle) {
        returnMessage.innerHTML = `Title needs to be at least 1 character.`;
        console.log(returnMessage);
    }

    if (!validDeadline) {
        returnMessage.innerHTML = `Deadline is required.`
        console.log(returnMessage);
        }

    if (validTitle && validDeadline) {
        console.log("SUCCESSFUL VALIDATION");
        console.log(formData);
        await postCreateListing(API_LISTINGS_URL, formData);
        modalCreateListing.classList.add("hidden");
        window.location.reload();
    }
}


async function postCreateListing(API_LISTINGS_URL, createData) {
    console.log('FORM CREATE DATA: ' + createData);
    try {
        const options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "content-Type": "application/json",
            },
            body: JSON.stringify({createData}),
        };
        const response = await fetch(API_LISTINGS_URL, options);
        // console.log(`response = ${response}`);
        const json = await response.json();
        // console.log(json);
        if (!response.ok) {
           //  console.log(json.errors[0].message);
            returnMessage.innerHTML = `${json.errors[0].message}`;
            throw new Error();
        }
        // console.log(response.status);
        window.location = '../index.html';
    } catch (error) {
        console.log(error);
        returnMessage.innerHTML = `${json.errors[0].message}`;

    }
}


document.querySelector('#modalCreateButton').addEventListener('click', (e) => {
    e.preventDefault();

    // window.location.href = '../index.html';

     formCreateListing();
})



/*
// Use fetch to send the form data to the API
fetch(API_LISTINGS_URL, {
    method: "POST",
    body: JSON.stringify({formData}),
}).then((response) => response.json())
    .then((result) => {
        console.log('Success:', result);
        console.log(result.errors[0].message);
    }).catch((error) => {
    console.error('Error:', error);
    console.log(errors[0].message);
});

 */



