/* @formatter:on */
import {listingsUrl} from "./main";

const cardContainer = document.getElementById("cardContainer");
const loadMoreButton = document.getElementById("load-more");

// gets data from API and sets the content of #result div
fetch(listingsUrl)
    .then(response => response.json())
    .then(parsedData => {
       // console.log(parsedData);
        listOutArray(parsedData);
    })
    .catch((error) => cardContainer.innerHTML = "Something's wrong!" + error)
    .finally(() => document.getElementById("loader").remove());


// listing out all items from array
function listOutArray(listings) {
    console.log(listings);
    listings.forEach((listing) => {
        cardContainer.innerHTML += `
    <div class="card-item w-5/6 lg:w-1/2 mx-auto rounded">
        <div class="mb-4 bg-white text-grey-darker">
            <div class="appearance-none border rounded w-full py-2 px-3">
                <!-- Heading -->
                <div class="w-full flex justify-between py-2 border-b">
                    <!-- Listing Title -->
                    <h2 class="text-2xl font-bold py-2">${listing.title}</h2>
                    <!-- Listing Bids -->
                    <p class="font-bold py-4">Bids:
                   <button id="cardAmountBids" class="bg-yellow-500 hover:bg-yellow-400 text-white font-bold px-2 rounded-full" type="submit">${listing["_count"].bids}</button>
                  </p>
                </div>
                <!-- Listing Image -->
                <img id="cardMedia"
                    src="${listing.media}"
                    alt="listing-media-image" class="w-full text-center py-4 px-1">
                     <!-- Listing Time -->
                <p id="cardTime" class="py-2 border-t">${listing.time}</p>
                <!-- Listing Description -->
                <p id="cardDescription" class="py-2 border-t">${listing.description}</p>
                <!-- Listing Bids & Bid Button -->
                <div class="w-full flex justify-between py-4">
                    <!-- Listing Tags -->
                    <p id="cardTags" class="w-full py-2 flex justify-between text-sm font-bold font-mono">${listing.tags}</p>
                    <!-- Listing Bid Button -->
                    <div class="flex justify-between">
                        <button id="cardBidButton" class="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded" type="submit">Bid</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    })
    listOutArrayChunk();
}

// listing out chunks of 10 items from array
function listOutArrayChunk (listings) {
    listings = cardContainer.children;
    console.log('LISTINGS:\n\nALL POSTS = ' + listings.length);
    // console.log(listings);
    // This is the number of posts you want displayed
    let numberOfListingsToShow = 2;
    for (let i = 0; i < listings.length; i++) {
        if(i > numberOfListingsToShow - 1) {
            listings[i].style.display = "none";
        }
    }
}

// button load more items from array
loadMoreButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("LOAD MORE BUTTON HAS BEEN CLICKED");
    listOutArrayChunk();
})