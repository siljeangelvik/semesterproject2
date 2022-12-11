// import {API_LISTINGS_URL} from "./main";

let title = document.getElementById('createTitle').value;
let media = document.getElementById('createMedia').value;
// let endsAt = document.getElementById('createDeadline').value;
let description = document.getElementById('createDescription').value;
let tags = document.getElementById('createTags').value;

// Create a new Listing object with the input values
let createdListing = {
    "title": title,
  //  endsAt: endsAt,
    "media": media,
    "description": description,
    "tags": tags
};

// Send the Listing object to the API using the POST method
fetch(API_LISTINGS_URL, {
    method: 'POST',
    headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(createdListing)
}).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
        console.log(error);
    });