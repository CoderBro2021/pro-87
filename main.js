canvas = new fabric.Canvas('myCanvas');
// Create canvas variable
 block_y=1;
 block_x=1;

 var x = document.getElementById("myAudio");
 
block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){
    block_image_object = Img;
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
		top:block_y,
        left:block_x
	});
	canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82')
	{
		block_x = 350;
		block_y = 90;
		new_image("rr.jpg");
		console.log("r is pressed");
	}
	if(keyPressed == '71')
	{
		block_x = 690;
		block_y = -100;
		new_image("gr.png");
		console.log("g is pressed");
	}
	
	if(keyPressed == '89')
	{
		block_x =-1 ;
		block_y =200;
		new_image("yr.png");
		console.log("y is pressed");
	}
	if(keyPressed == '80')
	{
		block_x = 680;
		block_y = 310;
		new_image("pr.png");
		console.log("p is pressed")
	}
	if(keyPressed == '66')
	{
		block_x = -140;
		block_y= -70;
	new_image("br.png");
	console.log("b is pressed");
	}
	
}


function playSound(){
	x.play();
}


