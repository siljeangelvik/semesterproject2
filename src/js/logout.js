/**
 * @description function for logging user out
 */

export function userLogout() {
    document.getElementById("logoutButton").addEventListener('click', () => {
        if (localStorage.getItem("accessToken")) {
            console.log("You're logged in");

            localStorage.removeItem("accessToken");
            localStorage.removeItem("name");
            localStorage.removeItem("email");
            localStorage.removeItem("credits");
            localStorage.removeItem("avatar");

            window.location.href = '/';
        }
    });
}

userLogout();

