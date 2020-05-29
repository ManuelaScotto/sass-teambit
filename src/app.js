$(document).ready(function() {
    //dropdown
    $('.parent-dropdown').mouseenter(function() {
        $(this).children('.dropdown').show();
    })
    $('.parent-dropdown').mouseleave(function() {
        $(this).children('.dropdown').hide();
    })

    //click hamburger menu
    var close = true;
    $(document).on('click', '.hamburger', function() {
        if (close == true) {
            $(this).next('.wrapper-hamburger').show();    
            close = false;   
        } else {
            $(this).next('.wrapper-hamburger').hide();   
            close = true;
        }     
    })
    $(document).on('click','.menu-hamburger ul li a', function(){
        $('.wrapper-hamburger').hide(); 
        close = true;          
    })

});