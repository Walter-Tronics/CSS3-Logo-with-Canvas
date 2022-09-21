window.onload=()=>{

    let $,
    //selecting the slider element
    slider = document.getElementById('slide'),
    //setting a factorValue
    factorValue = 1,
    //Declaring a font family
    fontFamily = "Bold 65px 'Gill Sans Ultra Bold', sans-serif";


    //Inintializing the canvas
    _();

    function _(){
        $ = document.getElementById("canvas").getContext("2d");
        //Setting the font family
        $.font = fontFamily;
        //Saving the context
        $.save();
        //Calling the draw function
        drawLogo();
    }


    ///function for scaling the shield
    function scaleLogo(num){
        //setting the factor value
        factorValue = num / 100;
        //calling the draw function
        drawLogo();
    }


    //function for initializing the shield
    function drawLogo(){
        //giving an offset to the shield
        var offsetY = 80;
        //Recall the saved context
        $.restore();
        //saving the context
        $.save();
        //clearing the canvas
        $.clearRect(0, 0, 280, 400);
        //scaling the canvas
        $.scale(factorValue, factorValue);
        //Drawing the text
        $.fillText("CSS", 70,60);
        $
        $.translate(0, offsetY);

        //Setting a color value of the shield
        $.fillStyle = '#264DE4';
        //Start the shape drawing
        $.beginPath();
        //Drawing the shield
        $.moveTo(39,250);
        $.lineTo(17,0);
        $.lineTo(262,0);
        $.lineTo(239,250);
        $.lineTo(139,278);
        $.closePath();
        //Filling the shape with the color
        $.fill();
        //calling a font family
        $.font = fontFamily;

        //The lighter half of the shield
        $.fillStyle = '#2965F1';
        $.beginPath();
        $.moveTo(139,257);
        $.lineTo(220,234);
        $.lineTo(239,20);
        $.lineTo(139,20);
        $.closePath();
        $.fill();
       
        //first part of the 3
        $.fillStyle = '#EBEBEB';
        $.beginPath();
        $.moveTo(139, 82);
        $.lineTo(139, 51);
        $.lineTo(62, 51);
        $.lineTo(64, 82);
        $.closePath();
        $.fill();

        //second part of the 3
        $.beginPath();
        $.moveTo(139, 144);
        $.lineTo(139, 113);
        $.lineTo(67, 113);
        $.lineTo(70, 144);
        $.closePath();
        $.fill();


        //first half of the five
        /*
        $.beginPath();
        $.moveTo(139,113);
        $.lineTo(98,113);
        $.lineTo(96,82);
        $.lineTo(139,82);
        $.lineTo(139,51);
        $.lineTo(62,51);
        $.lineTo(70,144);
        $.lineTo(139,144);
        $.closePath();
        $.fill();
        */

        //third cut of first half
        $.beginPath();
        $.moveTo(139,193);
        $.lineTo(105,184);
        $.lineTo(103,159);
        $.lineTo(72,159);
        $.lineTo(76,207);
        $.lineTo(139,225);
        $.closePath();
        $.fill();

        //second half of the five
        $.fillStyle = '#FFFFFF';
        $.beginPath();
        $.moveTo(139,113);
        $.lineTo(139,144);
        $.lineTo(177,144);
        $.lineTo(173,184);
        $.lineTo(139,193);
        $.lineTo(139,225);
        $.lineTo(202,207);
        $.lineTo(210,113);
        $.closePath();
        $.fill();

        //other cut of second half
        $.beginPath();
        $.moveTo(139,51);
        $.lineTo(139,82);
        $.lineTo(182, 82);
        $.lineTo(179, 113);
        $.lineTo(210, 113);
        $.lineTo(213,82);
        $.lineTo(216,51);
        $.closePath();
        $.fill();
    }


    //adding the event listener for the slider
    slider.addEventListener('input', function(){
        //calling the scale function
        scaleLogo(slider.value);
        //console.log(slider.value);
    });
}
