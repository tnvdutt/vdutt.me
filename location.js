// Coordinates of Singapore
const singaporeCoords = {
    latitude: 1.3521,
    longitude: 103.8198
};

// Function to calculate the distance using the Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = degreesToRadians(lat2 - lat1);
    const dLon = degreesToRadians(lon2 - lon1);
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
}

// Helper function to convert degrees to radians
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Function to display the distance
function displayDistance(distance) {
    const distanceInfo = document.getElementById("distance-info");
    distanceInfo.textContent = `You are ${distance.toFixed(2)} km away from me yet we are connected!.`;
}

// Geolocation success callback
function success(position) {
    const userLatitude = position.coords.latitude;
    const userLongitude = position.coords.longitude;

    const distance = calculateDistance(
        userLatitude, userLongitude,
        singaporeCoords.latitude, singaporeCoords.longitude
    );
    
    displayDistance(distance);
}

// Geolocation error callback
function error() {
    const distanceInfo = document.getElementById("distance-info");
    distanceInfo.textContent = "Unable to retrieve your location.";
}

// Check if the browser supports Geolocation
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
} else {
    const distanceInfo = document.getElementById("distance-info");
    distanceInfo.textContent = "Geolocation is not supported by your browser.";
}
