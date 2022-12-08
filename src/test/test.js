import {API_LISTINGS_URL} from "../main";

let response = fetch(API_LISTINGS_URL);

fetch(API_LISTINGS_URL)
    .then(response => {
        console.log(response)
        // handle the response
    })
    .catch(error => {
        console.log(error)
        // handle the error
    });