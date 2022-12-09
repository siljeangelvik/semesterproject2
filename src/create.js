/* formatter:off */
import { API_LISTINGS_URL } from "./main";

export const modal = document.getElementById("modal");
export const modalButton = document.getElementById("modalButton");


let form = document.getElementById("form");
//let inputTime = document.getElementById("createTime");
let inputMedia = document.getElementById("createMedia");
let inputTags = document.getElementById("createTags");
let inputDescription = document.getElementById("createDescription");
//let msg = document.getElementById("msg");
export const cardContainer = document.getElementById("cardContainer");
let inputTitle = document.getElementById("createTitle");




// function post new listing to api
function setListing(newListing) {
    let listingItem = {
        "title": inputTitle.value,
        "avatar": inputMedia.value,
        "tags": inputTags.value,
        "description": inputDescription.value
    };
    console.log(newListing);


}


//
form.addEventListener("submit", (e) => {

    e.preventDefault();
    console.log(listingItem);

    createListingAPI(API_LISTINGS_URL, listingItem);
//    window.location.reload();
    console.log("LISTING");
    console.log(listingItem);
})

// gets data from API and sets the content of #result div
async function createListingAPI(API_LISTINGS_URL, listing) {
    try {
        const postData = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "content-Type": "application/json",
            },
            body: JSON.stringify({listing}),
        };

        const response = await fetch(API_LISTINGS_URL, postData);
        console.log(response);
        if (!response.ok) {
            console.log(json.errors[0].message);
            returnMessage.innerHTML = `${json.errors[0].message}`;
            throw new Error();
        }
        const json = await response.json();
        console.log(json);

        console.log("OK");
        console.log(response.status);

        setListing(json.listing);
    } catch (error) {
        console.log(error);
    }
}


/*
// create post
const createPost = () => {
    cardContainer.innerHTML += `
<div class="w-5/6 lg:w-1/2 mx-auto rounded">
    <div class="mb-4 bg-white text-grey-darker">
        <div class="appearance-none border rounded w-full py-2 px-3">
            <div class="w-full flex justify-between py-2 border-b">
            <!-- Listing Title -->
                <h2 class="text-2xl font-bold py-2">${data.title}</h2>
                <!-- Listing Bids -->
                <p class="font-bold py-4">
                    <button id="cardAmountBids" class="bg-yellow-500 hover:bg-yellow-400 text-white font-bold px-2 rounded-full">${data.endsAt}</button>
                </p>
            </div>
            <!-- Listing Image -->
            <img id="cardMedia"
            src="${data.media}"
            alt="listing-media-image" class="w-full text-center py-4 px-1">
            <!-- Listing Description -->
            <p id="cardDescription" class="py-2 border-t">${data.description}</p>
            <!-- Listing Bids & Bid Button -->
                <div class="w-full flex justify-between py-4">
                    <!-- Listing Tags -->
                    <p id="cardTags" class="w-full py-2 flex justify-between text-sm font-bold font-mono">${data.tags}</p>
                    <!-- Listing Bid Button -->
                    <div class="flex justify-between">
                        <button id="cardBidButton" class="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded" type="submit">Bid</button>
                    </div>
                </div>
            <p id="cardTime" class="w-full py-2 flex justify-between text-sm italic"></p>
            
            <span class="options">
                <i onClick="editPost(this)" class="fas fa-edit"></i>
                <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
            </span>
        </div>
    </div>
</div>
  `;
};
*/


// if user is not logged in, modal hidden
modalButton.addEventListener('click', () => {
    if (!localStorage.getItem("accessToken")) {
        window.alert("You need to be logged in to add a listing");
        window.location = '../login/index.html';
    }
    modal.classList.remove('hidden');
    console.log('Modal Opened');
})

// button close modal, if modal is open
document.getElementById("modalExit").addEventListener('click', () => {
    modal.classList.add('hidden');
})

