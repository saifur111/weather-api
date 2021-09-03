const API_KEY = `73c8346d20452da656abe32c348555f8`;

const city = document.getElementById('city-name');
const imgIcon = document.getElementById('weather-icon');
const weatherDiv = document.getElementById('weather-div');
const errorMessege = document.getElementById('error');
weatherDiv.style.display='none';
const searchTemperature = () => {
    const cityName = city.value;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${API_KEY}`;
    if(cityName=== ''){
        errorMessege.innerText = "Pleae Type Your Location.";
        weatherDiv.style.display='none';
    }
    else{
        weatherDiv.style.display='block';
        errorMessege.innerText='';
        fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
    }
    
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('temperature-max', temperature.main.temp_max);
    setInnerText('temperature-min', temperature.main.temp_min);
    setInnerText('weather-condition', temperature.weather[0].main);
    //set weather icon
    const url2 = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    imgIcon.setAttribute('src', url2);
}


