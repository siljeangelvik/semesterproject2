/* @formatter:off */
// modal form listing inner html
document.getElementById("modal").innerHTML = `
    <div class="fixed z-10 overflow-auto top-0 w-full left-0">
        <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity">
                <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
                <span class="absolute sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <form id="form"
                      class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                      aria-labelledby="modal-headline">

                    <div class=" bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 py-4 px-8 text-white text-xl border-b border-grey-lighter">
                        Create a
                        listing
                    </div>

                    <div class="bg-white px-2 pt-5 pb-2 sm:p-6 sm:pb-4">
                        <div class="mb-4 flex justify-between gap-2">
                            <div class="mb-4 w-full">
                                <label class="block text-grey-darker text-sm font-bold mb-2"
                                       for="createTitle">Title</label>
                                <input id="createTitle" type="text" placeholder="Title" required
                                       class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"/>
                            </div>

                            <div class="mb-4">
                                <label class="block text-grey-darker text-sm font-bold mb-2"
                                       for="createDeadline">Time</label>
                                <input id="createDeadline" type="datetime-local" min="00.00" max="23.59" required
                                       class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                       placeholder="time"/>
                            </div>
                        </div>

                        <div class="mb-4">
                            <label class="block text-grey-darker text-sm font-bold mb-2"
                                   for="createMedia">Media</label>
                            <input id="createMedia" type="url" alt=""
                                   placeholder="https://cdn.pixabay.com/photo/2022/11/28/20/52/bird-7623166_1280.jpg"
                                   pattern="https://.*" size="30"
                                   class="profile-pic-input appearance-none border rounded w-full py-2 px-3 text-grey-darker"/>
                        </div>

                        <div class="mb-4">
                            <label class="block text-grey-darker text-sm font-bold mb-2"
                                   for="createDescription">Description</label>
                            <input id="createDescription" type="text"
                                   class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                   placeholder="Description"/>
                        </div>

                        <div class="mb-4">
                            <label class="block text-grey-darker text-sm font-bold mb-2"
                                   for="createTags">Tags</label>
                            <input id="createTags" type="text" autocomplete="off"
                                   class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                   placeholder="Tags"/>
                        </div>

                        <div id="msg" class="text-red-600"></div>
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
