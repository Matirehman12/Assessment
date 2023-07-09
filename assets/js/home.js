
$(document).ready(function () {
    $('.property-carousal').owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        navText: ["<img src='../assets/imgs/Left arrow.png' width='40px' height='40px' />", "<img src='../assets/imgs/Right arrow.png' width='40px' height='40px' />"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });
});
$(document).ready(function () {
    $('.nearby-carousal').owlCarousel({
        items: 5,
        loop: true,
        nav: true,
        navText: ["<img src='../assets/imgs/Left arrow.png' width='40px' height='40px' />", "<img src='../assets/imgs/Right arrow.png' width='40px' height='40px' />"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            }
        }
    });
});
$(document).ready(function () {
    $('.category-carousal').owlCarousel({
        items: 5,
        loop: true,
        nav: true,
        navText: ["<img src='../assets/imgs/Left arrow.png' width='40px' height='40px' />", "<img src='../assets/imgs/Right arrow.png' width='40px' height='40px' />"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            }
        }
    });
});
$(document).ready(function () {
    $('.hotel-stay-carousal').owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        navText: ["<img src='../assets/imgs/Left arrow.png' width='40px' height='40px' />", "<img src='../assets/imgs/Right arrow.png' width='40px' height='40px' />"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            }
        }
    });
});


$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        navText: ["<img src='../assets/imgs/Left arrow.png' width='40px' height='40px' />", "<img src='../assets/imgs/Right arrow.png' width='40px' height='40px' />"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
});

