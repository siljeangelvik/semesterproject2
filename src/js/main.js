/* @formatter:off */
import '../css/input.css';
import '../css/styles.scss';
import '../css/gantt.css';
import 'tw-elements';

// desktop nav inner html
document.getElementById("desktop-nav").innerHTML = `
<div class="fixed z-40 top-0 inset-x-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 flex justify-between text-sm text-gray-700">
        <div class="inline-block py-4">
            <!-- Brand -->
            <a href="/" class="text-white no-underline mx-2 px-2">
                    Asta
            </a>
        </div>
            
            <!-- Navigation -->
        <div class="items-center invisible md:visible">
            <a href="/" class="text-white no-underline mx-2 px-2">
                Listings
            </a>
            
            <span class="userLoggedOut hidden inline-block md:py-4">
                <a href="../login/index.html" id="loginPageButton" class="text-white no-underline mx-2 px-2 ">Sign In</a>
                <a href="../register/index.html" id="registerPageButton" class="text-white no-underline mx-2 px-2 ">Sign Up</a>
            </span>
            
            <span class="userLoggedIn hidden inline-block md:py-4">
                <button id="openCreateModal"
                            onclick="document.querySelector('.create-modal').classList.remove('hidden')"
                            type="button" 
                            class="openCreateModal text-white no-underline mx-2 px-2 font-bold">
                            Add listing
                </button>
                <a href="../profile/index.html" class="profilePageButton text-white no-underline mx-2 px-2 ">
                    Account
                </a>
                <button id="openLogoutModal"
                        onclick="document.querySelector('.logout-modal').classList.remove('hidden')"
                        type="button" 
                        class="openLogoutModal text-white no-underline mx-2 px-2 font-bold">
                        Logout
                </button>
            </span>
        </div>
    </div>
     </div>
  </div>
`;

// mobile nav inner html
document.getElementById("mobile-nav").innerHTML = `
<nav class="fixed bottom-0 inset-x-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 flex justify-between text-sm text-gray-700 uppercase font-mono visible lg:invisible">
    <a href="/"
       class="w-full block py-5 px-3 text-center transition duration-300">
    <span class="material-symbols-outlined text-white">
      home
    </span>
    </a>
    <button id="focusButton"
            class="focusButton w-full block py-5 px-3 text-center">
     <span class="material-symbols-outlined text-white">
      search
    </span>
    </button>
    <button id="openCreateModal" onclick="document.getElementById('create-modal').classList.remove('hidden')"
            data-bs-toggle="create-modal" data-bs-target="create-modal"
            class="openCreateModal w-full block py-5 px-3 text-center">
    <span class="material-symbols-outlined text-white">
      add_circle
    </span>
    </button>
    <a href="../profile/index.html" class="profilePageButton w-full block py-5 px-3 text-center transition duration-150 ease-in-out">
      <span class="material-symbols-outlined text-white">
      person
    </span>
    </a>
    <button id="openLogoutModal" 
            data-bs-toggle="logout-modal" data-bs-target="logout-modal"
            class="openLogoutModal w-full block py-5 px-3 text-center transition duration-150 ease-in-out">
    <span class="material-symbols-outlined text-white">
      logout
    </span>
    </button>
</nav>
`;

// footer inner html
document.getElementById("footer").innerHTML = `
<footer class="invisible lg:visible w-full bg-grey-lighter py-8">
    <div class="container mx-auto text-center px-8">
        <p class="text-grey-dark mb-2 text-sm">This is a product of <span
                class="font-bold">Angelvik</span></p>
    </div>
</footer>
`;

// modal create listing
document.getElementById("create-modal").innerHTML = `
    <div class="fixed z-10 overflow-auto top-0 w-full left-0">
        <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity">
                <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
                <span class="absolute sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <form id="formCreateListing"
                      class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                      aria-labelledby="modal-headline">

                    <!-- Modal Heading -->
                    <div class=" bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 py-4 px-8 text-white text-xl border-b border-grey-lighter">
                        Create a
                        listing
                    </div>

                    <!-- Modal Content -->
                    <div class="bg-white px-2 pt-5 pb-2 sm:p-6 sm:pb-4">
                        <!-- Container Title & endsAt -->
                        <div class="mb-4 flex justify-between gap-2">
                            <div class="mb-4 w-full">
                                <label class="block text-grey-darker text-sm font-bold mb-2"
                                       for="createTitle">Title</label>
                                <input id="createTitle" type="text" placeholder="Title" required
                                       class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"/>
                            </div>
                                
                            <div class="mb-4">
                                <label class="block text-grey-darker text-sm font-bold mb-2"
                                       for="createEndsAt">Time</label>
                                <input id="createEndsAt" type="datetime-local" min="00.00" max="23.59" required
                                       class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                       placeholder="time"/> 
                            </div>
                        </div>
                        
                        <!-- Create Media -->
                        <div class="mb-4">
                            <label class="block text-grey-darker text-sm font-bold mb-2"
                                   for="createMedia">Media</label>
                            <input id="createMedia" type="url" alt=""
                                   placeholder="https://example.com/photo_something.jpg"
                                   size="30"
                                   class="profile-pic-input appearance-none border rounded w-full py-2 px-3 text-grey-darker"/>
                        </div>
                        
                        <!-- Create Description -->
                        <div class="mb-4">
                            <label class="block text-grey-darker text-sm font-bold mb-2"
                                   for="createDescription">Description</label>
                            <textarea id="createDescription" type="text"
                                   class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                   placeholder="Description"></textarea>
                        </div>
                        
                        <!-- Create Tags -->
                        <div class="mb-4">
                            <label class="block text-grey-darker text-sm font-bold mb-2"
                                   for="createTags">Tags</label>
                            <input id="createTags" type="text" autocomplete="off"
                                   class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                   placeholder="Tags"/>
                        </div>

                        <p class="error text-red-600"></p>
                    </div>
                    <div class="bg-gray-200 px-4 py-3 text-right">
                        <button id="modalCloseButton" type="button" onclick="document.getElementById('modal').classList.add('hidden')"
                                class="py-2 px-4 text-purple-800 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 text-white rounded-full mr-2">
                            <i class="fas fa-times"></i> Cancel
                        </button>
                        <button id="modalCreateButton" type="submit"
                                class="modalCreateButton py-2 px-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white rounded-full hover:bg-emerald-500 mr-2">
                            <i class="fas fa-plus"></i> Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
`;

