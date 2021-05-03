
const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Body   = Matter.Body;

var boys_skating;

var girl_playing;

var bgimage;

var snow = [];
var maxSnow = 250;

function preload () {

	bgimage = loadImage ("bg1.jpg");

}

function setup () {

	createCanvas(1250, 600);

	engine       = Engine.create();
	world        = engine.world;

	

	if (frameCount % 150 === 0) {

        for (var i=0; i<maxSnow; i++) {

            snow.push ( new Snow( random(0,1250), random(0,400) ) )

        }

    }

	Engine.run(engine);
  
}

function draw () {

    rectMode(CENTER);

    background(bgimage);

    

    for (var i =0; i<maxSnow; i++) {

	  snow[i].showSnow ();
	  snow[i].updateY  ();

    }
 
	drawSprites ();

}
