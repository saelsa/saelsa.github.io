$(document).ready(function() {

//hide/unhide navigation at certain waypoints 
    $('.js--section-anmeldung').waypoint(function(direction) {
        if (direction == "down") {
           $('nav').addClass('sticky'); 
           $('#js--home-anchor').removeClass('hide');
        } else {
           $('nav').removeClass('sticky');
           $('#js--home-anchor').addClass('hide');
        }
    }, {
        offset: '60'
    });
    
/* Navigation scroll */ 
//credits to https://css-tricks.com/snippets/jquery/smooth-scrolling/    
    
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });    
   

/* Animations on scroll */ 
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '80%'
    });    
    
/* Mobile navigabtion */
    
    $('.js--nav-icon').click(function() { 
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');            
        }    
                                         
    });
    
    $('.main-nav li').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        if (icon.hasClass('ion-close-round')) {
        nav.slideToggle(200);   
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');  
        };
    });
    
/*Anmeldung form*/
    
    $('.js--btn-yes').click(function() {
        $('#form-yes').removeClass('hide');
        $('#form-no').addClass('hide');
    });
    
    $('.js--btn-no').click(function() {
        $('#form-no').removeClass('hide');
        $('#form-yes').addClass('hide');
    });
    
    

    $('input[type=radio][name=anzahl-gaeste]').change(function() {
        if (this.value == '0') {
            $('#gaeste').addClass('hide');
        }
        else if (this.value == '1') {
            $('#gaeste').removeClass('hide');
        }
    });

    $('input[type=radio][name=anzahl-absagen]').change(function() {
        if (this.value == '0') {
            $('#absagen').addClass('hide');
        }
        else if (this.value == '1') {
            $('#absagen').removeClass('hide');
        }
    });
    
    
    
/* Maps */ 

    var map = new GMaps({
      div: '.map',
      lat: 53.4871698,
      lng: 10.2188059,
      zoom: 15
        
    });
    
    map.addMarker({
      lat: 53.4871698,
      lng: 10.2188059,
      title: 'Standesamt',
      infoWindow: {
        content: '<p>Standesamt Bergedorf</p>'
      }
    });
    
    
});