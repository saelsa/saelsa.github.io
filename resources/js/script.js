$(document).ready(function(){

//remove start page
    $('button').click(function () {
       $('.container-1').addClass('hide');       $('.container-2').removeClass('hide');
        
        
    });
    

//mobile view accordeon 
    $('.slider-about').find('.title').click(function() {
        $('.content-about').toggleClass('hide');
        $('.section-right').removeClass('initial');
    });
    
    
    $('.slider-portfolio').find('.title').click(function() {
        $('.content-portfolio').toggleClass('hide');
        $('.initial').removeClass('initial');
    });
        
    $('.slider-contact').find('.title').click(function() {
        $('.content-contact').toggleClass('hide');
        $('.initial').removeClass('initial');
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});

