const author = document.getElementById('author')

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        author.innerText = `
        By: ${data.user.name}
        `
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })

    fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
        .then(res => res.json())
        .then(data => {
            document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small}>
            <span>${data.name}</span>
            `
            document.getElementById("crypto").innerHTML += `
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
            `
        })
        .catch( err => console.error(err))

function getCurrentTime() {
        const date = new Date();
        const time = date.toLocaleTimeString("en-us", {timeStyle: "short"});
        document.querySelector("h1").textContent = time;
}


setInterval(getCurrentTime, 1000)

navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            document.getElementById("weather").innerHTML = `
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
            <p class="temp">${Math.round(data.main.temp)}º</p>
            <p class="city">${data.name}</p>
            `
        })
        .catch(err => console.log(err))

});

// coords: GeolocationCoordinates
// accuracy: 1856.9927618358854
// altitude: null
// altitudeAccuracy: null
// heading: null
// latitude: 34.0495233
// longitude: -118.194167
// speed: null
// [[Prototype]]: GeolocationCoordinates
// timestamp: 1644350983480