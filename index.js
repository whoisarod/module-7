/**
Challenge:

1. Fetch a random image from the Dog API again 
(https://dog.ceo/api/breeds/image/random)

2. Access the DOM and insert the URL you got from the
API as an image `src` property (probably easiest if 
you create the image completely here in the JS and add 
it as the innerHTML of another element on the DOM)
*/

fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      document.getElementById("image").innerHTML = `<img src="${data.message}"/>`});

/**
Challenge: 

1. Fetch a random activity from the Bored API
url: https://apis.scrimba.com/bored/api/activity

2. Display the text of the activity in the browser
*/

fetch("https://apis.scrimba.com/bored/api/activity")
    .then(Response => Response.json())
    .then(DataCue => {
        console.log(DataCue)
        document.getElementById("text")
            .textContent = DataCue.activity
    })