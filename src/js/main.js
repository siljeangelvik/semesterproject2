/* formatter:off */
import '../css/input.css';
import '../css/styles.scss';
import '../ganttchart/ganttchart.css';

/* formatter:off */
document.getElementById("desktop-nav").innerHTML = `
<div class="fixed top-0 inset-x-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 flex justify-between text-sm text-gray-700">
     <div class="container mx-auto px-6">
        <div class="w-full flex justify-between items-center">
            <!-- Brand -->
            <div class="text-white text-center font-bold"><a href="/public">Asta</a></div>
            <!-- Navigation -->
            <div class="items-center invisible md:visible">
                <a href="/public" class="text-white hover:text-white no-underline mx-2 px-2">Listings</a>
                <span class="loginHidden inline-block md:py-4">
                    <a href="../login/index.html" id="loginPageButton" class="text-white hover:text-white no-underline mx-2 px-2 ">Sign In</a>
                    <a href="../register/index.html" id="registerPageButton" class="text-white hover:text-white no-underline mx-2 px-2 ">Sign Up</a>
                </span>
                <span class="logoutHidden inline-block md:py-4">
                    <a href="../profile/index.html" class="profilePageButton text-white hover:text-white no-underline mx-2 px-2 ">Account</a>
                    <a href="/public" id="logoutButtonTop" type="button" class="logoutButton logoutHidden text-white hover:text-white no-underline mx-2 px-2">Logout</a>
               </span>
            </div>
        </div>
     </div>
  </div>
`;
document.getElementById("mobile-nav").innerHTML = `
<nav class="fixed bottom-0 inset-x-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 flex justify-between text-sm text-gray-700 uppercase font-mono visible lg:invisible">
  <a href="/public"
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
    <button id="modalOpenButton" data-bs-toggle="modal" data-bs-target="modal"
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

