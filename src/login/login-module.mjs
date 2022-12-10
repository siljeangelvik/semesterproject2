import {loginRequest} from "../requests/post/post-requests";

fetch(loginRequest)
    .then(response => {
        
        // Handle the response here
        console.log(response);
    })
    .catch(error => {
        // Handle any errors here
        console.log(error);
    });