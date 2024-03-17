function changeURL(url) {
    window.location.href = url;
}

// Triggering the URL change after a delay
setTimeout(function() {
    changeURL("http://127.0.0.1:5500/home.html"); // Replace "https://example.com" with your desired URL
}, 2000);//