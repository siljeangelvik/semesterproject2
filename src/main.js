// --- BASE --- //
export const API_BASE_URL = 'https://api.noroff.dev';
export { setupCounter } from "./counter";
/*
export const navTop = document.getElementById("navTop");
export const navBottom = document.getElementById("navBottom");
export const footer = document.getElementById("footer");
*/

// IMPORT
import './input.css';
import './ganttchart/ganttchart.css';

// LISTINGS
export const listUrl = `${API_BASE_URL}/api/v1/auction/listings`;
export const listData = document.getElementById("listData");


//export const loginMessage = document.getElementById("loginMessage");
export const listingsTitle = document.getElementById("listingsTitle");
export const listingsMedia = document.getElementById("listingsMedia");
export const listingsDescription = document.getElementById("listingsDescription");
export const listingsTags = document.getElementById("listingsTags");
export const listingsBids = document.getElementById("listingsBids");
export const listingsBidButton = document.getElementById("listingBidButton");

// REGISTER & LOGIN //
export const returnMessage = document.querySelector('.error');

// REGISTER
export const registerUrl = `${API_BASE_URL}/api/v1/auction/auth/register`;
export const registerUsername = document.getElementById("username");
export const registerEmail = document.getElementById("email");
export const registerPassword = document.getElementById("password");
export const registerButton = document.getElementById("registerButton");

// LOGIN
export const loginUrl = `${API_BASE_URL}/api/v1/auction/auth/login`;
export const loginEmail = document.getElementById("email");
export const loginPassword = document.getElementById("password");
export const loginButton = document.getElementById("loginButton");


//

/* @formatter:off */
/*
document.querySelector("#topNav").innerHTML = `
 <!-- Top Nav -->
    <div class="w-full shadow z-1 bg-blue-400">
    <div class="container mx-auto">
            <div class="w-full flex justify-between items-center py-4 px-8">
                <!-- Brand -->
                <div class="text-center font-bold lg:w-full"><a href="./index.html">Asta Vendita</a></div>
                <!-- Navigation -->
                <div class="items-center invisible md:visible">
                    <a href="./index.html" class="text-gray-700 hover:text-black no-underline mx-2 px-2 py-2">Listings</a>
                    <a href="login/index.html" class="text-gray-700 hover:text-black no-underline mx-2 px-2 py-2">Sign In</a>
                    <a href="register/index.html" class="text-gray-700 hover:text-black no-underline mx-2 px-2 py-2">Sign Up</a>
                    <!-- <a href="../profile/index.html" class="text-gray-700 hover:text-black no-underline mx-2 px-2 py-2">Account</a> -->
                    <a href="ganttchart/index.html" class="text-gray-700 hover:text-black no-underline mx-2 px-2 py-2">Gantt Chart</a>
                </div>
            </div>
        </div>
    </div>
  `;

document.querySelector("#bottomNav").innerHTML = `
 <nav class="fixed bottom-0 inset-x-0 bg-blue-400 flex justify-between text-sm text-gray-700 uppercase font-mono visible lg:invisible">
    <a href="index.html" class="w-full block py-5 px-3 text-center hover:bg-blue-500 hover:text-black transition duration-300">
    <span class="material-symbols-outlined">
      home
    </span>
  </a>

  <button id="focusButton" class="w-full block py-5 px-3 text-center hover:bg-blue-500 hover:text-black transition duration-300">
        <span class="material-symbols-outlined">
      search
    </span>
  </button>

  <button id="addListingButton" class="w-full block py-5 px-3 text-center hover:bg-blue-500 hover:text-black">
    <span class="material-symbols-outlined">
      add_circle
    </span>
 </button>

  <a href="#" id="userProfileLink" class="w-full block py-5 px-3 text-center hover:bg-blue-500 hover:text-black">
    <span class="material-symbols-outlined">
      person
    </span>
  </a>

  <button id="logoutButton" class="w-full block py-5 px-3 text-center hover:bg-blue-500 hover:text-black">
    <span class="material-symbols-outlined">
      logout
    </span>
  </button>
</nav>
`;

document.querySelector("#footer").innerHTML = `
    <footer class="w-full bg-grey-lighter py-8">
  <div class="container mx-auto text-center px-8">
    <p class="text-grey-dark mb-2 text-sm">This is a product of <span class="font-bold">Angelvik</span></p>
  </div>
</footer>`;
*/