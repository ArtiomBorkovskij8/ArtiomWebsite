document.addEventListener('DOMContentLoaded', function() {
    // Get the logo image element
    var logoImg = document.getElementById('logoImg');

    // Add click event listener to the logo image
    logoImg.addEventListener('click', function() {
        // Redirect to the home page
        window.location.href = 'http://127.0.0.1:3000/Public/Home.html';
    });
});

// JavaScript to show footer when scrolled to the bottom
window.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    var distanceFromTop = document.body.scrollHeight - window.innerHeight;
    if (window.pageYOffset >= distanceFromTop) {
        footer.style.bottom = '0';
    } else {
        footer.style.bottom = '-100px'; // Adjust this value to hide the footer completely
    }
});

  // Show the footer when scrolling to the bottom of the page
  window.onscroll = function() {
    var footer = document.getElementById("footer");
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.offsetHeight;
    var scrollY = window.scrollY || window.pageYOffset;
    var scrollPosition = windowHeight + scrollY;

    if (scrollPosition >= bodyHeight) {
        footer.style.display = "block";
    } else {
        footer.style.display = "none";
    }
};




