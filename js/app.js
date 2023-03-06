const API_KEY = `3fb928020812e735d24fe98277ffb9c9`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const displayTemperature = data =>{
    // const temperature = document.getElementById('temperature');
    // temperature.innerText = data.main.temp;
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('city', data.name);
    setInnerTextById('condition', data.weather[0].main);
    // console.log(data.weather[0].main);
}

const updateWithSearch = () =>{
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    loadTemperature(city);
    // document.getElementById('city').innerText = city.toUpperCase();
    

    
}

const setInnerTextById = (id, text) =>{
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function(){
    updateWithSearch();
})

document.getElementById('search-field').addEventListener('keypress', function(e){
    // console.log(e.key);
    if(e.key === 'Enter'){
        updateWithSearch();
    }
})



loadTemperature('dhaka');

