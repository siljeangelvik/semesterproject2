/* formatter:off */
import { API_LISTINGS_URL } from "./main";

const modal = document.getElementById("modal");
const modalButton = document.getElementById("modalButton");

// menu: add listing - input fields
modal.innerHTML = `
  <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 transition-opacity">
      <div class="absolute inset-0 bg-gray-900 opacity-75" />
    </div>
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
    <form id="form" class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" aria-labelledby="modal-headline">

          <div class="bg-orange-400 py-4 px-8 text-black text-xl border-b border-grey-lighter">Create a listing</div>

      <div class="bg-white px-2 pt-5 pb-2 sm:p-6 sm:pb-4">
        <div class="mb-4 flex justify-between gap-2">

          <div class="mb-4 w-full">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="createTitle">Title</label>
            <input id="createTitle" type="text" placeholder="Title" required class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
          </div>
            
             <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="createTime">Time</label>
                <input id="createTime" type="time" required min="00.00" max="23.59" class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" placeholder="time" />
            </div>
        </div>
        
        
        <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="createMedia">Media</label>
            <input id="createMedia" type="url" alt="" placeholder="https://cdn.pixabay.com/photo/2022/11/28/20/52/bird-7623166_1280.jpg" pattern="https://.*" size="30" class="profile-pic-input appearance-none border rounded w-full py-2 px-3 text-grey-darker"/>
        </div>
        
        <div class="mb-4">
          <label class="block text-grey-darker text-sm font-bold mb-2" for="createTitle">Description</label>
          <input id="createDescription" type="text" class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" placeholder="Description" />
        </div>
            
        <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="createTags">Tags</label>
            <input id="createTags" type="text" autocomplete="off" class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" placeholder="Tags" />
        </div>    
      <div id="msg" class="text-red-600"></div>
      </div>
      <div class="bg-gray-200 px-4 py-3 text-right">
        <button id="modalExit" type="button" class="py-2 px-4 bg-orange-400 text-white rounded hover:bg-red-400 mr-2"><i class="fas fa-times"></i> Cancel</button>
        <button id="modalCreate" type="submit" class="py-2 px-4 bg-orange-400 text-white rounded hover:bg-emerald-500 mr-2"><i class="fas fa-plus"></i> Create</button>
      </div>
    </form>
  </div>
`;


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


let form = document.getElementById("form");
//let inputTime = document.getElementById("createTime");
let inputMedia = document.getElementById("createMedia");
let inputTags = document.getElementById("createTags");
let inputDescription = document.getElementById("createDescription");
//let msg = document.getElementById("msg");
let cardContainer = document.getElementById("cardContainer");
let inputTitle = document.getElementById("createTitle");

let listingItem = {
    "title": inputTitle.value,
    "avatar": inputMedia.value,
    "tags": inputTags.value,
    "description": inputDescription.value
};


// function post new listing to api
function setListing(newListing) {
    localStorage.setItem("avatar", newListing)
    console.log("NEW PIC")
    console.log(newListing);
}


// function if avatar-input-value is empty, display error message // valid input-value: runs updateAvatarAPI function
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
