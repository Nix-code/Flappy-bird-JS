
// make the canvas

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = 490;
canvas.height = 900;
// load the images
var bg = new Image();
var bird = new Image();
var ground = new Image();
var pipe_north = new Image();
var pipe_south = new Image();

// give source to the image
bg.src = "img/bg.png";
pipe_north.src = "img/north.png";
pipe_south.src = "img/south.png";
bird.src = "img/bird.png";
ground.src = "img/ground_chopped.png";



// dimension of the bg
var bgx = 0, bgy =0, bgh = 1200,  bgw = 700;
// dimension for the bird
var bx = 50, bh = 90, bw = 140;
var by = 90;

// dimension for the north pipe
var pnx = 105, pny = 0, pnh = 250, pnw = 250;
// dimension for the south pipe
var psx = 105, psy = 450, psh = 250, psw = 250;
// gravity
var gravity = 0;


// if keyis not up, increase the bird y's axis
// else decrease till the person presses it

document.addEventListener("keydown", moveUp);
function moveUp(){
    by-=30;
}


    bg.onload = function background() {

        ctx.drawImage(bg, bgx, bgy, bgh, bgw);
        requestAnimationFrame(background);
    }
   
     // load the images
     bird.onload = function birdmove() {
        // Draw the image onto the context
         ctx.drawImage(bird, bx, by, bh, bw);
         by += gravity;
        //  console.log(by);
         requestAnimationFrame(birdmove);
    }
  
    
    
    pipe_north.onload = function northPole(){
        ctx.drawImage(pipe_north, pnx, pny, pnh, pnw);
        requestAnimationFrame(northPole);
    }
    
    pipe_south.onload = function southPole(){
        ctx.drawImage(pipe_south, psx, psy, psh, psw);
        requestAnimationFrame(southPole);
    }

    ground.onload = function ground_me(){
        ctx.drawImage(ground, 0, canvas.height - psh);
        requestAnimationFrame(ground_me );
    }
     
    

// window.requestAnimationFrame(draw);




 
   


   

   
    