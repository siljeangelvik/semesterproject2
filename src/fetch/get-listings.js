

// Fetch the data from the server
fetch(API_LISTINGS_URL)
    .then(response => response.json())
    .then(data => {

        data.sort((a, b) => a.endsAt - b.endsAt);
        console.log(data.endsAt);
    })
