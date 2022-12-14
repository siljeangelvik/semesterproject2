/* @formatter:off */

function userLogout() {
    // logout modal content
    document.getElementById("logout-modal").innerHTML = `
    <div class="fixed z-10 overflow-auto top-0 w-full left-0">
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
                        <button id="modalLogoutButton" type="button"
                                class="py-2 px-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white rounded-full hover:bg-emerald-500 mr-2">
                            <i class="fas fa-plus"></i> Logout
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
`;

    // logout remove localStorage items
    document.getElementById("modalLogoutButton").addEventListener('click', () => {
        if (localStorage.getItem("accessToken")) {
            console.log("You're logged in");

            //  window.alert("Are you sure you want to log out?"); // need to make a modal popup
            localStorage.removeItem("accessToken");
            localStorage.removeItem("name");
            localStorage.removeItem("email");
            localStorage.removeItem("credits");
            localStorage.removeItem("avatar");

            // window.location.reload();
            window.location.href = '/';
        }
    });

    // cancel hide modal
    [...document.querySelectorAll('.logoutButton')].forEach(function (logout) {
        logout.addEventListener('click', function () {
            console.log("Button Clicked");
            document.getElementById("logout-modal").classList.remove("hidden");
        })
    });
}

userLogout();


// hide elements when logged in
[...document.querySelectorAll('.loginHidden')].forEach(function (item) {
    if (localStorage.getItem("accessToken")) {
        item.classList.add("hidden");
    }
});

// hide elements when logged out
[...document.querySelectorAll('.logoutHidden')].forEach(function (item) {
    if (!localStorage.getItem("accessToken")) {
        item.classList.add("hidden");
    }
});
