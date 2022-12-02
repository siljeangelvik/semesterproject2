/* @formatter:on */

const listURL = `https://api.noroff.dev/api/v1/auction/listings`;
const outputDataButton = document.getElementById("outputDataButton");
const outputData = document.getElementById("outputData");
window.console.clear();


// gets data from API and sets the content of #result div
async function fetchData() {
    outputData.innerText = "Loading....";

    try {
        const res = await fetch(listURL);
        console.log(` res.length = ${listURL.length}\n\n res.type = ${typeof res}`);

        let jsonResult = await res.json();
        //console.log(` jsonResult.length = ${jsonResult.length}\n\n jsonResult.type = ${typeof jsonResult}\n\n jsonResult.value = ${jsonResult.value}`); // OBJECT
        // jsonResult.length = 10;
        JSON.stringify(jsonResult, null, 1);
        // console.log(` jsonResult.length = ${jsonResult.length}\n\n jsonResult.type = ${typeof jsonResult}\n\n jsonResult.value = ${jsonResult.value}`); // OBJECT

        jsonResult.forEach((element, index, array) => {
        //    console.log(`ELEMENT.X = ${element.x}\n\n INDEX = ${index}\n\n ARRAY = ${array}`);
            console.log(typeof element + typeof index + typeof array);

            let newDiv = `
            <div class="mb-4 border rounded bg-white text-grey-darker listingItem">
            <div class="appearance-none py-4 px-4 item">                   
                <!-- Heading -->
                <div class="w-full flex justify-between py-2">
                    <!-- Listing Title -->
                    <h2 class="text-2xl font-bold py-2">${element.title}</h2>
                    <!-- Listing Bids -->
                    <p id="listingsBids" class="font-bold py-4">_count.bids</p>                       
                </div>
                <!-- Listing Image -->
                <img id="listingsMedia" 
                    src="${element.media}"
                    alt="listing-media-image" class="w-full text-center py-4 px-1">
                <!-- Listing Description -->
                <p id="listingsDescription" class="py-2">${element.description}</p>
                <!-- Listing Bids & Bid Button -->
                <div class="w-full flex justify-between py-4">
                    <!-- Listing Tags -->
                    <p id="listingsTags" class="w-full py-2 flex justify-between text-sm font-bold font-mono">${element.tags}</p>
                    <!-- Listing Bid Button -->
                    <div class="flex justify-between">
                        <button id="listingBidButton" class="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded" type="submit">Bid</button>
                    </div>
                </div>
            </div>
            </div>`;
            array.length = 3;
            outputData.innerHTML += newDiv;
        });

       // console.log(jsonResult.length);

    } catch (error) {
        console.log(error);
    }
}


// add event listener for #loadMoreData button
outputDataButton.addEventListener('click', (e) => {
    e.preventDefault();
    fetchData();
})














/*

const visibleListings = 2;

const asyncIterable = {
    [Symbol.asyncIterator]() {
        let i = 0;
        return {
            next() {
                const done = i === visibleListings;
                console.log(visibleListings.value)
                const value = done ? undefined : i++;
                return Promise.resolve({value, done});
            },
            return() {
                // This will be reached if the consumer called 'break' or 'return' early in the loop
                return {done: true};
            },
        };
    },
};

(async () => {
    for await (const num of asyncIterable) {
        console.log(num);
    }
})();
*/


/*
 listings.forEach(function (listing) {
     console.log(listings);
     console.log(listing);

     let item = listing.id + 2;
     console.log(item);
 }) */
//let listings = JSON.stringify(jsonResult, null, 1);
//console.log(` listings.length = ${listings.length}\n\n listings.type = ${typeof listings}\n\n listings.value = ${listings.value}`); // OBJECT


