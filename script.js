/*
const $next = document.querySelector('.next');
const $prev = document.querySelector('.prev');

$next.addEventListener(
    'click', 
    () => {
        const items = document.querySelectorAll('.item');
        document.querySelector('.slide').
        appendChild(items[0]);
    },
);

$prev.addEventListener(
    'click',
    () => {
        const items = document.querySelectorAll('.item');
        document.querySelector('.slide').
        prepend(items[items.length -1]);
    },
);
*/


document.addEventListener('DOMContentLoaded', function() {
    const $next = document.querySelector('.next');
    const $prev = document.querySelector('.prev');

    $next.addEventListener('click', function() {
        const items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
    });

    $prev.addEventListener('click', function() {
        const items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1]);
    });
});



/*
document.addEventListener('DOMContentLoaded', function() {
    const $next = document.querySelector('.next');
    const $prev = document.querySelector('.prev');

    // Eventlistener für Klick und Touch hinzufügen
    $next.addEventListener('click', navigateNext);
    $next.addEventListener('touchstart', navigateNext);

    $prev.addEventListener('click', navigatePrev);
    $prev.addEventListener('touchstart', navigatePrev);

    function navigateNext(event) {
        const items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
        event.preventDefault(); // Verhindert das Scrollen der Seite auf Touch-Geräten
    }

    function navigatePrev(event) {
        const items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1]);
        event.preventDefault(); // Verhindert das Scrollen der Seite auf Touch-Geräten
    }
});
*/
