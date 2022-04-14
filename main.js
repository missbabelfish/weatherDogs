let locale = document.querySelector('#locale');
let current = document.querySelector('#current');
let temp = document.querySelector('#temp');
let wind = document.querySelector('#wind');
let humidity = document.querySelector('#humidity');
let doggie = document.querySelector('img');
let dogMood = document.querySelector('h4');
let happyDog = 'Of course your puppy loves this weather!'
let sadDog = 'Puppy doesn\'t love it so much.';

document.querySelector('button').addEventListener('click', getWeather);

function getWeather() {
    let loc = document.querySelector('#location').value;

    fetch(`https://weatherdbi.herokuapp.com/data/weather/${loc}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.currentConditions);
            locale.innerText = data.region;
            current.innerText = data.currentConditions.comment;
            temp.innerText = data.currentConditions.temp.f;
            wind.innerText = data.currentConditions.wind.mile;
            humidity.innerText = data.currentConditions.humidity;

            switch (data.currentConditions.comment.toLowerCase()) {
                case 'sunny':
                    doggie.src = 'dogSunny.jpeg';
                    dogMood.innerText = happyDog;
                    break;
                case 'clear':
                    doggie.src = 'dogSunny.jpeg';
                    dogMood.innerText = happyDog;
                    break;
                case 'mostly sunny':
                    doggie.src = 'dogMostlySunny.jpeg';
                    dogMood.innerText = happyDog;
                    break;
                case 'partly sunny':
                    doggie.src = 'dogPartlySunny.jpeg';
                    dogMood.innerText = happyDog;
                    break;
                case 'partly cloudy':
                    doggie.src = 'dogPartlyCloudy.jpeg';
                    dogMood.innerText = happyDog;
                    break;
                case 'mostly cloudy':
                    doggie.src = 'dogMostlyCloudy.jpeg';
                    dogMood.innerText = happyDog;
                    break;
                case 'cloudy':
                    doggie.src = 'dogCloudy.jpeg';
                    dogMood.innerText = happyDog;
                    break;
                case 'rain':
                    doggie.src = 'dogRain.jpeg';
                    dogMood.innerText = happyDog;
                    break;
                case 'snow':
                    doggie.src = 'dogSnow.jpeg';
                    dogMood.innerText = happyDog;
                    break;
                case 'storm':
                    doggie.src = 'dogStorm.jpeg';
                    dogMood.innerText = sadDog;
                    break;
                case 'thunderstorm':
                    doggie.src = 'dogStorm.jpg';
                    dogMood.innerText = sadDog;
                    break;
                default :
                    dogMood.innerText = 'This weather is too crazy for anyone, including your dog.'
                    break;
            }
        })
}