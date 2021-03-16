
let nextApps = document.querySelectorAll(".next-app");
let prevApps = document.querySelectorAll(".prev-app");
let currentSlider = null;
let widthColumn = 0;
let scrollLength = 0;
let cacheScroll = 0;
let maxFrame = 0;


for (let next of nextApps) {
    nextSlider(next);
}

for (let prev of prevApps) {
    prevSlider(prev);
}

function nextSlider(next) {
    next.addEventListener("click", function () {
        currentSlider = $(this).parent().children('.slider');
        widthColumn = $(this).parent().children('.card__column');

        let prevSlider = $(this).siblings('.prev-app');
        maxFrame = widthColumn[0].scrollWidth;

        calcScrollLength(maxFrame);
        calcCacheMaxScroll(scrollLength);

        currentSlider[0].scrollBy(scrollLength, 0);
        prevSlider.css("visibility", "visible");

        if (cacheScroll >= maxFrame) {
            setScrollLength(0);
            setCacheScroll(0);
            setMaxFrame(0);
            $(this).css("visibility", "hidden");
        }
    })
}

function prevSlider(prev) {
    prev.addEventListener("click", function () {
        currentSlider = $(this).parent().children('.slider');
        widthColumn = $(this).parent().children('.card__column');

        let nextSlider = $(this).siblings('.next-app');

        maxFrame = widthColumn[0].scrollWidth;
        setMaxFrame(widthColumn[0].scrollWidth);

        calcScrollLength(maxFrame);

        if (cacheScroll === 0) {
            setCacheScroll(maxFrame);
        }

        calcCacheMinScroll(scrollLength);

        currentSlider[0].scrollBy(-scrollLength, 0);
        nextSlider.css("visibility", "visible");

        if (cacheScroll <= 0) {
            setScrollLength(0);
            setCacheScroll(0);
            setMaxFrame(0);
            $(this).css("visibility", "hidden");
        }

    })
}

function calcScrollLength(widthFrame) {
    scrollLength = widthFrame / 2;
    return;
}

function calcCacheMaxScroll(scroll) {
    cacheScroll += scroll;
    return;
}

function calcCacheMinScroll(scroll) {
    cacheScroll -= scroll;
    return;
}

function setCacheScroll(value) {
    cacheScroll = value;
    return;
}

function setScrollLength(value) {
    scrollLength = value;
    return;
}

function setMaxFrame(value) {
    maxFrame = value;
    return;
}