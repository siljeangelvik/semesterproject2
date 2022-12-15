/* @formatter:off */
export function userLogout() {
    // logout remove localStorage items
    document.getElementById("logoutButton").addEventListener('click', () => {
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
}

userLogout();
