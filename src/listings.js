/* @formatter:off */
import { listUrl, listData, listingsTitle, listingsDescription, listingsMedia, listingsTags, listingsBids, listingsBidButton } from "./main";

function listingData(listings) {
    listData.innerHTML = '';
    listings.forEach((listing) => {
        console.log(listing);
        let newItemCard = `
        <!-- Single Card -->
    <div class="mb-4 border rounded bg-white text-grey-darker">
        <div class="appearance-none py-4 px-4">                   
            <!-- Heading -->
            <div class="w-full flex justify-between py-2">
                <!-- Listing Title -->
                <h2 class="text-2xl font-bold py-2">${listing.title}</h2>
                <!-- Listing Bids -->
                <p id="listingsBids" class="font-bold py-4">_count.bids</p>                       
            </div>
                        
            <!-- Listing Image -->
            <img src="${listing.media}" alt="listing-media" id="listingsMedia" class="w-full text-center py-4 px-1">

            <!-- Listing Description -->
            <p id="listingsDescription" class="py-2">${listing.description}</p>

            <!-- Listing Bids & Bid Button -->
            <div class="w-full flex justify-between py-4">
                <!-- Listing Tags -->
                <p id="listingsTags" class="w-full py-2">${listing.tags}</p>
                <!-- Listing Bid Button -->
                <div class="flex justify-between">
                     <button id="listingBidButton" class="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded" type="submit">Bid</button>
                </div>
                
            </div>
        </div>
    </div>                        
        `;
        listData.innerHTML += newItemCard;
    })
}

fetch(listUrl)
    .then(response => response.json())
    .then(parsedData => {
        parsedData.length = 10;
        console.log(parsedData.length);
        console.log("Data: ", parsedData);
        listingData(parsedData);
        // let bidCount = parsedData.data;
    })
    .catch((error) => {
        console.log("Something went wrong: " + error.message);
        listData.innerHTML = "Something went wrong";
    })



/*
async function getListings() {
console.log()
let response = await fetch(listUrl);
console.log(listUrl);
return await response.json();
}

const searchItem = document.getElementById("searchItem");

searchItem.addEventListener('change', (event) => {
searchForItem(event.target.value);
})

function searchForItem(listings) {
getListings().then(itemsData => {
    const listingData = itemsData['data'];
    const listingDataCount = itemsData['_count'];
    const listingIndex = listingData.findIndex(item => item.title === listings);

    listingsTitle.innerHTML = listingData[listingIndex].title;
    listingsMedia.src = listingData[listingIndex].media;
    listingsDescription.innerHTML = listingData[listingIndex].description;
    listingsBids.innerHTML = listingData[listingDataCount][0];
    listingsTags.innerHTML = listingData[listingIndex].tags;

    console.log(listingData);
}).catch(listings);
}

listingsBidButton.addEventListener('click', (e) => {
setupCounter(listingsBidButton);
})
*/

/*

async function userAccess(listUrl) {
    // console.log(userData);
    try {
        const getData = {
            method: "GET",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(listUrl),
        };
        const response = await fetch(listUrl, getData);
        // console.log(response);
        const json = await response.json();
        console.log(json);
        if (response.status === 200) {
          console.log("OK");
        } else {
          returnMessage.innerHTML = json.error();
        }
    } catch (error) {
        console.log(error);
    }
}

/*
function listData(listings) {
    console.log(listings);

    // loginMessage.innerHTML = `Hello, ` + localStorage.getItem(name);

    listings.forEach((listing) => {

        listData.innerHTML +=
            `<div>
                  <a href="details.html?uuid=${listing.uuid}">
                        <p>${listing.name}</p>
                        <p >${listing.credits}</p>
                        <img src="${listing.email}" alt="${listing.email}" width="100"></a>
                </div>`;
    })
}
*/

// console.log(loginMessage.innerHTML = `Hello, ${localStorage.getItem(name)}`);
