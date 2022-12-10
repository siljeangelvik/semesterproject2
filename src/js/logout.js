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
    if (!localStorage.getItem("accessToken")) {
        item.style.display = "hidden";
    }
});

