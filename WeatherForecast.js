//const button = document.getElementById("fetch-btn");
//const output = document.getElementById("output");

//button.addEventListener("click",clickHandler);


//async function fetchWeatherData() {
  //try {
    //const response = await fetch('api.open-meteo.com');
    
    //if (!response.ok) {
      //throw new Error(`HTTP error! Status: ${response.status}`);
    //}
    
    //const data = await response.json();
    //console.log(data);
    
  //} catch (error) {

    //console.error('Fetch failed:', error.message);
  //}
//}

//fetchWeatherData();


//const button = document.getElementById('fetch-btn'); 
//const output = document.getElementById('output'); 

//button.addEventListener('click', fetchWeatherData);

//async function fetchWeatherData() { 
//  try { 
    // Example: Fetch current weather for Castlegar, BC (Latitude: 49.32, Longitude: -117.//66)
 //   const url = 'https://open-meteo.com';
    
 //   const response = await fetch(url); 
    
  //  if (!response.ok) { 
   //   throw new Error(`HTTP error! Status: ${response.status}`); 
    //} 
    
    //const data = await response.json(); 
    //console.log(data);
    
    // Display the temperature in the DOM element
    //const temp = data.current.temperature_2m;
    //const unit = data.current_units.temperature_2m;
    //output.textContent = `Current Temperature: ${temp} ${unit}`;

  //} catch (error) { 
    //console.error('Fetch failed:', error.message); 
    //output.textContent = 'Failed to load weather data.';
  //} 
//}


const button = document.getElementById('fetch-btn');
const output = document.getElementById('output');

button.addEventListener('click', fetchWeatherData);

async function fetchWeatherData() {
  try {
    // Correct endpoint: /v1/forecast and query parameters included
    const lat = 35.6762;
    const lon = 139.6917;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`;

    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(data); 
    
    const temp = data.current.temperature_2m;
    const unit = data.current_units.temperature_2m;
    
    output.textContent = `Current Temperature: ${temp} ${unit}`;
  } catch (error) {
    console.error('Fetch failed:', error.message);
    output.textContent = 'Failed to load weather data.';
  }
}
