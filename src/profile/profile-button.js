/* formatter:off */
const className = "profilePageButton";
const profilePageButtonElement = document.querySelectorAll(`.${className}`);

// forEach() method to add an event listener to each element
profilePageButtonElement.forEach(element => {
    element.addEventListener("click", (event) => {
        // if the user is logged in
        if (!localStorage.getItem("accessToken")) {
            // if the user is not logged in, prevent the default anchor link behavior and redirect to the login page
            event.preventDefault();
            window.location.href = "../login/index.html";
        } else {
            // if the user is logged in, allow the default anchor link behavior to occur
            return true;
        }
    });
});