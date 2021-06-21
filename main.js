canvas= document.getElementById('myCanvas');
ctx= canvas.getContext("2d");

nasa_mars_images_array= ["nasa_image_1.jpg", "nasa_image_2.jpg", "nasa_image_3.jpg"];

random_number= Math.floor(Math.random() * 4);
console.log(random_number);
rover_width= 100;
rover_height= 90;

background_image= nasa_mars_images_array[random_number];
console.log("background_image= " + background_image);
rover_image= "rover.png";

car_x= 10;
car_y= 10;

function add() {
    background_imgTag= new Image();
    background_imgTag.onload= uploadBackground;
    background_imgTag.src= background_image;

    rover_imgTag= new Image();
    rover_imgTag.onload= upload_car;
    rover_imgTag.src= car_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0,0, canvas.width, canvas.height);
}

functionm uploadrover() {
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}


window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed= e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38')
    {
        up();
        console.log("up");
    }
    if(keyPressed=='40');
    {
        down();
        console.log("down");
    }
    if(keyPressed=='37');
    {
       left();
       console.log("left");
    }
    if(keyPressed==39);
    {
        right();
        console.log("right");
    }
}

{
    if(car_y>==0)
    {
        car_y= car_y-10;
        console.log("When up arrow is pressed, x= "+rover_x+"| y= "rover_y);
    uploadBackground();
 upload_car()}
function down()
{
    if(car_y <=500)
    {
        car_y= car_y+10;
        console.log("When down arrow is pressed, x="+rover_x+"| y= "+rover_y);
        uploadBackground();
 upload_car()    }
}
function left()
{
    if(car_x>=0)
    {
        car_x= rover_x-10;
        console.log("When left arrow is pressed, x="+rover_x+"| y="+rover_y);
        uploadBackground();
 upload_car()    }
}

function right()
{
    if(car_x<=700)
    {
        car_x= rover_x+10;
        console.log("When right arrow is pressed, x="+rover_x+"| y="+rover_y+);
        uploadBackground();
        upload_car();
    }
}