


/* @formatter:off */
// import '../js/modal';
// import {API_LISTINGS_URL} from "../main";
/*
let title = document.getElementById("createTitle");
let endsAt = document.getElementById("createDeadline");
// let media = document.querySelector('input[type="url"][multiple]');
let media = document.getElementById("createMedia");
let description = document.getElementById("createDescription");
let tags = document.getElementById("createTags");
// let errorElement = document.querySelectorAll('.error');
 //const formData = new FormData();

let validTitle = title.value.trim();
let validDeadline = endsAt.value.trim();
let validPhotos = media.value.trim();
let validDescription = description.value.trim();
let validTags = tags.value.trim();


// the object that will be sent to api
formData = {
    "title": validTitle,
    "endsAt": validDeadline,
    "media": validPhotos,
    "description": validDescription,
    "tags": validTags
}

console.log("THE OBJECT I'M GOING TO SEND: ", formData);



const form = document.getElementById('formCreateListing');
console.log(form);
console.log("THIS IS THE FORM ^");


const inputs = form.querySelectorAll('input');


form.addEventListener('submit', (event) => {
    event.preventDefault();


    for (const input of inputs) {
        // Check the value of each input field
        if (!input.value) {
            // If the input field is empty, create a new error message
            const errorMessage = document.createElement('div');
            errorMessage.classList.add('error', 'text-red-600');
            errorMessage.textContent = `${input.name} is required!`;

            // Insert the error message after the input field
            input.insertAdjacentElement('afterend', errorMessage);
        }
    }
});


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

















/*
// Add a key-value pair for each input field in the form
formData.append('title', validTitle);
formData.append('endsAt', validDeadline);
formData.append('media', validPhotos);
formData.append('description', validDescription);
formData.append('tags', validTags);
 */

