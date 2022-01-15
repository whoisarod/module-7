let postsArray = [];
const form = document.getElementById("new-post");
 
function renderPosts() {
    let html = ""
    for (const post of postsArray) {
        html += `
            <h3>${post.title}</h3
            <p>${post.body}</p>
            <hr/>
        `
    }
    document.getElementById("blog-list").innerHTML = html;
}
 
fetch('https://apis.scrimba.com/jsonplaceholder/posts', {method: "GET"})
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0, 5);
        renderPosts();
    })

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const postTitle = document.getElementById('post-title').value;
    const postBody = document.getElementById('post-body').value;
    const data = {
        title: postTitle,
        body: postBody
    }
    
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch('https://apis.scrimba.com/jsonplaceholder/posts', options)
        .then(res => res.json())
        .then(post => {
            postsArray.unshift(post)
            renderPosts();
            form.reset()
    })
} )

/**
 * Challenge: GET all the comments from the blog post with ID of 2 and log to the console
 * 
 * BaseURL: https://apis.scrimba.com/jsonplaceholder/
 * Endpoint: ??? (Check JSON Placeholder docs: https://jsonplaceholder.typicode.com/guide/ and look for the "Listing nested resources" section)
 */

fetch("https://apis.scrimba.com/jsonplaceholder/posts/2/comments", {method: "GET"})
    .then(res => res.json())
    .then(data => console.log(data))

/**
 * Challenge part 1: GET the current weather for your city with 
 * the Open Weather API and log it to the console.
 * 
 * BaseURL: https://apis.scrimba.com/openweathermap/data/2.5/
 * Endpoint: /weather
 * Query: ??? (https://openweathermap.org/current)
    * NOTE: It says you need to include `appid` in your query, but you can skip that this time
 */

fetch("https://apis.scrimba.com/openweathermap/data/2.5/weather/?zip=90033,us&units=imperial")
    .then(res => res.json())
    .then(data => console.log(data))