$(document).ready(function(){

    $tracks = $('.tracks');
    $wheel1 = $('.wheel1 img');
    $wheel2 = $('.wheel2 img');
    $car = $('.car');

    $(document).on('keypress',function(e){
        
        // console.log(e.which);
        if (e.which==13){
            $($tracks).toggleClass('carMove');
            $($wheel1).toggleClass('wheelRotation1');
            $($wheel2).toggleClass('wheelRotation2');
        }
       
    
    })
    $(document).on('keypress',function(e){
        if (e.which==32){
           
            $($car).toggleClass('jump');
        }


    })
    



})