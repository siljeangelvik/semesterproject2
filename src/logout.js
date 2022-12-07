// logout button function
let userLogout = document.getElementById("logoutButton");
userLogout.addEventListener('click', async () => {
    if (localStorage.getItem("accessToken")) {
        console.log("You're logged in");
        window.alert("Are you sure you want to logout?");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("credits");

        // window.location.reload();
        window.location = '../index.html';

    } else {
        console.log("TEST");
        window.location = '../login/index.html';
    }
})

let topLogoutButton = document.getElementById("topLogoutButton");
topLogoutButton.addEventListener('click', async () => {
    if (localStorage.getItem("accessToken")) {
        console.log("You're logged in");
        window.alert("Are you sure you want to logout?");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("credits");

        // window.location.reload();
        window.location = '../index.html';

    } else {
        console.log("TEST");
        window.location = '../login/index.html';
    }
})

/*
// if localStorage has no accessToken, open create listing modal
document.getElementById("modalButton").addEventListener('click', async () => {
    if (localStorage.getItem("accessToken") === null) {
        window.location = '../login/index.html';
    }
});

// if localStorage has no accessToken, go to login page
document.getElementById("profilePageButton").addEventListener('click', async () => {
    if (!localStorage.getItem("accessToken")) {
        window.location = '../login/index.html';
    } else { window.location.href = './profile/index.html';}
});



*/
