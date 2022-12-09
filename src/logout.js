// logout function to multiple elements
[...document.querySelectorAll('.logoutButton')].forEach(function (item) {
    item.addEventListener('click', function () {
        console.log(item.innerHTML);
        if (localStorage.getItem("accessToken")) {
            console.log("You're logged in");
            window.alert("Are you sure you want to logout?");
            localStorage.removeItem("accessToken");
            localStorage.removeItem("name");
            localStorage.removeItem("email");
            localStorage.removeItem("credits");
            localStorage.removeItem("avatar");

            // window.location.reload();
            window.location.href = '/index.html';
        }
        console.log("TEST");
        window.location.href = '../login/index.html';
    });
});

// hide elements when logged out
[...document.querySelectorAll('.logoutHidden')].forEach(function (item) {
    console.log(item.innerHTML);
    if (!localStorage.getItem("accessToken")) {
        document.querySelectorAll('.logoutHidden').style.display = 'none';
    }
});


// logout button function
/*
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
*/

/*

// if localStorage has no accessToken, open create listing modal
document.getElementById("modalButton").addEventListener('click', async () => {
    if (localStorage.getItem("accessToken") === null) {
        window.location = '../login/index.html';
    }
});
 */

/*
// if localStorage has no accessToken, go to login page
document.getElementById("profilePageButton").addEventListener('click', async () => {
    if (!localStorage.getItem("accessToken")) {
        window.location = '../login/index.html';
    } else { window.location.href = './profile/index.html';}
});

 */