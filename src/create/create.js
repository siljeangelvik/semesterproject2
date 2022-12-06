
let modal = document.getElementById("modal");
modal.innerHTML = `
  <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 transition-opacity">
      <div class="absolute inset-0 bg-gray-900 opacity-75" />
    </div>
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
    <form id="form" class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">

          <div class="bg-orange-400 py-4 px-8 text-black text-xl border-b border-grey-lighter">Create a listing</div>

      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="mb-4 flex justify-between gap-0.5">

          <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="createTitle">Title</label>
            <input id="createTitle" class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" placeholder="Title" />
          </div>

          <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="createTitle">Media</label>
            <input id="createMedia" class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" placeholder="Media" />
          </div>
        </div>

        <div class="mb-4">
          <label class="block text-grey-darker text-sm font-bold mb-2" for="createTitle">Tags</label>
          <input id="createTags" class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" placeholder="Tags" />
        </div>

        <div class="mb-4">
          <label class="block text-grey-darker text-sm font-bold mb-2" for="createTitle">Description</label>
          <input id="createDescription" class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" placeholder="Description" />
        </div>
      <div id="msg" class="text-red-600"></div>
      </div>
      <div class="bg-gray-200 px-4 py-3 text-right">
        <button id="modalExit" type="button" class="py-2 px-4 bg-orange-400 text-white rounded hover:bg-red-400 mr-2"><i class="fas fa-times"></i> Cancel</button>
        <button id="modalCreate" type="button" class="py-2 px-4 bg-orange-400 text-white rounded hover:bg-emerald-500 mr-2"><i class="fas fa-plus"></i> Create</button>
      </div>
    </form>
  </div>
`;

let modalButton = document.getElementById("modalButton");
modalButton.addEventListener('click', (e) => {
    modal.classList.remove('hidden');
    console.log('Modal Opened');
})

let modalExit = document.getElementById("modalExit");
modalExit.addEventListener('click', (e) => {
    modal.classList.add('hidden');
})


//let modalCreate = document.getElementById("modalCreate");

let createTitle = document.getElementById("createTitle");
let createMedia = document.getElementById("createMedia");
let createDescription = document.getElementById("createDescription");
let createTags = document.getElementById("createTags");

///
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});

let formValidation = () => {
    if (createTitle.value === "") {
        msg.innerHTML = "Post cannot be blank";
        console.log("failure");
    } else {
        console.log("success");
        msg.innerHTML = "";
    }
};

///////////

let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

let inputTitle = document.getElementById("createTitle");
let inputMedia = document.getElementById("createMedia");
let inputTags = document.getElementById("createTags");
let inputDescription = document.getElementById("createDescription");

window.console.clear();




let data = {
        /*  "title": "string", // Required
          "description": "string", // Optional
          "tags": ["string"], // optional
          "media": ["https://url.com/image.jpg"], // Optional
          "endsAt": "2020-01-01T00:00:00.000Z" // Required - Instance of new Date() */
    }
;

let acceptData = () => {
    data["title"] = inputTitle.value.trim(),
        data["media"] = inputMedia.value.trim(),
        data["tags"] = inputTags.value.trim(),
        data["description"] = inputDescription.value.trim()

    console.log(data);
    createPost();
};


let createPost = () => {
    posts.innerHTML += `
  <div>
    <h2>${data.title}</h2>
    <img src="${data.media}" alt="listing-image">
    <p>${data.description}</p>
    <p>${data.tags}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
  `;
    input.value = "";
};


