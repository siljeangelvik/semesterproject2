/* @formatter:off */
import { listUrl, listData, helloUsername } from "./main";
helloUsername.innerHTML = localStorage.getItem('username');

function listingData(listings) {
    listData.innerHTML = '';
    listings.forEach((listing) => {
        console.log(listing);
        let newItemCard = `
        <!-- Single Card -->
    <div class="mb-4 border rounded bg-white text-grey-darker listingItem">
        <div class="appearance-none py-4 px-4 item">                   
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
    </div> `;
        listData.innerHTML += newItemCard;
    })
}

fetch(listUrl)
    .then(response => response.json())
    .then(parsedData => {
        parsedData.length = 10;

        console.log(parsedData.length);
        console.log('listedItems: ' + parsedData.length);
        console.log(parsedData.length);
        console.log("Data: ", parsedData);
        listingData(parsedData);
    })
    .catch((error) => {
        console.log("Something went wrong: " + error.message);
        listData.innerHTML = "Something went wrong";
    })


/*
 Array.from( iterations ).forEach(iteration => iteration.classList.add('hidden'));
        for (let i = 10; i < parsedData.length; i++) {
            iterations[i].classList.add('hidden');
        }


function hideListings(){
    let items = document.querySelectorAll('.listingItems');
    Array.from( items ).forEach(item => item.classList.add('hidden'));
    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.add('hidden');
        console.log('i: ' + i);
    }
}

let loadMore = document.getElementById("loadMore");

function listMoreItems(items) {
    items.forEach(function (item, index) {
        if (index > maxItems - 1) {
            item.classList.add('invisible');
            console.log(item, maxItems);
        }
    });

    loadMore.addEventListener("click", function () {
        [].forEach.call(document.querySelectorAll("." + items.classList('invisible')), function (
            item,
            index
        ) {
            if (index < loadItems) {
                item.classList.remove('invisible');
            }

            console.log(items.classList.value);
            if (document.querySelectorAll("." + item.classList('invisible')).length === 0) {
                loadMore.style.display = "none";
            }
        });
    });
}




/*


        console.log('Listings length: ' + data.length)
        items.forEach(function (item, index) {
            console.log(item.innerText, index);
            if (index > maxItems - 1) {
                item.classList.add('invisible');
                console.log('maxItems: ' + maxItems);
            }
        })
        loadMore.addEventListener("click", function () {
            [].forEach.call(document.querySelectorAll("." + items.classList('invisible')), function (
                item,
                index
            ) {
                if (index < loadItems) {
                    item.classList.remove('invisible');
                }

                console.log(items.classList.value);
                if (document.querySelectorAll("." + item.classList('invisible')).length === 0) {
                    loadMore.style.display = "none";
                }
            });
        });
 */