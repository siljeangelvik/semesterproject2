/* @formatter:on */
import { listUrl } from "./main";

const cardContainer = document.getElementById("card-container");
const loadMoreButton = document.getElementById("load-more");

window.console.clear();
// gets data from API and sets the content of #result div
async function fetchData() {
    try {
        const res = await fetch(listUrl);
        // console.log(` response.length = ${listURL.length}\n\n response.type = ${typeof res}`);

        const jsonResult = await res.json();
        JSON.stringify(jsonResult, null, 1);
        console.log(jsonResult.length);
        console.log(jsonResult);

        jsonResult.length = 5;
        jsonResult.forEach((element, index, array) => {
            // console.log(`ELEMENT.ID = ${element.id}\n\n N in ARRAY(INDEX) = ${index}\n\n ARRAY = ${array}`);
            console.log(index + array)
            index = `
    <div class="w-5/6 lg:w-1/2 mx-auto rounded">
        <div class="mb-4 bg-white text-grey-darker">
            <div class="appearance-none border rounded w-full py-2 px-3">
                <!-- Heading -->
                <div class="w-full flex justify-between py-2 border-b">
                    <!-- Listing Title -->
                    <h2 class="text-2xl font-bold py-2">${element.title}</h2>
                    <!-- Listing Bids -->
                    <p class="font-bold py-4">Bids:
                   <button id="cardAmountBids" class="bg-yellow-500 hover:bg-yellow-400 text-white font-bold px-2 rounded-full" type="submit">${element["_count"].bids}</button>
                  </p>
                </div>
                <!-- Listing Image -->
                <img id="cardMedia"
                    src="${element.media}"
                    alt="listing-media-image" class="w-full text-center py-4 px-1">
                <!-- Listing Description -->
                <p id="cardDescription" class="py-2 border-t">${element.description}</p>
                <!-- Listing Bids & Bid Button -->
                <div class="w-full flex justify-between py-4">
                    <!-- Listing Tags -->
                    <p id="cardTags" class="w-full py-2 flex justify-between text-sm font-bold font-mono">${element.tags}</p>
                    <!-- Listing Bid Button -->
                    <div class="flex justify-between">
                        <button id="cardBidButton" class="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded" type="submit">Bid</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

            cardContainer.innerHTML += index;
        });

    } catch (error) {
        console.log(error);
    }
}

// add event listener for #loadMoreData button
loadMoreButton.addEventListener('click', (e) => {
    e.preventDefault();
    fetchData();
})


