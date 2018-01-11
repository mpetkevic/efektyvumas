function menuClick() {
    var showMenu = document.querySelector(".mobile-menu-nav");
    var icon = document.querySelector(".hamburger");
    var ikona = icon.getAttribute("src");
    if (ikona == 'images/hamburger.svg') {
        icon.setAttribute("src", "images/close.svg");
        showMenu.style.display = 'inline-block';
    } else {
        icon.setAttribute("src", "images/hamburger.svg");
        showMenu.style.display = 'none';
    }
    
}

function hideMenu() {
    showMenu = document.querySelector(".mobile-menu-nav");
    showMenu.style.display = 'none';
    var icon = document.querySelector(".hamburger");
    icon.setAttribute("src", "images/hamburger.svg");
}


$(document).ready(function(){
    $('.mok').click(function(){
        if($(window).width() < 1000) {
            $('html, body').animate({
                scrollTop: $('#mokome').offset().top - 100
            }, 1000);
            return false;
        } else {
            $('html, body').animate({
                scrollTop: $('#mokome').offset().top
            }, 1000);
            return false;
        }
        });
});

$(document).ready(function(){
    $('.vert').click(function(){
        if($(window).width() < 1000) {
            $('html, body').animate({
                scrollTop: $('#vertinimas').offset().top - 100
            }, 1000);
            return false;
        } else {
            $('html, body').animate({
                scrollTop: $('#vertinimas').offset().top
            }, 1000);
            return false;
        }
        });
});

$(document).ready(function(){
    $('.tobul').click(function(){
        if($(window).width() < 1000) {
            $('html, body').animate({
                scrollTop: $('#tobuliname').offset().top - 100
            }, 1000);
            return false;
        } else {
            $('html, body').animate({
                scrollTop: $('#tobuliname').offset().top
            }, 1000);
            return false;
        }
        });
});

$(document).ready(function(){
    $('.stabil').click(function(){
        if($(window).width() < 1000) {
            $('html, body').animate({
                scrollTop: $('#stabilizuojame').offset().top - 100
            }, 1000);
            return false;
        } else {
            $('html, body').animate({
                scrollTop: $('#stabilizuojame').offset().top
            }, 1000);
            return false;
        }
        });
});

$(document).ready(function(){
    $('.rezult').click(function(){
        if($(window).width() < 1000) {
            $('html, body').animate({
                scrollTop: $('#rezultatas').offset().top - 100
            }, 1000);
            return false;
        } else {
            $('html, body').animate({
                scrollTop: $('#rezultatas').offset().top
            }, 1000);
            return false;
        }
        });
});

$(document).ready(function(){
    $('.lean').click(function(){
        if($(window).width() < 800) {
            $('html, body').animate({
                scrollTop: $('.lean-mobile').offset().top - 100
            }, 1000);
            return false;
        } else {
            $('html, body').animate({
                scrollTop: $('#lean').offset().top
            }, 1000);
            return false;
        }
        });
});

$(document).ready(function(){
    $('.lean-m').click(function(){
        if($(window).width() < 800) {
            $('html, body').animate({
                scrollTop: $('.lean-mobile').offset().top - 100
            }, 1000);
            return false;
        } else {
            $('html, body').animate({
                scrollTop: $('#lean').offset().top
            }, 1000);
            return false;
        }
        });
});

$(document).ready(function(){
    $('.kontakt').click(function(){
        if($(window).width() < 800) {
            $('html, body').animate({
                scrollTop: $('.kontaktai-mobile').offset().top - 100
            }, 1000);
            return false;
        } else {
            $('html, body').animate({
                scrollTop: $('#kontaktai').offset().top
            }, 1000);
            return false;
        }
        });
});