window.onload=()=>{

    let ctx,
    //selecting the slider element
    slider = document.getElementById('slide'),
    //setting a factorValue
    factorValue = 1,
    //Declaring a font family
    fontFamily = "Bold 65px 'Gill Sans Ultra Bold', sans-serif";


    //Inintializing the canvas
    init();

    function init(){
        ctx = document.getElementById("canvas").getContext("2d");
        //Setting the font family
        ctx.font = fontFamily;
        //Saving the context
        ctx.save();
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
        ctx.restore();
        //saving the context
        ctx.save();
        //clearing the canvas
        ctx.clearRect(0, 0, 280, 400);
        //scaling the canvas
        ctx.scale(factorValue, factorValue);
        //Drawing the text
        ctx.fillText("HTML", 50,60);
        ctx
        ctx.translate(0, offsetY);

        //Setting a color value of the shield
        ctx.fillStyle = '#E34C26';
        //Start the shape drawing
        ctx.beginPath();
        //Drawing the shield
        ctx.moveTo(39,250);
        ctx.lineTo(17,0);
        ctx.lineTo(262,0);
        ctx.lineTo(239,250);
        ctx.lineTo(139,278);
        ctx.closePath();
        //Filling the shape with the color
        ctx.fill();
        //calling a font family
        ctx.font = fontFamily;

        //The lighter half of the shield
        ctx.fillStyle = '#F06529';
        ctx.beginPath();
        ctx.moveTo(139,257);
        ctx.lineTo(220,234);
        ctx.lineTo(239,20);
        ctx.lineTo(139,20);
        ctx.closePath();
        ctx.fill();

        //first half of the five
        ctx.fillStyle = '#EBEBEB';
        ctx.beginPath();
        ctx.moveTo(139,113);
        ctx.lineTo(98,113);
        ctx.lineTo(96,82);
        ctx.lineTo(139,82);
        ctx.lineTo(139,51);
        ctx.lineTo(62,51);
        ctx.lineTo(70,144);
        ctx.lineTo(139,144);
        ctx.closePath();
        ctx.fill();

        //other cut of first half
        ctx.beginPath();
        ctx.moveTo(139,193);
        ctx.lineTo(105,184);
        ctx.lineTo(103,159);
        ctx.lineTo(72,159);
        ctx.lineTo(76,207);
        ctx.lineTo(139,225);
        ctx.closePath();
        ctx.fill();

        //second half of the five
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.moveTo(139,113);
        ctx.lineTo(139,144);
        ctx.lineTo(177,144);
        ctx.lineTo(173,184);
        ctx.lineTo(139,193);
        ctx.lineTo(139,225);
        ctx.lineTo(202,207);
        ctx.lineTo(210,113);
        ctx.closePath();
        ctx.fill();

        //other cut of second half
        ctx.beginPath();
        ctx.moveTo(139,51);
        ctx.lineTo(139,82);
        ctx.lineTo(213,82);
        ctx.lineTo(216,51);
        ctx.closePath();
        ctx.fill();
    }


    //adding the event listener for the slider
    slider.addEventListener('input', function(){
        //calling the scale function
        scaleLogo(slider.value);
        //console.log(slider.value);
    });
}
