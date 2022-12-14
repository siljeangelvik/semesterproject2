/* @formatter:off */
import {API_LISTINGS_URL} from "../main";
import {setupCounter} from "../counter";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const listingId = params.get("id");
export const API_LISTINGS_ID_URL = `${API_LISTINGS_URL}/${listingId}?_seller=true&_bids=true`
const postDetailsContainer = document.querySelector('#cardContainer');

fetch(API_LISTINGS_ID_URL)
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
            `<a href="/" class="">
                <span class="material-symbols-outlined text-sm">
                    arrow_back_ios <span class="h-full self-start">Back</span>
                </span>
            </a>`;
    })


/* @formatter:off */
function listingDetails(item) {

    document.title = `Listing title: ${item.title}`;

    postDetailsContainer.innerHTML = `
                
  <div class="container mt-4 mx-auto px-4 md:px-12">
    <div class="-mx-1 lg:-mx-4 border rounded-l shadow">        
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
    
    <!-- Seller Container -->
    <div class="container flex flex-nowrap items-center w-full border-t border-b-0 border w-full rounded">
         <div class="flex flex-col mx-3 mt-3 rounded-full w-16 h-16">
             <img src="${item.seller.avatar}" alt="${item.seller.name}" class="rounded-full border w-12 h-12 object-center object-cover">
         </div>                       
         <div class="flex flex-col mx-3 ">
             <div class="flex flex-wrap"><p class="font-bold">Seller: &nbsp; </p> <p> ${item.seller.name}</p></div>
             <!-- Wins Amount -->
             <div class="flex flex-wrap"><p class="font-bold">Wins: &nbsp; </p> <p> ${item.seller["wins"].length}</p></div>                            
         </div>
     </div>
          
    <!-- Button TABS -->
    <ul class="nav nav-tabs nav-justified flex flex-col mb-10 md:flex-row flex-wrap list-none border-b-0 pl-0 border" id="tabs-tabJustify" role="tablist">
        <li class="nav-item flex-grow text-center" role="presentation">
            <a href="#tabs-homeJustify" class="font-bold nav-link w-full block text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-purple-800 hover:bg-gray-100 focus:border-transparent active" id="tabs-home-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-homeJustify" role="tab" aria-controls="tabs-homeJustify" aria-selected="true">
                Home
            </a>
        </li>
        <li class="nav-item flex-grow text-center" role="presentation">
            <a href="#tabs-bidsJustify" class="font-bold nav-link w-full block text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-purple-800 hover:bg-gray-100 focus:border-transparent" id="tabs-bids-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-bidsJustify" role="tab" aria-controls="tabs-bidsJustify" aria-selected="false">
                Bids: <span>${item["_count"].bids}</span>   
            </a>            
        </li>
        <li class="nav-item flex-grow text-center" role="presentation">
            <a href="#tabs-winsJustify" class="font-bold nav-link w-full block text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-purple-800 hover:bg-gray-100 focus:border-transparent" id="tabs-wins-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-winsJustify" role="tab" aria-controls="tabs-winsJustify" aria-selected="false">
                Wins: <span>${item.seller["wins"].length}</span> 
            </a>
            
        </li>
    </ul>
    
    
    <div class="tab-content h-72 max-h-80 mx-2 lg:-mx-4" id="tabs-tabContentJustify">
        <!-- TAB 1: Content -->
        <div class="tab-pane fade show active" id="tabs-homeJustify" role="tabpanel" aria-labelledby="tabs-home-tabJustify">
                             
            <!-- Heading Title -->
            <h1 class="text-2xl font-bold">${item.title}</h1> 
           
            <!-- Description -->
            <div class="flex flex-col mb-4"> <p class="font-bold">Description: &nbsp;</p> <p> ${item.description}</p> </div>
            <!-- Tags -->
            <div class="flex flex-col my-8"> <p class="font-bold">Tags: &nbsp;</p> <p class="font-mono"> ${item.tags}</p> </div>
            
            
            <div class="flex flex-wrap">
                <!-- EndsAt -->
                <div class="flex flex-col mb-4 text-sm"> <p class="font-bold">Deadline: &nbsp;</p> <p> ${item.endsAt}</p> </div>
                <!-- Created -->
                <div class="flex flex-col mb-4 text-sm"> <p class="font-bold">Listing created: &nbsp;</p> <p> ${item.created}</p> </div>
                <!-- Edited -->
                <div class="flex flex-col mb-4 text-sm"> <p class="font-bold">Last edited: &nbsp;</p> <p> ${item.updated}</p> </div>
            </div>
        </div>
        
        <!-- TAB 2: Content -->
        <div class="tab-pane fade mb-24" id="tabs-bidsJustify" role="tabpanel" aria-labelledby="tabs-bids-tabJustify">                                          
            <!-- Heading -->
            <h2 class="font-bold text-xl text-center my-8">Bids information</h2>            
                    
            <!-- Buttons Container -->
            <div class="container relative flex flex-nowrap justify-center lg:justify-between pb-8 mb-8">
                <!-- Card View Details Button -->
                    <a href="../index.html" class="flex-shrink self-center text-purple-800 text-sm hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-center mr-2 mb-2 rounded-full text-sm px-2 py-2 text-center mb-2 transition">
                        Back to all listings
                    </a>
                <!-- Place Bid Button -->
                <button id="cardPlaceBidButton" onclick="setupCounter(bids + 1)" type="button" class="w-2/4 text-white text-sm bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-2 py-2 text-center mb-2 transition">
                    Place Bid
                </button>
            </div> 
            
            <!-- Bids Content from forEach -->                                  
            <div class="bids-container flex flex-col mx-3"></div>
        </div> 
          
        <!-- TAB 3: Content -->        
        <div class="tab-pane fade" id="tabs-winsJustify" role="tabpanel" aria-labelledby="tabs-wins-tabJustify">
          
            <!-- Heading -->
            <h2 class="font-bold text-xl">Wins</h2>
            <p>${item.wins}</p> 
          
        </div>
    
                       
  </div>
</div>
`;

    console.log(item.media);

    mediaCarouselFunction(item.media, item.title, item.bids);

}


/* @formatter:on */

function mediaCarouselFunction(media, title, bids) {
    // console.log(media.length);
    console.log(bids);
    let carouselWrapper = document.querySelector('.carousel-inner');

    for (let i = 0; i < media.length; i++) {
        let imageWrapper = document.createElement("div");
        imageWrapper.classList.add('carousel-item', 'relative', 'float-left', 'w-full');

        if (i === 0) {
            imageWrapper.classList.add("active");
        }

        imageWrapper.innerHTML = `<img src="${media[i]}" class="block w-full h-60 max-h-64 object-cover shadow-xl" alt="${title}">`;

        carouselWrapper.appendChild(imageWrapper);
        console.log(imageWrapper);
    }


    let bidsWrapper = document.querySelector('.bids-container');
    bids.forEach((bid) => {
        console.log(bid);
         bidsWrapper.innerHTML += `
         <div class="flex flex-nowrap my-8">
             <div class="flex flex-col">
                <p>Amount: &nbsp; ${bid.amount}</p>
                <p>Bidder: &nbsp; ${bid.bidderName}</p>
                <p>Created: &nbsp; ${bid.created}</p>
            </div>
         </div>          
         `;

       // console.log(bids.filter(bid))
    })

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









