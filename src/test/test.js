let modal = document.getElementById("modal");
modal.innerHTML = `
  <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 transition-opacity">
      <div class="absolute inset-0 bg-gray-900 opacity-75" />
    </div>
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
    <form id="form" class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">

          <div class="bg-orange-400 py-4 px-8 text-black text-xl border-b border-grey-lighter">Create a listing</div>

      <div class="bg-white px-2 pt-5 pb-2 sm:p-6 sm:pb-4">
        <div class="mb-4 flex justify-between gap-2">

          <div class="mb-4 w-full">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="createTitle">Title</label>
            <input id="createTitle" type="text" placeholder="Title" required class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
          </div>
            
             <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="createTime">Time</label>
                <input id="createTime" type="time" required min="00.00" max="23.59" class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" placeholder="time" />
            </div>
        </div>
        
        
        <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="createMedia">Media</label>
            <input id="createMedia" type="url" alt="" placeholder="https://cdn.pixabay.com/photo/2022/11/28/20/52/bird-7623166_1280.jpg" pattern="https://.*" size="30" class="profile-pic-input appearance-none border rounded w-full py-2 px-3 text-grey-darker"/>
        </div>
        
        <div class="mb-4">
          <label class="block text-grey-darker text-sm font-bold mb-2" for="createTitle">Description</label>
          <input id="createDescription" type="text" class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" placeholder="Description" />
        </div>
            
        <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="createTags">Tags</label>
            <input id="createTags" type="text" autocomplete="off" class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" placeholder="Tags" />
        </div>    
      <div id="msg" class="text-red-600"></div>
      </div>
      <div class="bg-gray-200 px-4 py-3 text-right">
        <button id="modalExit" type="button" class="py-2 px-4 bg-orange-400 text-white rounded hover:bg-red-400 mr-2"><i class="fas fa-times"></i> Cancel</button>
        <button id="modalCreate" type="submit" class="py-2 px-4 bg-orange-400 text-white rounded hover:bg-emerald-500 mr-2"><i class="fas fa-plus"></i> Create</button>
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

/*
let modalCreate = document.getElementById("modalCreate");
let createTitle = document.getElementById("createTitle");
let createDescription = document.getElementById("createDescription");
let createTags = document.getElementById("createTags");
*/


///
let form = document.getElementById("form");
let inputTitle = document.getElementById("createTitle");
let inputTime = document.getElementById("createTime");
let inputMedia = document.getElementById("createMedia");
let inputTags = document.getElementById("createTags");
let inputDescription = document.getElementById("createDescription");

let msg = document.getElementById("msg");
let createdListings = document.getElementById("createdListings");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});

let formValidation = () => {
    if (inputTitle.value === "") {
        msg.innerHTML = "Post cannot be blank";
        console.log("failure");
    } else {
        console.log("success");
        msg.innerHTML = "";
        modal.classList.add('hidden');
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data["text"] = inputTitle.value;
    data["time"] = inputTime.value;
    data["url"] = inputMedia.value;
    data["tags"] = inputTags.value;
    data["description"] = inputDescription.value;
    console.log(data);

    createPost();
};

const createPost = () => {
    createdListings.innerHTML += `
<div class="w-5/6 lg:w-1/2 mx-auto rounded">
    <div class="mb-4 bg-white text-grey-darker">
        <div class="appearance-none border rounded w-full py-2 px-3">
            <div class="w-full flex justify-between py-2 border-b">
            <!-- Listing Title -->
                <h2 class="text-2xl font-bold py-2">${data.text}</h2>
                <!-- Listing Bids -->
                <p class="font-bold py-4">
                    <button id="cardAmountBids" class="bg-yellow-500 hover:bg-yellow-400 text-white font-bold px-2 rounded-full">${data.time}</button>
                </p>
            </div>
            <!-- Listing Image -->
            <img id="cardMedia"
            src="${data.url}"
            alt="listing-media-image" class="w-full text-center py-4 px-1">
            <!-- Listing Description -->
            <p id="cardDescription" class="py-2 border-t">${data.description}</p>
            <!-- Listing Bids & Bid Button -->
                <div class="w-full flex justify-between py-4">
                    <!-- Listing Tags -->
                    <p id="cardTags" class="w-full py-2 flex justify-between text-sm font-bold font-mono">${data.tags}</p>
                    <!-- Listing Bid Button -->
                    <div class="flex justify-between">
                        <button id="cardBidButton" class="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded" type="submit">Bid</button>
                    </div>
                </div>
            <p id="cardTime" class="w-full py-2 flex justify-between text-sm italic"></p>
            
            <span class="options">
                <i onClick="editPost(this)" class="fas fa-edit"></i>
                <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
            </span>
        </div>
    </div>
</div>
  `;
    input.value = "";
};


/*
  posts.innerHTML += `
     <div class="w-5/6 lg:w-1/2 mx-auto rounded">
        <div class="mb-4 bg-white text-grey-darker">
            <div class="appearance-none border rounded w-full py-2 px-3">
                <!-- Heading -->
                <div class="w-full flex justify-between py-2 border-b">
                    <!-- Listing Title -->
                    <h2 class="text-2xl font-bold py-2">${data.title}</h2>
                    <!-- Listing Bids -->
                    <p class="font-bold py-4">Bids:
                   <button id="cardAmountBids" class="bg-yellow-500 hover:bg-yellow-400 text-white font-bold px-2 rounded-full" type="submit">${data["_count"].bids}</button>
                  </p>
                </div>
                <!-- Listing Image -->
                <img id="cardMedia"
                    src="${data.media}"
                    alt="listing-media-image" class="w-full text-center py-4 px-1">
                <!-- Listing Description -->
                <p id="cardDescription" class="py-2 border-t">${data.description}</p>
                <!-- Listing Bids & Bid Button -->
                <div class="w-full flex justify-between py-4">
                    <!-- Listing Tags -->
                    <p id="cardTags" class="w-full py-2 flex justify-between text-sm font-bold font-mono">${data.tags}</p>
                    <!-- Listing Bid Button -->
                    <div class="flex justify-between">
                        <button id="cardBidButton" class="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded" type="submit">Bid</button>
                    </div>
                </div>
                    <span class="options">
                        <i onClick="editPost(this)" class="fas fa-edit"></i>
                        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
    `;
    input.value = "";
 */
