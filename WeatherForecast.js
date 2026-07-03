const button = document.getElementById('fetch-btn');
const output = document.getElementById('data-container');

button.addEventListener('click', fetchWeatherData);

async function fetchWeatherData() {
  try {
    
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
    
    output.textContent = `Current Conditions: ${temp} ${unit}`;
  } catch (error) {
    console.error('Fetch failed:', error.message);
    output.textContent = 'Failed to load weather data.';
  }
}
