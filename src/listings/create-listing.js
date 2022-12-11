import {API_LISTINGS_URL} from "../main";

let title = document.getElementById('createTitle').value;
let media = document.getElementById('createMedia').value;
let endsAt = document.getElementById('createDeadline').value;
let description = document.getElementById('createDescription').value;
let tags = document.getElementById('createTags').value;

// Create a new Listing object with the input values
let listing = {
    title: title,
    endsAt: endsAt,
    media: media,
    description: description,
    tags: tags
};

// Send the Listing object to the API using the POST method
fetch(API_LISTINGS_URL, {
    method: 'POST',
    headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(listing)
}).then(response => {
    if (response.ok) {
        // The POST request was successful
        response.json().then(data => {
            // Handle the parsed JSON data here
            console.log(data.title); // Outputs the title of the new post
        });
    } else {
        // There was an error with the POST request
    }
})
    .catch(error => {
        console.log(error);
        // Handle any errors here
    });
