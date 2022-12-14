/* @formatter:off */

import {API_LISTINGS_URL} from "../main";

export const containerLoader = document.getElementById("loader");
export const dataElement = document.getElementById("cardContainer");
let limit = 9;
let i = 0;

// make a GET request to the API
export default fetch(`${API_LISTINGS_URL}?_seller=true&_bids=true&sort=endsAt&sortOrder=asc&_active=true`)
    .then(response => {
        // if the request is successful, the API will return a list of data items
        if (response.ok) {
            // use the json() method of the Response object to parse the data
            return response.json();
        } else {
            // if the request fails, throw an error
            console.log(json.errors[0].message);
            returnMessage.innerHTML = `${json.errors[0].message}`;
            throw new Error(`${json.errors[0].message}`);
        }
    }).then(dataList => {
        console.log(dataList);
        loadListings(dataList);
        document.getElementById("load-more").addEventListener('click', () => {
            loadListings(dataList);
        })
    }).catch((error) => dataElement.innerHTML = "Something's wrong!" + error)
    .finally(() => containerLoader.remove());



function loadListings(listingsArray) {
    for (i; i < limit; i++) {
        // image, description, tags handler (??)
        // view details button
        [...document.querySelectorAll('.viewDetailsButton')].forEach(function (viewDetails) {
            if (localStorage.getItem("accessToken")) {
                viewDetails.src = `../details/index.html?id=${listingsArray[i].id}`;
            }
            // view listing not logged in modal
            /*
            document.getElementById("viewListing-modal").innerHTML = `
    <div class="fixed z-10 overflow-auto top-0 w-full left-0">
        <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity">
                <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
                <span class="absolute sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <form id="form"
                      class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                      aria-labelledby="modal-headline">

                    <div class=" bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 py-4 px-8 text-white text-xl border-b border-grey-lighter">
                        Not able to view listing!
                    </div>

                    <div class="bg-white px-2 pt-5 pb-2 sm:p-6 sm:pb-4">
                        <div class="mb-4">
                            <p>You need to log in or register a new account to view this listing.</p>
                        </div>
                    </div>

                    <div class="bg-gray-200 px-4 py-3 text-right">
                        <button id="modalCloseButton" type="button" onclick="document.getElementById('logout-modal').classList.add('hidden')"
                                class="py-2 px-4 text-purple-800 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 text-white rounded-full mr-2">
                            <i class="fas fa-times"></i> Cancel
                        </button>
                        <button onclick="window.location.href='../login/index.html" type="button"
                                class="py-2 px-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white rounded-full hover:bg-emerald-500 mr-2">
                            <i class="fas fa-plus"></i> Log in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
`;
            */
        })



        dataElement.innerHTML += `
<!-- DEMO: CARD ITEM -->
   <div class="flex flex-nowrap my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article class="overflow-hidden rounded-lg shadow-lg">
         <!-- Card Bids & EndsAt Container -->
         <div class="card-media-container max-h-96">
            <!-- Card Media -->
            <img id="cardMedia" src="${listingsArray[i].media}" alt="${listingsArray[i].title}" onerror="this.src='https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_960_720.png';" class="card-media h-52 max-h-56 w-full object-cover"/>
        </div>
         <div class="p-8 text-left sm:p-9 md:p-7 xl:p-9">
             <svg class="w-5 h-5 inline-block align-middle" fill="#6b21a8" stroke="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"       d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
             <!-- Card Bids Amount -->
             <span id="cardBidsAmount" class="text-body-color text-sm leading-relaxed font-light">&nbsp; ${listingsArray[i]["_count"].bids} Bids  &nbsp;&nbsp; |  &nbsp;&nbsp;&nbsp; </span>
             <!-- Card EndsAt -->
             <span class="text-body-color text-sm leading-relaxed font-bold">Ends at:<span id="cardCounter" class="font-light"> ${listingsArray[i].endsAt}</span></span>
         </div>
         <!-- Card Content Container -->
         <div class="flex flex-col px-8 pb-8 text-left sm:px-9 md:px-7 xl:px-9">
             <!-- Card Title -->
             <h4 class="my-4 h-8">
                 <button type="button" 
                         onclick="window.location = '../details/index.html?id=${listingsArray[i].id}'" 
                         class="viewDetailsButton h-full text-dark hover:text-primary block text-xl">
                     ${listingsArray[i].title}
                 </button>
             </h4>
            
             <!-- Card Description -->
             <button type="button"
                     onclick="window.location = '../details/index.html?id=${listingsArray[i].id}'"
                     class="viewDetailsButton my-4 h-6 text-left text-body-color text-base leading-relaxed truncate"> 
                <span class="h-full">${listingsArray[i].description}</span>
             </button>
             
             <!-- Card Tags -->
             <p class="h-12 text-body-color text-xs leading-relaxed font-mono font-bold">
                Tags: &nbsp; <span class="self-start font-medium">${listingsArray[i].tags}</span>&nbsp;
             </p>
            
             <!-- Card Buttons Container -->
             <div class="h-8 flex flex-nowrap gap-3">               
                 <!-- Card View Details Button -->
                 <button onclick="window.location = '../details/index.html?id=${listingsArray[i].id}'" class="viewDetailsButton flex-shrink self-center text-purple-800 text-sm hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-center mr-2 mb-2 rounded-full text-sm px-2 py-2 text-center mb-2 transition">
                     View Details
                 </button>
             </div>
         </div>
     </article>
  </div>
`;
    }
    limit += 9;

    //filterItems(listingsArray[i].title, listingsArray[i].description, listingsArray[i].tags);
    // console.log(listingsArray[i].title, listingsArray[i].description, listingsArray[i].tags);



}

// filter
/*
function filterItems(title, description, tags, query) {
    let arr = [title, description, tags];
    console.log(arr);

    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}
*/
// button back to top
document.getElementById("toTopButton").addEventListener('click', ()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

