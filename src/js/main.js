/* @formatter:off */
import '../css/input.css';
import '../css/styles.scss';
import '../ganttchart/ganttchart.css';
import 'tw-elements';

// desktop nav inner html
document.getElementById("desktop-nav").innerHTML = `
<div class="fixed z-40 top-0 inset-x-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 flex justify-between text-sm text-gray-700">
     <div class="container mx-auto px-6">
        <div class="w-full h-12 flex justify-between items-center">
            <!-- Brand -->
            <div class="items-center text-white text-center font-bold"><a href="/">Asta</a></div>
            <!-- Navigation -->
            <div class="items-center invisible md:visible">
                <a href="/" class="text-white hover:text-white no-underline mx-2 px-2">Listings</a>
                <span class="loginHidden inline-block md:py-4">
                    <a href="../login/index.html" id="loginPageButton" class="loginHidden text-white hover:text-white no-underline mx-2 px-2 ">Sign In</a>
                    <a href="../register/index.html" id="registerPageButton" class="loginHidden text-white hover:text-white no-underline mx-2 px-2 ">Sign Up</a>
                </span>
                <span class="logoutHidden inline-block md:py-4">
                    <a href="../profile/index.html" class="logoutHidden profilePageButton text-white hover:text-white no-underline mx-2 px-2 ">Account</a>
                    <button type="button" class="logoutButton text-white hover:text-white no-underline mx-2 px-2 font-bold">Logout</button>
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
            class="searchFocusButton w-full block py-5 px-3 text-center">
     <span class="material-symbols-outlined text-white">
      search
    </span>
    </button>
    <button id="modal-button" onclick="document.getElementById('modal').classList.remove('hidden')" data-bs-toggle="modal" data-bs-target="modal"
            class="w-full block py-5 px-3 text-center">
    <span class="material-symbols-outlined text-white">
      add_circle
    </span>
    </button>
    <a href="../profile/index.html" class="profilePageButton w-full block py-5 px-3 text-center transition duration-150 ease-in-out">
      <span class="material-symbols-outlined text-white">
      person
    </span>
    </a>
    <button id="logoutButton" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
            class="loggedIn logoutButton w-full block py-5 px-3 text-center transition duration-150 ease-in-out">
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



// navigate to listings page and focus search field
document.getElementById("focusButton").addEventListener("click", () => {
    window.location.href = "/index.html";
    setTimeout(() => {
        const inputField = document.getElementById("myTextField");
        inputField.focus();
    }, 1000);
});

// welcome user in heading when logged in
[...document.querySelectorAll('.welcomeUser')].forEach(function (welcome) {
    if (localStorage.getItem("accessToken")) {
        welcome.innerHTML = localStorage.getItem("name");
    }
});


/* @formatter:off */
export const className = "profilePageButton";
export const profilePageButtonElement = document.querySelectorAll(`.${className}`);

// forEach() method to add an event listener to each element
profilePageButtonElement.forEach(element => {
    element.addEventListener("click", (event) => {
        // if the user is logged in
        if (!localStorage.getItem("accessToken")) {
            // if the user is not logged in, prevent the default anchor link behavior and redirect to the login page
            event.preventDefault();

            window.location.href = "../login/index.html";

        } else {
            // if the user is logged in, allow the default anchor link behavior to occur
            return true;
        }
    });
});
