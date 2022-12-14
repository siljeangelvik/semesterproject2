import {API_LISTINGS_URL} from "../main";

export const API_LISTING_PARAM_URL = `${API_LISTINGS_URL}?_seller=true&_bids=true&sort=endsAt&sortOrder=asc&_active=true`;

export const containerLoader = document.getElementById("loader");
export const dataElement = document.getElementById("cardContainer");
let limit = 9;
let i = 0;

// fetching all listings from API
export default fetch(API_LISTING_PARAM_URL)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            // console.log(json.errors[0].message);
            returnMessage.innerHTML = `${json.errors[0].message}`;
            throw new Error(`${json.errors[0].message}`);
        }
    }).then(dataList => {
        loadListings(dataList);
        document.getElementById("load-more").addEventListener('click', () => {
            loadListings(dataList);
        })
    }).catch((error) => dataElement.innerHTML = "Something's wrong!" + error)
    .finally(() => containerLoader.remove());

// List out 9 first listings, and list out 9 more listing on button click
export function loadListings(listingsArray) {

    for (i; i < limit; i++) {
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
             <h3 class="my-4 h-8">
                 <a type="button"
                    href="../details/index.html?id=${listingsArray[i].id}"
                    class="viewDetailsButton h-full text-dark hover:text-primary block text-xl">
                     ${listingsArray[i].title}
                 </a>
             </h3>
            
             <!-- Card Description -->
             <div class="my-4 h-6 text-left text-body-color text-base leading-relaxed truncate text-truncate"> 
                <span class="h-full">${listingsArray[i].description}</span>
             </div>
             
             <!-- Card Tags -->
             <p class="h-12 text-body-color text-xs leading-relaxed font-mono font-bold">
                Tags: &nbsp; <span class="self-start font-medium">${listingsArray[i].tags}</span>&nbsp;
             </p>
            
             <!-- Card Buttons Container -->
             <div class="h-8 w-full flex flex-nowrap justify-center">               
                 <!-- Card View Details Button -->
                 <a type="button"
                        href="../details/index.html?id=${listingsArray[i].id}"
                        class="viewDetailsButton w-full self-center text-purple-800 text-sm hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-center mr-1 mb-1 rounded-full text-sm px-2 py-2 text-center transition">
                     View Details
                 </a>
             </div>
         </div>
     </article>
  </div>
`;

        // Element with class "openLogoutModal" will be displayed if user is logged in
        const viewDetailsButton = "viewDetailsButton";
        document.querySelectorAll(`.${viewDetailsButton}`).forEach(detailsPageButton => {
            detailsPageButton.addEventListener("click", (event) => {
                console.log("Details page button");
                if (!localStorage.getItem("accessToken")) {
                    event.preventDefault();
                   // window.location.href += `../details/index.html?id=${listingsArray[i].id}`;
                    window.alert("You need to be logged in to access this listing.");
                    window.location.href = '../login/index.html';
                } else { return true; }
            });
        });
    }
    limit += 9;
}


// Button - back to top
export const backToTopButton = document.getElementById("toTopButton");
backToTopButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});