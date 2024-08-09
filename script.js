// script.js
window.addEventListener('load', function() {
    // Set the loader display time (in milliseconds)
    const loaderDisplayTime = 3000; // 3000 milliseconds = 3 seconds

    setTimeout(function() {
        document.querySelector('.loader').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, loaderDisplayTime);
});

