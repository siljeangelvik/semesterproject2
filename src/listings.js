/* @formatter:off */
import {loadMoreButton, API_LISTINGS_URL} from "./main";
const containerLoader = document.getElementById("loader");
export const listingsContainer = document.getElementById("cardContainer");

// gets data from API and sets the content of #result div
export default fetch(API_LISTINGS_URL)
    .then(response => response.json())
    .then(parsedData => {
        let numberOfListings = 10;
        for (let i = 0; i < parsedData.length; i++) {}
        parsedData.length = 4;
        console.log(parsedData.length);
        listOutArray(parsedData);
    }).catch((error) => listingsContainer.innerHTML = "Something's wrong!" + error)
    .finally(() => containerLoader.remove());

// listing out all items from array
export function listOutArray(listings) {
    console.log(listings);
    listings.forEach((listing) => {
        console.log(listing)
        let listingItem = `
<!-- DEMO: CARD ITEM -->
  <div class="w-full px-4 md:w-1/2 xl:w-1/3">
     <div class="mb-10 overflow-hidden rounded-lg bg-white">
         <!-- Card Bids & EndsAt Container -->
         <div class="max-h-96">
          <!-- Card Media -->
         <img src="${listing.media}" alt="image" class="max-h-52 w-full object-cover"/>
        </div>
         <div class="p-8 text-left sm:p-9 md:p-7 xl:p-9">
             <svg class="w-5 h-5 inline-block align-middle" fill="#6b21a8" stroke="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"       d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
             <!-- Card Bids Amount -->
             <span id="cardBidsAmount" class="text-body-color text-sm leading-relaxed font-light">&nbsp; ${listing["_count"].bids} Bids  &nbsp;&nbsp; |  &nbsp;&nbsp;&nbsp; </span>
             <!-- Card EndsAt -->
             <span class="text-body-color text-sm leading-relaxed font-bold">Ends at:<span class="font-light"> ${listing.endsAt}</span></span>
         </div>
         <!-- Card Content Container -->
         <div class="px-8 pb-8 text-left sm:px-9 md:px-7 xl:px-9">
             <!-- Card Title -->
             <h3>
                 <a href="javascript:void(0)" class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                     ${listing.title}
                 </a>
             </h3>
             <!-- Card Description -->
             <p class="text-body-color mb-7 text-base leading-relaxed"> 
             ${listing.description}
             </p>
             <!-- Card Tags -->
             <p class="text-body-color mb-7 text-xs leading-relaxed font-mono">
                 ${listing.tags}
             </p>
             <!-- Card Buttons Container -->
             <div>
                 <!-- Card Place Bid Button -->
                 <button id="cardViewDetailsButton" type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 transition">
                     Place Bid
                 </button>
                 <!-- Card View Details Button -->
                 <button id="cardBidButton" type="button" class="text-purple-800 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-center mr-2 mb-2 rounded-full text-sm  px-5 py-2.5 text-center mr-2 mb-2 transition  ">
                     View Details
                 </button>
             </div>
         </div>
     </div>
  </div>
`;
        listingsContainer.innerHTML += listingItem;
    })
}

// listing out chunks of 10 items from array
function listOutArrayChunk(listings) {
    listings = document.getElementById("cardContainer").children;
    console.log('LISTINGS:\n\nALL POSTS = ' + listings.length);
    // console.log(listings);
    // This is the number of posts you want displayed
    let numberOfListingsToShow = 5;
    for (let i = 0; i < listings.length; i++) {
        if (i > numberOfListingsToShow - 1) {
            listings[i].style.display = "none";
        }
    }
}

// button load more items from array
loadMoreButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("LOAD MORE BUTTON HAS BEEN CLICKED");
    listOutArrayChunk();
});

