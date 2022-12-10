// if user is not logged in, welcome message display none
[...document.querySelectorAll('.welcomeUserContainer')].forEach(function (item) {
    console.log(item.innerHTML);
    if (!localStorage.getItem("accessToken")) {
        item.style.display = "none";
    }
    // if user is logged in, display welcome message
    [...document.querySelectorAll('.welcomeUser')].forEach(function (item) {
        document.getElementById("welcomeUser").innerHTML = localStorage.getItem('name');
        console.log(`ITEMS: ${item.innerHTML}\n\nITEMS ID: ${item.id}`);
    })
});