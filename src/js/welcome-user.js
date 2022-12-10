// if user is not logged in, welcome message display none
[...document.querySelectorAll('.welcomeUserContainer')].forEach(function (container) {
    console.log(container.innerHTML);
    if (!localStorage.getItem("accessToken")) {
        container.classList.add("hidden");
    }
});

// if user is logged in, display welcome message
[...document.querySelectorAll('.welcomeUser')].forEach(function (item) {
    item.innerHTML = localStorage.getItem('name');
    console.log(`ITEMS: ${item.innerHTML}\n\nITEMS ID: ${item.id}`);
})