// modal logout content
document.getElementById("logout-modal").innerHTML = ` 
 <div class="fixed z-10 overflow-auto top-15 w-full left-0">
        <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity">
                <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
                <span class="absolute sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <form id="form"
                      class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                      aria-labelledby="modal-headline">
                    <div class=" bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 py-4 px-8 text-white text-xl border-b border-grey-lighter">
                        Log out
                    </div>
                    <div class="bg-white px-2 pt-5 pb-2 sm:p-6 sm:pb-4">                                         
                        <div class="mb-4">
                            <p>Are you sure you want to log out?</p>                        
                        </div>
                    </div>
                    
                    <div class="bg-gray-200 px-4 py-3 text-right">
                        <button id="modalCloseButton" type="button" onclick="document.getElementById('logout-modal').classList.add('hidden')"
                                class="py-2 px-4 text-purple-800 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 text-white rounded-full mr-2">
                            <i class="fas fa-times"></i> Cancel
                        </button>
                        <button id="logoutButton" type="button"
                                class="py-2 px-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white rounded-full hover:bg-emerald-500 mr-2">
                            <i class="fas fa-plus"></i> Logout
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
`;


// Export element with class "modalCreateButton"
export const addListingButton = document.querySelector(".modalCreateButton");

// Elements with class "openCreateModal" will not be displayed if user is not logged in
export const modalCreateListingButton = "openCreateModal";
export const modalCreateButton = document.querySelectorAll(`.${modalCreateListingButton}`);
modalCreateButton.forEach(modalCreateListing => {
    modalCreateListing.addEventListener("click", (event) => {
        // console.log("Opened modal for creating a listing");
        if (!localStorage.getItem("accessToken")) {
            event.preventDefault();
            window.alert("You need to be logged in to add a listing.");
            window.location.href = "../login/index.html";
        }
    });
});

// Element with class "openLogoutModal" will be displayed if user is logged in
export const openLogoutModal = "openLogoutModal";
export const openModalLogout = document.querySelectorAll(`.${openLogoutModal}`);
openModalLogout.forEach(modalLogout => {
    modalLogout.addEventListener("click", (event) => {
        console.log("Opened modal for logging out");

        if (localStorage.getItem("accessToken")) {
            event.preventDefault();
            document.getElementById('logout-modal').classList.remove('hidden');
        } else if (!localStorage.getItem("accessToken")) {
            // if the user is logged in
            window.location.href = '../login/index.html';
        }
    });
});

// Element with class "openCreateModal" will not be displayed for logged-out users
export const returnMessage = document.querySelector('.error');

// Element with ID "modalCloseButton" will hide modal
document.querySelector('#modalCloseButton').addEventListener('click', () => {
    document.querySelector('.create-modal').classList.add('hidden');
});

// Element with ID "focusButton" will redirect users to listings page and focus search-input-field
document.getElementById('focusButton').addEventListener("click", () => {
    window.location.href = "/";
    setTimeout(() => {
        const inputField = document.querySelector('.searchField');
        inputField.focus();
    }, 1000);
});

// Elements with class "welcomeUser" will be displayed for logged-in users
[...document.querySelectorAll('.welcomeUser')].forEach(function (welcome) {
    if (localStorage.getItem("accessToken")) {
        welcome.innerHTML = localStorage.getItem("name");
    }
});

// Elements with class "profilePageButton" will redirect users to login page, if user is not logged in
export const profilePageButton = "profilePageButton";
export const goToProfilePageButton = document.querySelectorAll(`.${profilePageButton}`);
goToProfilePageButton.forEach(profileButton => {
    profileButton.addEventListener("click", (event) => {
        // if the user is logged in
        console.log("Opened alert for trying to access profile-page, when not logged in");

        if (!localStorage.getItem("accessToken")) {
            // if the user is not logged in, prevent the default anchor link behavior and redirect to the login page
            event.preventDefault();
            window.alert("You need to be logged in to view your profile.");
            window.location.href = "../login/index.html";
        }
    });
});

// Elements with class "userLoggedOut" will be displayed for logged-out users
export const userLoggedOut = "userLoggedOut";
export const userLoggedOutDisplay = document.querySelectorAll(`.${userLoggedOut}`);
userLoggedOutDisplay.forEach(logoutElement => {
    // if user logged in
    if (!localStorage.getItem("accessToken")) {
        // elements will display for users
        logoutElement.style.display = 'inline-block';
    }
});

// Element with class "userLoggedIn" will be displayed for logged-in users
export const userLoggedIn = "userLoggedIn";
export const userLoggedInDisplay = document.querySelectorAll(`.${userLoggedIn}`);
userLoggedInDisplay.forEach(loginElement => {
    // if user logged in
    if (localStorage.getItem("accessToken")) {
        // elements will display for users
        loginElement.style.display = 'inline-block';
    }
});