
// Function to handle scroll and touch events
function handleScroll() {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('header nav a');
    var bottomOfPage = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10; // Adjust the threshold if needed

    sections.forEach(function(section) {
        var top = window.scrollY;
        var offset = section.offsetTop - 150; // Adjust offset if needed
        var height = section.offsetHeight;
        var id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all navigation links
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            // Add 'active' class to the corresponding navigation link
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
    });

    if (bottomOfPage) {
        // Remove 'active' class from all navigation links
        navLinks.forEach(function(link) {
            link.classList.remove('active');
        });
        // Add 'active' class to the last navigation link
        navLinks[navLinks.length - 1].classList.add('active');
    }
}

// Add event listeners for scroll and touch events
window.addEventListener('scroll', handleScroll);
window.addEventListener('touchmove', handleScroll);














// window.addEventListener('scroll', function() {
//     var sections = document.querySelectorAll('section');
//     var navLinks = document.querySelectorAll('header nav a');
//     var bottomOfPage = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10; // Adjust the threshold if needed

//     sections.forEach(function(section) {
//         var top = window.scrollY;
//         var offset = section.offsetTop - 150; // Adjust offset if needed
//         var height = section.offsetHeight;
//         var id = section.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             // Remove 'active' class from all navigation links
//             navLinks.forEach(function(link) {
//                 link.classList.remove('active');
//             });
//             // Add 'active' class to the corresponding navigation link
//             document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
//         }
//     });

//     if (bottomOfPage) {
//         // Remove 'active' class from all navigation links
//         navLinks.forEach(function(link) {
//             link.classList.remove('active');
//         });
//         // Add 'active' class to the last navigation link
//         navLinks[navLinks.length - 1].classList.add('active');
//     }
// });







document.addEventListener('DOMContentLoaded', function() {
    const showPopupButtons = document.querySelectorAll('.show-popup');
    const popupContainers = document.querySelectorAll('.popup-container');
    const closeButtons = document.querySelectorAll('.close-btn');

    // Function to hide the popup container after the fade-out animation
    function hidePopup(popupContainer) {
        popupContainer.style.display = 'none';
        popupContainer.classList.remove('fade-out'); // Reset the class for future use
    }

    // Add click event listener to each show-popup button
    showPopupButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            // Reset display property to ensure the popup can be reopened
            popupContainers.forEach(function(container) {
                container.style.display = 'none';
            });
            // Toggle the display of the corresponding popup container
            popupContainers[index].style.display = 'block';
            // Trigger reflow to ensure transition is applied
            void popupContainers[index].offsetWidth;
            popupContainers[index].classList.add('fade-in');
            // Add class to body to prevent scrolling
            document.body.classList.add('popup-open');
        });
    });

    // Add click event listener to close buttons
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Find the parent popup-container and add fade-out class
            const popupContainer = button.closest('.popup-container');
            // Check if the fade-out class is already present
            if (!popupContainer.classList.contains('fade-out')) {
                popupContainer.classList.add('fade-out');
                // Remove class from body to allow scrolling again
                document.body.classList.remove('popup-open');

                // If the transitionend event occurs, ensure the popup is hidden
                popupContainer.addEventListener('transitionend', function() {
                    hidePopup(popupContainer);
                }, { once: true });

                // Hide the popup container after the fade-out animation completes
                setTimeout(function() {
                    hidePopup(popupContainer);
                }, 200); // Adjust the delay time to match the transition duration
            }      // ^^^^^^ change number when you want to change transition speed
        });
    });
});





document.addEventListener('DOMContentLoaded', function() {
    // Get all GIF elements
    const gifs = document.querySelectorAll('img');

    // Function to reset GIF by reassigning the src
    function resetGif(gif) {
        const src = gif.src;
        gif.src = '';  // Temporarily clear the src
        gif.src = src; // Reassign the original src to restart the GIF
    }

    // Create an IntersectionObserver instance for each GIF
    gifs.forEach(gif => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    resetGif(gif); // Reset the GIF to the beginning when it goes out of view
                }
            });
        });

        observer.observe(gif);
    });
});





// document.addEventListener('DOMContentLoaded', function() {
//     const video = document.getElementById('video');

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (!entry.isIntersecting) {
//                 video.currentTime = 0; // Reset the video to the beginning
//             }
//         });
//     });

//     observer.observe(video);
// });





// Function to handle animation completion
function handleAnimationEnd() {
    var bars = document.querySelectorAll('.bar-area');
    bars.forEach(function(bar) {
        // Remove animation property after animation completes
        bar.style.animation = 'none';
    });
}

// Listen for animation end event
document.addEventListener('animationend', handleAnimationEnd);
document.addEventListener('webkitAnimationEnd', handleAnimationEnd); // for Safari









function isInViewport(element) {
    var bounding = element.getBoundingClientRect();
    return bounding.top >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

window.addEventListener('scroll', function() {
    var bars = document.querySelectorAll('.bar-border');

    bars.forEach(function(bar) {
        var barArea = bar.querySelector('.bar-area');
        barArea.classList.toggle('off-screen', !isInViewport(bar));
    });
});



// fixed and parallax backgrounds dont work well on moblie so this feature has been disabled :(


// window.addEventListener('scroll', function() {
//     const parallax = document.getElementById('parallax');
//     let scrollPosition = window.scrollY;

//     // Adjust the 'translateY' value to control the intensity of the parallax effect
//     parallax.style.transform = 'translateY(' + scrollPosition * 0.06 + 'px)';
// });