/**
Challenge: 

- Make the styling more exciting once an activity idea comes 
back from the Bored API
    - Resources: DOM element "classList" property, uigradients.com, 
      Google Fonts, color.adobe.com
    - Some ideas:
      - Change the title from "BoredBot" to something more exciting!
      - Change the background to something less drab.
      - Bonus: Animate something on the screen to move around and add more 
        excitement to the page
*/

document.getElementById('btn').addEventListener('click', function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(Response => Response.json())
        .then(DataTransfer => {
        document.getElementById('title').textContent = "😵UnBoredBot😵";
        document.getElementById('heading').textContent = "💪🏽UnBoredBot💪🏽";
        document.getElementById('activity').textContent = DataTransfer.activity;
        document.body.classList.add('fun');
    })
})