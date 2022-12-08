// UPDATE object
import {createUrl} from "src/main";

fetch(createUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-type": "application/json charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(json => console.log(json))
    .then(acceptData)
