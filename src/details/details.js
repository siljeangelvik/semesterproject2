/* @formatter:off */
import {API_LISTINGS_URL} from "../main";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const listingId = params.get("id");
const postDetailsContainer = document.querySelector('#cardContainer');

fetch(`${API_LISTINGS_URL}/${listingId}?_seller=true&_bids=true`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        //const id = data.find((listing) => listing.id === listingId);
        listingDetails(data);
    }).catch(error => {
    postDetailsContainer.innerHTML = "I'm sorry, we couldn't get what you're looking for.";
    console.log("Error message: " + error);
})
    .finally(() => {
        document.querySelector(".loader").remove();
        document.querySelector(".back").innerHTML =
            `<a href="/">
                <span class="material-symbols-outlined">
                    arrow_back_ios
                </span>
            </a>`;
    })


function listingDetails(item) {

    document.title = `Listing title: ${item.title}`;

    postDetailsContainer.innerHTML = `
        
        
  <div class="container mt-12 mx-auto px-4 md:px-12">
    <div class="-mx-1 lg:-mx-4">        
        <!-- CAROUSEL -->
        <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
        <!-- carousel wrapper -->
            <div class="carousel-inner relative w-full overflow-hidden">
                <!-- carousel content -->
            </div>
    
            <button class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
            <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
            <button class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
            <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
   </div>
 </div>  
   
    
    
    <!-- CONTENT -->
     <div class="container mt-12 mx-auto px-4 md:px-12">
        <div class="-mx-1 lg:-mx-4">
        
            <!-- Title -->
            <h1 class="text-2xl font-bold">${item.title}</h1>
            
            <div class="container flex flex-nowrap w-full">
                <div class="">
                    <img src="${item.seller.avatar}" alt="Avatar: ${item.seller.name}" class="rounded-full w-16">
                </div>
                
                
                <div class="mx-3">
                    <p class="font-bold">Seller:</p>
                    <p>${item.seller.name}</p>
                </div>
            </div>
            
            <!-- Bids & EndsAt Container -->
             <div class="p-8 text-left sm:p-9 md:p-7 xl:p-9">
                <svg class="w-5 h-5 inline-block align-middle" fill="#6b21a8" stroke="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"       d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                <!-- Bids Amount -->
                <span id="cardBidsAmount" class="text-body-color text-sm leading-relaxed font-light">&nbsp; ${item["_count"].bids} Bids  &nbsp;&nbsp; |  &nbsp;&nbsp;&nbsp; </span>
                <!-- EndsAt -->
                <span class="text-body-color text-sm leading-relaxed font-bold">Ends at:<span id="cardCounter" class="font-light"> ${item.endsAt}</span></span>
            </div>
         
         
            <div class="container">   
                <!-- Bids Amount -->
                <p class="font-bold">Bids:</p>
                <p>${item["_count"].bids}</p>
            
                    
                <!-- Description -->
                <p class="font-bold">Description:</p>
                <p>${item.description}</p>
                
                <!-- EndsAt -->
                <p class="font-bold">Ends at:</p>
                <p>${item.endsAt}</p>
                
                
                
                <!-- Place Bid Button -->
                <button id="cardPlaceBidButton" type="button" class="flex-grow self-center text-white text-sm bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-2 py-2 text-center mb-2 transition">
                   Place Bid
                </button>
                
                
            </div>
            
            
        </div>
     </div>
`;

    console.log(item.media);

    mediaCarouselFunction(item.media, item.title);

}


/* @formatter:on */

function mediaCarouselFunction(media, title) {
    // console.log(media.length);
    let carouselItem = document.querySelector('.carousel-inner');

    for (let i = 0; i < media.length; i++) {
        let imageWrapper = document.createElement("div");
        imageWrapper.classList.add('carousel-item', 'relative', 'float-left', 'w-full');

        if (i === 0) {
            imageWrapper.classList.add("active");
        }

        imageWrapper.innerHTML = `<img src="${media[i]}" class="block w-full h-52 max-h-56 object-cover" alt="${title}">`;

        carouselItem.appendChild(imageWrapper);
        console.log(imageWrapper);
    }
}


// localhost:5173/details/index.html?id=d6e947a0-98c3-4e33-9de8-ded798fd02ee


// localhost:5173/details/index.html?id=d6e947a0-98c3-4e33-9de8-ded798fd02ee

// DETAILS ITEM
/*
<!-- DETAILS ITEM -->
   <div class="flex flex-nowrap justify-center my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-5/6">
      <article class="overflow-hidden w-5/6 rounded-lg shadow-lg">
            <!-- Title -->
           <h1 class="text-2xl text-center">${item.title}</h1>


            <!-- Carousel Wrapper -->
            <div id="carouselExampleSlidesOnly" class="carousel slide relative" data-bs-ride="carousel">
                <div class="carousel-inner relative w-full overflow-hidden">

                </div>
            </div>



         <!-- Card Content Container -->
         <div class="flex flex-col px-8 pb-8 text-left sm:px-9 md:px-7 xl:px-9">
             <!-- Card Title -->
             <h4 class="h-16 mb-2">
                 <a href="javascript:void(0)" class="h-full mb-4 text-dark hover:text-primary block text-xl">
                     ${item.title}
                 </a>
             </h4>

             <!-- Card Place Bid Button -->
             <button id="cardPlaceBidButton" type="button" class="flex-grow self-center text-white text-sm bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-2 py-2 text-center mb-2 transition">
                Place Bid
             </button>

            <!-- Details Seller -->
             <div class="flex flex-nowrap gap-4">
                <img src="${item.seller.avatar}" alt="${item.seller.name}" class="rounded-full w-14">
                <div>
                    <h5>Seller</h5>
                    <h5 class="">${item.seller.name}</h5>
                </div>
            </div>

             <!-- Details Description -->
             <p class="h-16 mb-2 text-body-color text-base leading-relaxed">
                <span class="h-full self-center">${item.description}</span>
             </p>

             <!-- Details Tags -->
             <p class="h-12 text-body-color text-xs leading-relaxed font-mono">
                <span class="h-full self-center">Tags: </span>
                <span class="h-full self-center">${item.tags}</span>
             </p>

             <!-- Details Created -->
             <p class="text-body-color text-xs leading-relaxed font-mono">
                <span class="h-full self-center">Created: </span>
                <span class="h-full self-center">${item.created}</span>
             </p>

            <!-- Bids Amount + EndsAt -->
            <div class="p-8 text-left sm:p-9 md:p-7 xl:p-9">
             <svg class="w-5 h-5 inline-block align-middle" fill="#6b21a8" stroke="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"       d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
             <!-- Card Bids Amount -->
             <span id="cardBidsAmount" class="text-body-color text-sm leading-relaxed font-light">&nbsp; ${item["_count"].bids} Bids  &nbsp;&nbsp; |  &nbsp;&nbsp;&nbsp; </span>
             <!-- Card EndsAt -->
             <span class="text-body-color text-sm leading-relaxed font-bold">Ends at:<span id="cardCounter" class="font-light"> ${item.endsAt}</span></span>
         </div>

             <!-- Card Buttons Container -->
             <div class="flex flex-nowrap gap-3">

                 <!-- Card View Details Button -->
                 <button id="cardViewDetailsButton" onclick="window.location.href='../details/index.html?id=${item.id}'" type="button" class="flex-shrink self-center text-purple-800 text-sm hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-center mr-2 mb-2 rounded-full text-sm px-2 py-2 text-center mb-2 transition">
                     View Details
                 </button>
             </div>
         </div>
     </article>
  </div>
 */









