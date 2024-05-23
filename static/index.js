document.addEventListener('DOMContentLoaded', function() {
    // Example crop data with images
    const crops = [
        { name: 'Wheat', info: 'Best grown in winter seasons.', img: 'images/wheat.jpg' },
        { name: 'Rice', info: 'Requires a lot of water and warm climate.', img: 'images/rice.jpg' },
        { name: 'Corn', info: 'Grows well in moderate climates.', img: 'images/corn.jpg' }
    ];

    // Populate crop list
    const cropList = document.getElementById('cropList');
    crops.forEach(crop => {
        const cropDiv = document.createElement('div');
        cropDiv.className = 'crop';
        cropDiv.innerHTML = `<img src="${crop.img}" alt="${crop.name}">
                             <strong>${crop.name}</strong>: ${crop.info}`;
        cropList.appendChild(cropDiv);
    });

    // Example weather data fetching
    const weatherInfo = document.getElementById('weatherInfo');
    fetch('https://api.example.com/weather')
        .then(response => response.json())
        .then(data => {
            weatherInfo.innerHTML = `<img src="images/${data.icon}.png" alt="Weather Icon" class="weather-icon">
                                     <strong>Temperature:</strong> ${data.temperature}°C<br>
                                     <strong>Humidity:</strong> ${data.humidity}%`;
        })
        .catch(error => {
            weatherInfo.innerHTML = 'Error fetching weather data.';
            console.error('Error:', error);
        });

    // Form submission handler
    const adviceForm = document.getElementById('adviceForm');
    adviceForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const query = document.getElementById('query').value;
        const adviceResponse = document.getElementById('adviceResponse');
        
        // Example advice response
        adviceResponse.innerHTML = 'You asked : ${query}<br>Our advice: [Response from expert system]';
    });
});