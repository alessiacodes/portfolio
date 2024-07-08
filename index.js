const MOBILE_WIDTH = 700; // Replace with your desired width in pixels

/**
 * Check the viewport width for common mobile widths and adjust the styling of elements accordingly.
 */
function checkViewportWidth() {
    const landing_left = document.querySelector('.landing-left');
    const landing = document.querySelector('.landing');
    const headshot = document.querySelector('.landing .headshot');
    const landing_h1 = document.querySelector('.landing h1');
    const header = document.querySelector('header');

    if (landing_left) {
        if (window.innerWidth < MOBILE_WIDTH) {
            landing_left.style.width = '90%';
            landing.style.flexWrap = 'wrap';
            headshot.style.marginTop = '15%';
            headshot.style.maxWidth = '40vw';
            landing_h1.style.fontSize = '15vw';
            header.style.marginBottom = '-40%'
        } else {
            landing_left.style.width = '60%';
            landing.style.flexWrap = 'nowrap';
            headshot.style.marginTop = '0';
            headshot.style.maxWidth = '350px';
            landing_h1.style.fontSize = '7vw';
            header.style.marginBottom = '-15%'
        }
    }
}

/**
 * A debounced function that delays invoking the input function until after wait milliseconds have elapsed since the last time the debounced function was invoked.
 *
 * @param {Function} func - The function to be debounced.
 * @param {number} wait - The number of milliseconds to wait before invoking the function.
 * @return {Function} Returns the debounced function.
 */
function debounce(func, wait) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    };
}

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.glass-letters img');
    images.forEach(image => {
        const randomDelay = Math.random(); // Random delay between 0 and 5 seconds
        image.style.animationDelay = `${randomDelay}s`;
    });
});

window.addEventListener('resize', debounce(checkViewportWidth, 100));
window.addEventListener('load', checkViewportWidth);