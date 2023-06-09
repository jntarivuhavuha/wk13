const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&imperial&appid=b52a9456835812ee054b1b47973357ea";

//weather box


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        //these are all the variables I will need for the weather box//


        const temperature = document.querySelector('#temp');
        const feels_like = document.querySelector('#feelslike');
        const humidity = document.querySelector('#humidity');
        const current_conditions = document.querySelector("#weather");
        const speed = document.querySelector('#speed');


        current_conditions.textContent = jsObject.weather[0].description;
        temperature.textContent = jsObject.main.temp;
        feels_like.textContent = jsObject.main.feels_like;
        speed.textContent = jsObject.wind.speed;
        humidity.textContent = jsObject.main.humidity;

     
        var f = 35.74 + 0.6215 * (jsObject.main.temp)  - 35.75 * Math.pow((jsObject.wind.speed), 0.16) + 0.4275 * (jsObject.main.temp) * Math.pow((jsObject.wind.speed), 0.16);
        
        if ((jsObject.main.temp) <= 50 && (jsObject.wind.speed) >= 3) {
            result = f.toFixed(1);
        } else {
            result = "N/A";
        }
        document.getElementById("windchill").innerHTML = result;

    });