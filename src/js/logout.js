/* formatter:off */
document.getElementById("logout-modal").innerHTML =
    `<div class="modal fade fixed top-20 h-full w-screen outline-none overflow-x-hidden overflow-y-auto"
          id="logoutModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog relative w-auto pointer-events-none">
            <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Log out</h5>
                    <button type="button" class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="modal" aria-label="Close">Close</button>
                </div>
                <div class="modal-body relative p-4">
                    Are you sure you want to log out?
                </div>
                <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                    <button type="button"
                            onclick="document.getElementById('logout-modal').classList.add('hidden')" 
                            class="flex-shrink text-purple-800 text-sm hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-center mr-2 mb-2 rounded-full text-sm px-2 py-2 text-center mb-2 transition">
                              Cancel
                    </button>              
                    <button id="logout" 
                            type="button"
                            class="logout text-white text-sm bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-2 py-2 text-center mb-2 transition">
                             Log out
                    </button>              
                </div>
            </div>
        </div>
    </div>`;

document.getElementById("logout").addEventListener('click', () => {
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


[...document.querySelectorAll('.logoutButton')].forEach(function (logout) {
   logout.addEventListener('click', function () {
       console.log("Button Clicked");
       document.getElementById("logout-modal").classList.remove("hidden");
   })
});


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

