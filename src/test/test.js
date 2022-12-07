// GET retrieve all to-do’s
fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(response => response.json())
    .then(json => console.log(json))
// will return all resources


// GET retrieves the to-do with specific URI (in this case id = 5)
fetch(`https://jsonplaceholder.typicode.com/todos/5`)
    .then(response => response.json())
    .then(json => console.log(json))
/* will return this specific resource:
{
“userId”: 1,
“id”: 5,
“title”: “laboriosam mollitia et enim quasi adipisci quia provident illum”,
“completed”: false
}
 */


// POST adds a random id to the object sent
fetch(`https://jsonplaceholder.typicode.com/todos`, {
    method: "POST",
    body: JSON.stringify({
        userId: 1,
        title: "clean room",
        completed: false
    }),
    headers: {
"Content-type": "application/json charset=UTF-8"
}
})
    .then(response => response.json())
    .then(json => console.log(json))

/* will return
{“userId”: 1,
“title”: “clean room”,
“completed”: false,
“id”: 201}
 */