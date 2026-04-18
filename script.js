async function getWeather() {
    let city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    let apiKey = "9f9d4d92c9068840ac0261cb21835c26";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    document.getElementById("weatherResult").innerHTML = "Loading...";

    try {
        let response = await fetch(url);
        let data = await response.json();
        let icon = data.weather[0].icon;
let iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        if (data.cod == 200) {
            document.getElementById("weatherResult").innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        } else {
            document.getElementById("weatherResult").innerHTML = "City not found!";
        }
    } catch (error) {
        document.getElementById("weatherResult").innerHTML = "Error fetching data!";
    }
}