/*
async function getData(listURL, listings) {
    console.log(listings);
    try {
        const options = {
            method: "GET",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(listURL),
        };
        const response = await fetch(listURL, options);
        console.log(options);
        const json = await response.json(listURL);
        console.log(json);
        if (response.status === 200) {
            getData(query);
        } else {
            console.log("Something's wrong: ");
            out.innerHTML = `Something's wrong ${onmessageerror}` ;
        }
    } catch (error) {
        out.innerHTML = "Something's wrong!";
        console.log(error);
    }
}

getData().then(
    function listData(items) {
        items.forEach((item) => {
            let itemCard = `
      <div class="mb-4 border rounded bg-white text-grey-darker listingItem">
            <div class="appearance-none py-4 px-4 item">
                <!-- Heading -->
                <div class="w-full flex justify-between py-2">
                    <!-- Listing Title -->
                    <h2 class="text-2xl font-bold py-2">${item.title}</h2>
                    <!-- Listing Bids -->
                    <p id="listingsBids" class="font-bold py-4">_count.bids</p>
                </div>
                <!-- Listing Image -->
                <img src="${item.media}" alt="listing-media" id="listingsMedia" class="w-full text-center py-4 px-1">
                <!-- Listing Description -->
                <p id="listingsDescription" class="py-2">${item.description}</p>
                <!-- Listing Bids & Bid Button -->
                <div class="w-full flex justify-between py-4">
                    <!-- Listing Tags -->
                    <p id="listingsTags" class="w-full py-2">${item.tags}</p>
                    <!-- Listing Bid Button -->
                    <div class="flex justify-between">
                        <button id="listingBidButton" class="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded" type="submit">Bid</button>
                    </div>
                </div>
            </div>
        </div>
    `
            out.innerHTML += itemCard;
        })
    }

)







/*
import { listUrl, listOutput } from "./main";

console.log('ListUrl: ' + listUrl, + ' ' + 'ListOutput ' + listOutput);

function listData(list) {
    list.forEach((item) => {
        console.log('Listing: ' + item.name);
        let newItemCard = `
        <div class="mb-4 border rounded bg-white text-grey-darker listingItem">
            <div class="appearance-none py-4 px-4 item">                   
                <!-- Heading -->
                <div class="w-full flex justify-between py-2">
                    <!-- Listing Title -->
                    <h2 class="text-2xl font-bold py-2">${item.title}</h2>
                    <!-- Listing Bids -->
                    <p id="listingsBids" class="font-bold py-4">_count.bids</p>                       
                </div>
                <!-- Listing Image -->
                <img src="${item.media}" alt="listing-media" id="listingsMedia" class="w-full text-center py-4 px-1">
                <!-- Listing Description -->
                <p id="listingsDescription" class="py-2">${item.description}</p>
                <!-- Listing Bids & Bid Button -->
                <div class="w-full flex justify-between py-4">
                    <!-- Listing Tags -->
                    <p id="listingsTags" class="w-full py-2">${item.tags}</p>
                    <!-- Listing Bid Button -->
                    <div class="flex justify-between">
                        <button id="listingBidButton" class="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded" type="submit">Bid</button>
                    </div>
                </div>
            </div>
        </div> `;
        listOutput.innerHTML += newItemCard;
    })
}
 *//*
fetch(listUrl)
    .then(response => response.json())
    .then(parsedData => {
        parsedData.length = 10;
        console.log(parsedData.length + "Data: ", parsedData);
        listData(parsedData);
    })
    .catch((error) => listOutput.innerHTML = "Something's wrong!" + error)*/


//        jsonResult.value = JSON.stringify(jsonResult.value, null, 1);
//      console.log(` jsonResult.length = ${jsonResult.length}\n\n jsonResult.type = ${typeof jsonResult}\n\n jsonResult.value = ${jsonResult.value}`); // OBJECT

// jsonResult.value = Object.getOwnPropertyNames(jsonResult.value);
// console.log(Object.getOwnPropertyNames('Object getOwnPropertyNames = ' + jsonResult.value));
// JSON.stringify(jsonResult, null, 1); //


// console.log(`listings = ${listings}\n\n listings.length = ${listings.length}\n\n listings.type = ${typeof listings}\n\n`);


//jsonResult.length = visibleListings;
// console.log(` jsonResult.length = ${jsonResult.length}\n\n jsonResult.type = ${typeof jsonResult} `);


/* const myArray = [{x:100}, {x:200}, {x:300}];
 outputData.innerText = ` ${JSON.stringify(jsonResult, null, 2)}  ${Object.getOwnPropertyNames(jsonResult)}${jsonResult.id}`;
 console.log(typeof myArray)
 outputData.innerText = `
 <div>${listings.id} </div> `; */

