
document.addEventListener('DOMContentLoaded', () => {
    const locationElement = document.getElementById('user-location');

    if (!navigator.geolocation) {
        locationElement.textContent = 'Tu navegador no permite obtener la ubicación.';
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            locationElement.textContent =
                `Latitud: ${latitude.toFixed(4)}, Longitud: ${longitude.toFixed(4)}`;
        },
        () => {
            locationElement.textContent =
                'No se pudo obtener tu ubicación. Revisa los permisos del navegador.';
        }
    );
});
