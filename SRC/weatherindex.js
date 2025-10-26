function RefreshWeather (response){
    let temperatureElement=document.querySelector("#temperature");
    let temperature=response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
    
    temperatureElement.innerHTML=Math.round(temperature);
    

    
}


function searchCity (city){

    let apiKey = "a43b704dc34352oa5c01d16337a4fct8";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(RefreshWeather);
}

function handleSearchSubmit(event){
event.preventDefault();
let searchInput = document.querySelector("#search-form-input");



searchCity(searchInput.value);

}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);


