/**
 Challenge:

 Style it up!
 
 * Add a short (~30px height) fixed navbar at the top with the text "BlogSpace". Remember to pad the top of your content so it doesn't get hidden behind the navbar.
 * Add a font from Google Fonts.
 * Any other styling you want to make it look nice!
 
 */

 fetch('https://apis.scrimba.com/jsonplaceholder/posts', {method: "GET"})
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5);
        let html = ""
        for (const posts of postsArr) {
            html += `
                <h3>${posts.title}</h3
                <p>${posts.body}</p>
                <hr/>
            `
        }
        document.getElementById("blog-list").innerHTML = html;
    })