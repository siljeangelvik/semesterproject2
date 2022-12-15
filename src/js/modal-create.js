// modal form listing inner html

/* @formatter:off */
/*
document.getElementById("modal").innerHTML = `
    <div class="fixed z-10 overflow-auto top-0 w-full left-0">
        <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity">
                <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
                <span class="absolute sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <form id="formCreateListing"
                      class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                      aria-labelledby="modal-headline">

                    <!-- Modal Heading -->
                    <div class=" bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 py-4 px-8 text-white text-xl border-b border-grey-lighter">
                        Create a
                        listing
                    </div>

                    <!-- Modal Content -->
                    <div class="bg-white px-2 pt-5 pb-2 sm:p-6 sm:pb-4">
                        <!-- Container Title & endsAt -->
                        <div class="mb-4 flex justify-between gap-2">
                            <div class="mb-4 w-full">
                                <label class="block text-grey-darker text-sm font-bold mb-2"
                                       for="createTitle">Title</label>
                                <input id="createTitle" type="text" placeholder="Title" required
                                       class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"/>
                                <p class="error text-red-600"></p>
                            </div>
                                
                            <div class="mb-4">
                                <label class="block text-grey-darker text-sm font-bold mb-2"
                                       for="createEndsAt">Time</label>
                                <input id="createEndsAt" type="datetime-local" min="00.00" max="23.59" required
                                       class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                       placeholder="time"/> 
                            </div>
                        </div>
                        
                        <!-- Create Media -->
                        <div class="mb-4">
                            <label class="block text-grey-darker text-sm font-bold mb-2"
                                   for="createMedia">Media</label>
                            <input id="createMedia" type="url" alt=""
                                   placeholder="https://example.com/photo_something.jpg"
                                   pattern="/([a-z\\-_0-9\\/\\:\\.]*\\.(jpg|jpeg|png|gif))/i" size="30"
                                   class="profile-pic-input appearance-none border rounded w-full py-2 px-3 text-grey-darker"/>
                        </div>
                        
                        <!-- Create Description -->
                        <div class="mb-4">
                            <label class="block text-grey-darker text-sm font-bold mb-2"
                                   for="createDescription">Description</label>
                            <input id="createDescription" type="text"
                                   class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                   placeholder="Description"/>
                        </div>
                        
                        <!-- Create Tags -->
                        <div class="mb-4">
                            <label class="block text-grey-darker text-sm font-bold mb-2"
                                   for="createTags">Tags</label>
                            <input id="createTags" type="text" autocomplete="off"
                                   class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                   placeholder="Tags"/>
                        </div>

                        <div class="error text-red-600"></div>
                    </div>
                    <div class="bg-gray-200 px-4 py-3 text-right">
                        <button id="modalCloseButton" type="button" onclick="document.getElementById('modal').classList.add('hidden')"
                                class="py-2 px-4 text-purple-800 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 text-white rounded-full mr-2">
                            <i class="fas fa-times"></i> Cancel
                        </button>
                        <button id="modalCreateButton" type="submit"
                                class="py-2 px-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white rounded-full hover:bg-emerald-500 mr-2">
                            <i class="fas fa-plus"></i> Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
`;
*/

import {API_LISTINGS_URL} from "../main";
import {returnMessage} from "../login/login";

// const form = document.getElementById('formCreateListing');
const modalCreateListing = document.getElementById("modal");
let title = document.querySelector('#createTitle');
let endsAt = document.querySelector('#createEndsAt');
let description = document.querySelector('#createDescription');
let media = document.querySelector('#createMedia');
let tags = document.querySelector('#createTags');

// media validation
const isValidMedia = media => {
    const mediaRegex = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i;
    return mediaRegex.test(String(media));
}


async function formCreateListing() {
    let validTitle = title.value.trim();
    let validDeadline = endsAt.value.trim();
    let validMedia = media.value.trim();
    let validDescription = description.value.trim();
    let validTags = tags.value.trim();

    const formData = {
        "title": validTitle,
        "endsAt": validDeadline,
        "media": isValidMedia(validMedia),
        "description": validDescription,
        "tags": validTags
    }


    if (!validTitle) {
        returnMessage.innerHTML = `Title needs to be at least 1 character.`;
        console.log(returnMessage);
    }

    if (!validDeadline) {
        returnMessage.innerHTML = `Deadline is required.`
        console.log(returnMessage);
        }

    if (validTitle && validDeadline) {
        console.log("SUCCESSFUL VALIDATION");
        console.log(formData);
        await postCreateListing(API_LISTINGS_URL, formData);
        modalCreateListing.classList.add("hidden");
        window.location.reload();
    }


}


async function postCreateListing(API_LISTINGS_URL, createData) {
    console.log('FORM CREATE DATA: ' + createData);
    try {
        const options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "content-Type": "application/json",
            },
            body: JSON.stringify({createData}),
        };

        const response = await fetch(API_LISTINGS_URL, options);
        // console.log(`response = ${response}`);
        const json = await response.json();
        // console.log(json);
        if (!response.ok) {
            console.log(json.errors[0].message);
            returnMessage.innerHTML = `${json.errors[0].message}`;
            throw new Error();
        }



        console.log("OK");
        console.log(response.status);
       // await formCreateListing();
        window.location = '../index.html';
        // await fetch(`${API_BASE_URL}/profiles/${name}?_listings=true`);
       // await localStorage.setItem("listings", json.listings);
        // localStorage.getItem("listings");

       // await fetch(`${API_BASE_URL}/profiles/${name}?_listings=true`)
       // await formCreateListing();
    } catch (error) {
        console.log(error);
    }
}


document.querySelector('#modalCreateButton').addEventListener('click', (e) => {
    e.preventDefault();

    // window.location.href = '../index.html';

     formCreateListing();
})


// console.log(inputs);


/*
// Use fetch to send the form data to the API
fetch(API_LISTINGS_URL, {
    method: "POST",
    body: JSON.stringify({formData}),
}).then((response) => response.json())
    .then((result) => {
        console.log('Success:', result);
        console.log(result.errors[0].message);
    }).catch((error) => {
    console.error('Error:', error);
    console.log(errors[0].message);
});

 */


// close create listing modal
const closeButton = document.querySelector('#modalCloseButton');
closeButton.addEventListener('click', () => {
    document.querySelector('.modal-container').classList.add('hidden');
})
