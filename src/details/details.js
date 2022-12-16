import {API_LISTINGS_URL} from "../main";

const postDetailsContainer = document.querySelector('#cardContainer');
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const listingId = params.get("id");
export const API_LISTING_URL = `${API_LISTINGS_URL}/${listingId}?_seller=true&_bids=true`;
export const API_PLACE_BID_URL = `${API_LISTINGS_URL}/${listingId}/bids`;
console.log(JSON.stringify(API_PLACE_BID_URL));

fetch(API_LISTING_URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
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
    console.log(item.bids.amount)

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
            <div class="container flex justify-center items-center pb-8 mb-8">  
                <!-- Place Bid Button -->
                <button id="cardPlaceBidButton" onclick="document.getElementById('place-bid-modal').classList.remove('hidden')" type="button" class="cardPlaceBidButton w-2/4 text-white text-sm bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-2 py-2 text-center mb-2 transition">
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

    // "Place Bid Button" opens the "Place Bid Modal"
    document.querySelector('.cardPlaceBidButton').addEventListener('click', () => {
        document.querySelector('#place-bid-modal').innerHTML = `
    <div class="fixed z-10 overflow-auto top-0 w-full left-0">
        <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity">
                <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
                <span class="absolute sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <form id="formTest"
                      class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                      aria-labelledby="modal-headline">
                    <div class=" bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 py-4 px-8 text-white text-xl border-b border-grey-lighter">
                        Place a bid on: <span class="font-bold">${item.title}</span>
                    </div>
                  
                  <!-- Place Bid Modal Content -->
                    <div class="bg-white px-2 pt-5 pb-2 sm:p-6 sm:pb-4">                                                  
                        <div class="mb-4">
                            <label class="block text-grey-darker text-sm font-bold mb-2" for="amount">
                                Choose the amount you want to bid:
                            </label>
                            <input id="amount" class="${item.bids.amount} appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                               type="number" placeholder="42" required>
                        <div>
                    </div>

                    <!-- Cancel & Place Bid Container -->
                    <div class="px-4 py-3 text-right">
                        <button type="button" 
                                onclick="document.getElementById('place-bid-modal').classList.add('hidden')"
                                class="py-2 px-4 text-purple-800 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 text-white rounded-full mr-2">
                            <i class="fas fa-times"></i> Cancel
                        </button>
                        <button id="inModalPlaceBidButton"
                                type="submit"  
                                
                                class="inModalPlaceBidButton py-2 px-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white rounded-full hover:bg-emerald-500 mr-2">
                            <i class="fas fa-plus"></i> Place bid
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
`;

        eventAdder();
    });

    mediaCarouselFunction(item.media, item.title, item.bids, item.bids.amount);
}



function eventAdder() {
    const buttonSendBid = document.querySelector('#formTest');
    buttonSendBid.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(e);
        placeBidFunction(e);
    });
}

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
    })


}


function placeBidFunction(event) {
    let userBid = event.target.elements.amount.value
    console.log(userBid);

    userBid = parseInt(userBid);
    let amountObj = {
        "amount": userBid
    }
    console.log(amountObj);

    if (!userBid) {
        console.log("You need to enter a valid amount.");
    }

    if (userBid) {
        console.log("Amount has been set");
        console.log(API_PLACE_BID_URL);
        API_PLACE_BID(API_PLACE_BID_URL, amountObj);
    }

}


async function API_PLACE_BID(API_PLACE_BID_URL, amount) {
    console.log(amount);
    try {
        const options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "content-Type": "application/json",
            },
            body: JSON.stringify(amount),
        };

        const response = await fetch(API_PLACE_BID_URL, options);
        // console.log(`response = ${response}`);
        const json = await response.json();
        // console.log(json);
        if (!response.ok) {
            console.log(json.errors[0].message);
            throw new Error();
        }
        console.log("OK");
        console.log(response.status);

        localStorage.setItem("credits", json.credits);

        document.querySelector('.place-bid-modal').classList.add('hidden');
        setTimeout(() => {
            window.location.reload();
        }, 1500);


    } catch (error) {
        console.log(error);
    }
}


