import {listUrl, returnMessage, loginMessage, listData} from "../main";

async function userAccess(listUrl) {
    // console.log(userData);
    try {
        const getData = {
            method: "GET",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(listUrl),
        };
        const response = await fetch(listUrl, getData);
        // console.log(response);
        const json = await response.json();
        console.log(json);
        if (response.status === 200) {
          console.log("OK");
        } else {
          returnMessage.innerHTML = json.error();
        }
    } catch (error) {
        console.log(error);
    }
}


function listData(listings) {
    console.log(listings);

    // loginMessage.innerHTML = `Hello, ` + localStorage.getItem(name);

    listings.forEach((listing) => {

        listData.innerHTML +=
            `<div>
                  <a href="details.html?uuid=${listing.uuid}">
                        <p>${listing.name}</p>
                        <p >${listing.credits}</p>
                        <img src="${listing.email}" alt="${listing.email}" width="100"></a>
                </div>`;
    })
}

console.log(loginMessage.innerHTML = `Hello, ${localStorage.getItem(name)}`);