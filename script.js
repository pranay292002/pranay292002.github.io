$(window).scroll(function(e) {
    var scroll = $(window).scrollTop();
    if (scroll >= 110) {
        document.getElementById("nav").style.opacity = "1";

    } else {
        document.getElementById("nav").style.opacity = "0";
    }
})
$('.nav-item').click(function() {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
    ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 300);
            return false;
        }
    }

});
$(".navbar li a").click(function() {
    $(".navbar li a").parent().removeClass("actives");
    $(this).parent().addClass("actives");
})
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 0 && scroll <= 300) {
        $("#home1").parent().addClass("actives")
    } else {
        $("#home1").parent().removeClass("actives")
    }
})
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 301 && scroll <= 620) {
        $("#collections1").parent().addClass("actives")
    } else {
        $("#collections1").parent().removeClass("actives")
    }
})
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 621 && scroll <= 1700) {
        $("#about1").parent().addClass("actives")
    } else {
        $("#about1").parent().removeClass("actives")
    }

})
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 1701 && scroll <= 2450) {
        $("#contact1").parent().addClass("actives")
    } else {
        $("#contact1").parent().removeClass("actives")
    }
})
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 2451 ) {
        $("#features1").parent().addClass("actives")
    } else {
        $("#features1").parent().removeClass("actives")
    }
})