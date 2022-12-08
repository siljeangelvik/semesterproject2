import {API_LISTINGS_URL} from "./main";

const listingDetails = document.getElementById("");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
let API_SINGLE_URL = `${API_LISTINGS_URL}/${id}`;

fetch(API_SINGLE_URL)
    .then(response => response.json())
    .then(data => {
    //    listingDetails(data.data);
        console.log(data.data + `, Data Value: ` + data.data.value + `, Data Type: ` + typeof data.data);
    })
    .catch(error => {
        listingDetails.innerHTML = "I'm sorry, we couldn't get what you're looking for.";
        console.log("Error message: " + error);
    })
    .finally(() => {
        document.querySelector(".loader").remove();
        document.querySelector(".back").innerHTML = `<a href="index.html">Back</a>`;
    })

