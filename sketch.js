/*

The Game Project 5 - Bring it all together

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var isLeft;
var isRight;
var isFalling;
var isPlumeting;

var trees;
var collectables;
var canyons;
var clouds;
var mountains;

var game_score;
var falgpole;
var lives;

var platforms;
var enemies;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;

    lives = 4;
    
    startGame();
    
}
function startGame()
{
    gameChar_x = width/2;
	gameChar_y = floorPos_y;
  

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlumeting = false;
    

	// Initialise arrays of scenery objects.
    
    clouds = [
                {Pos_x:100,size: 100,Pos_y: 100},
                {Pos_x:500,size: 100,Pos_y: 100},
                {Pos_x:850,size: 100,Pos_y: 100},
                {Pos_x:900,size: 100,Pos_y: 100},
                {Pos_x:1200,size: 100,Pos_y: 100},
                {Pos_x:1500,size: 100,Pos_y: 100},
                {Pos_x:1600,size: 100,Pos_y: 100},
                {Pos_x:1950,size: 100,Pos_y: 100},
                {Pos_x:2550,size: 100,Pos_y: 100},
                {Pos_x:2250,size: 100,Pos_y: 100},
                {Pos_x:-300,size: 100,Pos_y: 100},
                {Pos_x:-700,size: 100,Pos_y: 100},
                {Pos_x:-1000,size: 100,Pos_y: 100},
                {Pos_x:-1300,size: 100,Pos_y: 100},
        
             ];
        
    trees = [ 
                {pos_x:-1200,pos_y:288, width:40,size:153},
                {pos_x:-970,pos_y:288, width:40,size:153},
                {pos_x:100,pos_y:288,width:40,size:153},
                {pos_x:352,pos_y:288,width:40,size:153},
                {pos_x:488,pos_y:288,width:40,size:153},
                {pos_x:852,pos_y:288,width:40,size:153},
                {pos_x:1024,pos_y:288,width:40,size:153},
                {pos_x:1700,pos_y:288,width:40,size:153},
                {pos_x:200,pos_y:288,width:40,size:153},
                {pos_x:597,pos_y:288,width:40,size:153},
                {pos_x:10,pos_y:288,width:40,size:153},
                {pos_x:1139,pos_y:288,width:40,size:153},
                {pos_x:1444,pos_y:288,width:40,size:153},
                {pos_x:-245,pos_y:288,width:40,size:153},
                {pos_x:-585,pos_y:288,width:40,size:153},
                {pos_x:-800,pos_y:288,width:40,size:153},
                {pos_x:-345,pos_y:288,width:40,size:153},
                {pos_x:1813,pos_y:288,width:40,size:153},
                {pos_x:1345,pos_y:288,width:40,size:153},
                {pos_x:2000,pos_y:288,width:40,size:153},
                {pos_x:2250,pos_y:288,width:40,size:153},
                {pos_x:2350,pos_y:288,width:40,size:153},
                {pos_x:2150,pos_y:288,width:40,size:153},
                {pos_x:1550,pos_y:288,width:40,size:153},
                {pos_x:2550,pos_y:288,width:40,size:153},
                {pos_x:2425,pos_y:288,width:40,size:153},
        
            ];
    
    mountains = [
                    {Pos_x:-1500,Pos_y:390},
                    {Pos_x:-1000,Pos_y:390},
                    {Pos_x:-500,Pos_y:390},
                    {Pos_x:10,Pos_y:390},
                    {Pos_x:500,Pos_y:390},
                    {Pos_x:1000,Pos_y:390},
                    {Pos_x:1550,Pos_y:390},
                    {Pos_x:2000,Pos_y:390},
                    {Pos_x:2500,Pos_y:390},
                   

                ];
    
    collectables = [
                       {x_pos:-1120, y_pos: 315, size: 20, isFound:false},
                       {x_pos:-230, y_pos: floorPos_y - 310, size: 20, isFound:false},
                       {x_pos:-600, y_pos: floorPos_y - 270, size: 20, isFound:false},
                       {x_pos:1020, y_pos: floorPos_y - 310, size: 20, isFound:false},
                       {x_pos:1900, y_pos: floorPos_y - 280, size: 20, isFound:false},
                       {x_pos:1600, y_pos: floorPos_y - 240, size: 20, isFound:false},
                       {x_pos:2420, y_pos: 315, size: 20, isFound:false},
                       
                   ];
    
    canyons = [
           
                   {x_pos:-300,y_pos:422, width: 90},
                   {x_pos:-600,y_pos:422, width: 400},
                   {x_pos:-950,y_pos:422, width: 120},
                   {x_pos:200,y_pos:422, width: 90},
                   {x_pos:700,y_pos:422, width: 525},
                   {x_pos:1300,y_pos:422, width: 90},
                   {x_pos:1550,y_pos:422, width: 500},
                   {x_pos:2150,y_pos:422, width: 120},
              ];
    
    
               
    game_score = 0;
    
    flagpole = {
                 x_pos:2600,
                 isReached: false,
               };
    
    lives -= 1
    
    platforms = []; 
    platforms.push(createPlatform(-700,floorPos_y - 100,50));
    platforms.push(createPlatform(-620,floorPos_y - 160,180));
    platforms.push(createPlatform(-260,floorPos_y - 200,190));
    platforms.push(createPlatform(0,floorPos_y - 135,150));
    platforms.push(createPlatform(500,floorPos_y - 120,120));
    platforms.push(createPlatform(600,floorPos_y - 230,150));
    platforms.push(createPlatform(910,floorPos_y - 200,150));
    platforms.push(createPlatform(1755,floorPos_y - 170,180));
    platforms.push(createPlatform(1460,floorPos_y - 130,190));
    
    
    enemies = [];
    enemies.push(new Enemy(-935,floorPos_y - 10,100))
    enemies.push(new Enemy(-150,floorPos_y - 10,100))
    enemies.push(new Enemy(0,floorPos_y - 10,100))
    enemies.push(new Enemy(1270,floorPos_y - 10,100))
    enemies.push(new Enemy(1475,floorPos_y - 10,100))
    enemies.push(new Enemy(2100,floorPos_y - 10,100))
}

function draw()
{
	background(100, 155, 255); // fill the sky blue
    //grass
	noStroke();
	fill(0,100,0);
	rect(0, floorPos_y - 10, width, height/4 + 10); 
    
    //dirt
    noStroke();
	fill(160,82,45);
	rect(0, floorPos_y + 30, width, height/4 + 10);
    
    push();
    translate(scrollPos,0);

	// Draw clouds.
    drawClouds();
       

	// Draw mountains.
    drawMountains();
        

	// Draw trees.
    drawTrees();
        

	// Draw canyons.
    for(var p = 0; p <canyons.length; p++)
    {
        drawCanyon(canyons[p]);
        checkCanyon(canyons[p]);    
            
    }

    // Draw collectable items.
    for(var l = 0; l<collectables.length;l++)
    {
        if(collectables[l].isFound == false)
        {
            drawCollectable(collectables[l])   
            checkCollectable(collectables[l])
        }
    }
    
    //draw flagpole
    renderFlagpole();
    
    for(var i =0;i< platforms.length;i++)
    {
        platforms[i].draw();
    }
    
    for(var i = 0; i<enemies.length ; i++)
    {
        enemies[i].update();
        enemies[i].draw();
        if(enemies[i].isContact(gameChar_world_x,gameChar_y))
        {
            startGame();
            break;
        }
    }
    
    pop();

	// Draw game character.
	
	drawGameChar();
    
    //draw screen text
    fill(255);
    noStroke();
    //score counter
    text("score: " + game_score,20,20)
    

    //Draw life tokens
    textSize(16);
    text("lives:" ,20,60)
    for(var i=lives;i>0;i--)
    {
        //head
        stroke(0,0,0);
        fill(190,76,232);
        ellipse(50 + (i*35) ,55,30,30);

        //mouth
        stroke(0,0,0)
        fill(120,120,50);
        line(36 +(i*35),60,63+(i*35),60);

        //eyes
        fill(0,0,0);
        //righteye
        ellipse(45 + (i*35),50,5,5);
        fill(0,0,0);
        //lefteye
        ellipse(55 + (i*35),50,5,5);

    }
    // game over and level complete
    if(lives < 1)
    {
        //isRight = false;
        //isLeft = false;
            
        isPlumeting= false;
        fill(0,0,0);
        text("Gameover Press. Space To Continue", 400,250);
        return;
    }


    //flagpole writing
    if(flagpole.isReached == true)
    {
        fill(0,0,0);
        text("Level Complete. Press Space To Continue.", 400,250);
        return;
    }
    

	// Logic to make the game character move or the background scroll.
	if(isLeft)
    {
        if(gameChar_x > width * 0.2)
        {
            gameChar_x -= 5;
        }
        else
        {
            scrollPos += 5;
        }
    }

	if(isRight)
    {
        if(gameChar_x < width * 0.8)
        {
            gameChar_x  += 5;
        }
        else
        {
            scrollPos -= 5; // negative for moving against the background
        }
    }

	// Logic to make the game character rise and fall.
    //falling down
    if(gameChar_y < floorPos_y)
    {
        var isContact = false;
        for(var i=0; i< platforms.length;i++)
        {
                
            if(platforms[i].checkContact(gameChar_world_x,gameChar_y- 7) == true)
            {
                isContact = true;
                break;
            }
        }
        
        if(isContact == false)
            {
                isFalling = true;
                gameChar_y += 5
            }
        else
            {
                isFalling = false;
            }

    }
    else 
    {
        isFalling = false;
    }
    //flagpole logic
    if(flagpole.isReached == false)
    {
        checkFlagpole();
    }
    //lives logic
    if((gameChar_y > height) && (lives > 0))
    {   
        
        startGame();

    }
    
    

	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed()
{
    //retry or next level
    if(flagpole.isReached && key == ' ')
    {
        nextLevel();
        return
    }
    else if(lives == 0 && key == ' ')
    {
        returnToStart();
        return
    }


    if(keyCode == 37)
    {
        isLeft = true;
           
    }
    if(keyCode == 39)
    {
        isRight = true;
            
    }
     
    if(keyCode ==  32 && !isPlumeting && !isFalling)
    {
        isFalling = true;
        gameChar_y -= 150;
            
    }



}

function keyReleased()
{

    if(keyCode == 37)
    {
        isLeft = false;
    }
    if(keyCode == 39)
    {
        isRight = false;
    }
    
    if(keyCode ==  32)
    {
        isFalling = false;
    }


}


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar()
{
	// draw game character
    if(isLeft && isFalling)
    {
        // add your jumping-left code
        //legs
        stroke(0,0,0);
        fill(153,0,76);
        //left leg
        rect(gameChar_x + 4 , gameChar_y - 35, 5 ,25);
        //right leg
        rect(gameChar_x - 10 , gameChar_y - 45, 5 ,25);

        //feet
        stroke(0,0,0);
        fill(200,10,10);
        //leftfoot
        ellipse(gameChar_x + 5, gameChar_y - 10,12,8);
        //rightfoot
        ellipse(gameChar_x - 10, gameChar_y - 20,12,8);

        //arms
        //rightarm
        fill(200,10,10);
        rect(gameChar_x - 14,gameChar_y - 70,5,30);

        //head
        stroke(0,0,0);
        fill(190,76,232);
        ellipse(gameChar_x ,gameChar_y - 45,30,30);

        //leftarm
        fill(200,10,10);
        rect(gameChar_x + 10,gameChar_y - 50,5,30);

        //mouth
        stroke(0,0,0)
        fill(120,120,50);
        line(gameChar_x - 15 ,gameChar_y - 40,gameChar_x, gameChar_y - 40);

        //eyes
        fill(0,0,0);
        //righteye
        ellipse(gameChar_x - 9,gameChar_y - 50,5,5);
        fill(0,0,0);
        //lefteye
        ellipse(gameChar_x - 1,gameChar_y - 50,5,5);


    }
	else if(isRight && isFalling)
    {
        // add your jumping-right code
        //legs
        stroke(0,0,0);
        fill(153,0,76);
        //left leg
        rect(gameChar_x + 4 , gameChar_y - 45, 5 ,25);
        //right leg
        rect(gameChar_x - 10 , gameChar_y - 35, 5 ,25);

        //feet
        stroke(0,0,0);
        fill(200,10,10);
        //leftfoot
        ellipse(gameChar_x + 10, gameChar_y - 20,12,8);
        //rightfoot
        ellipse(gameChar_x - 5, gameChar_y - 10,12,8);

        //leftarm
        fill(200,10,10);
        rect(gameChar_x + 9,gameChar_y - 70,5,30);

        //head
        stroke(0,0,0);
        fill(190,76,232);
        ellipse(gameChar_x ,gameChar_y - 45,30,30);

        //rightarm
        fill(200,10,10);
        rect(gameChar_x - 16,gameChar_y - 50,5,30);

        //mouth
        stroke(0,0,0)
        fill(120,120,50);
        line(gameChar_x ,gameChar_y - 40,gameChar_x + 14, gameChar_y - 40);

        //eyes
        fill(0,0,0);
        ellipse(gameChar_x + 2,gameChar_y - 50,5,5);
        fill(0,0,0);
        ellipse(gameChar_x + 9,gameChar_y - 50,5,5);

    }
    else if(isLeft)
    {
        // add your walking left code
        //legs
        stroke(0,0,0);
        fill(153,0,76);
        //left leg
        rect(gameChar_x + 4 , gameChar_y - 35, 5 ,25);
        //right leg
        rect(gameChar_x - 10 , gameChar_y - 35, 5 ,25);

        //feet
        stroke(0,0,0);
        fill(200,10,10);
        //leftfoot
        ellipse(gameChar_x + 5, gameChar_y - 10,12,8);
        //rightfoot
        ellipse(gameChar_x - 9, gameChar_y - 10,12,8);

        //arms
        //rightarm
        fill(200,10,10);
        rect(gameChar_x - 15,gameChar_y - 50,5,30);

        //head
        stroke(0,0,0);
        fill(190,76,232);
        ellipse(gameChar_x ,gameChar_y - 45,30,30);

        //leftarm
        fill(200,10,10);
        rect(gameChar_x + 10,gameChar_y - 50,5,30);

        //mouth
        stroke(0,0,0)
        fill(120,120,50);
        line(gameChar_x - 15 ,gameChar_y - 40,gameChar_x, gameChar_y - 40);

        //eyes
        fill(0,0,0);
        //righteye
        ellipse(gameChar_x - 9,gameChar_y - 50,5,5);
        fill(0,0,0);
        //lefteye
        ellipse(gameChar_x - 1,gameChar_y - 50,5,5);


    }
	else if(isRight)
    {
        // add your walking right code
        //legs
        stroke(0,0,0);
        fill(153,0,76);
        //left leg
        rect(gameChar_x + 4 , gameChar_y - 35, 5 ,25);
        //right leg
        rect(gameChar_x - 10 , gameChar_y - 35, 5 ,25);

        //feet
        stroke(0,0,0);
        fill(200,10,10);
        //leftfoot
        ellipse(gameChar_x + 10, gameChar_y - 10,12,8);
        //rightfoot
        ellipse(gameChar_x - 5, gameChar_y - 10,12,8);

        //leftarm
        fill(200,10,10);
        rect(gameChar_x + 9,gameChar_y - 50,5,30);

        //head
        stroke(0,0,0);
        fill(190,76,232);
        ellipse(gameChar_x ,gameChar_y - 45,30,30);

        //rightarm
        fill(200,10,10);
        rect(gameChar_x - 16,gameChar_y - 50,5,30);

        //mouth
        stroke(0,0,0)
        fill(120,120,50);
        line(gameChar_x ,gameChar_y - 40,gameChar_x + 14, gameChar_y - 40);

        //eyes
        fill(0,0,0);
        ellipse(gameChar_x + 2,gameChar_y - 50,5,5);
        fill(0,0,0);
        ellipse(gameChar_x + 9,gameChar_y - 50,5,5);

    }
    else if(isFalling || isPlumeting)
    {
        // add your jumping facing forwards code
        //legs
        stroke(0,0,0);
        //fill(150,55,5);
        fill(153,0,76);
        rect(gameChar_x + 4 , gameChar_y - 45, 5 ,25);
        rect(gameChar_x - 10 , gameChar_y - 45, 5 ,25);

        //feet
        stroke(0,0,0);
        fill(200,10,10);
        //left foot
        ellipse(gameChar_x + 8, gameChar_y - 15,12,8);
        //right foot
        ellipse(gameChar_x - 7, gameChar_y - 15,12,8);

        //arms
        //right arm
        fill(200,10,10);
        rect(gameChar_x - 20,gameChar_y - 70,5,30);
        //left left
        rect(gameChar_x + 14,gameChar_y - 70,5,30);

        //head
        stroke(0,0,0);
        fill(190,76,232);
        ellipse(gameChar_x ,gameChar_y - 45,30,30);

        //mouth
        stroke(0,0,0)
        fill(120,120,50);
        line(gameChar_x - 15 ,gameChar_y - 40,gameChar_x + 14, gameChar_y - 40);

        //eyes
        fill(0,0,0);
        ellipse(gameChar_x - 5,gameChar_y - 50,5,5);
        fill(0,0,0);
        ellipse(gameChar_x + 5,gameChar_y - 50,5,5);

    }
	else
    {
        // add your standing front facing code
        //legs
        stroke(0,0,0);
        fill(153,0,76);
        rect(gameChar_x + 4 , gameChar_y - 35, 5 ,25);
        rect(gameChar_x - 10 , gameChar_y - 35, 5 ,25);

        //feet
        stroke(0,0,0);
        fill(200,10,10);
        //leftfoot
        ellipse(gameChar_x + 8, gameChar_y - 10,12,8);
        //rightfoot
        ellipse(gameChar_x - 7, gameChar_y - 10,12,8);

        //arms
        //rightarm
        fill(200,10,10);
        rect(gameChar_x - 20,gameChar_y - 50,5,30);
        //leftarm
        rect(gameChar_x + 14,gameChar_y - 50,5,30);

        //head
        stroke(0,0,0);
        fill(190,76,232);
        ellipse(gameChar_x ,gameChar_y - 45,30,30);

        //mouth
        stroke(0,0,0)
        fill(120,120,50);
        line(gameChar_x - 15 ,gameChar_y - 40,gameChar_x + 14, gameChar_y - 40);

        //eyes
        fill(0,0,0);
        //righteye
        ellipse(gameChar_x - 5,gameChar_y - 50,5,5);
        fill(0,0,0);
        //lefteye
        ellipse(gameChar_x + 5,gameChar_y - 50,5,5);

    }
}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.
function drawClouds()
{
    for (var j = 0; j <clouds.length;j++)
    {
        //CLOUD
        noStroke();
        fill(255,255,255);
        //topside
        ellipse(clouds[j].Pos_x,
                clouds[j].Pos_y,
                clouds[j].size,
                clouds[j].size);

        ellipse(clouds[j].Pos_x+100,
                clouds[j].Pos_y,
                clouds[j].size,
                clouds[j].size);

        ellipse(clouds[j].Pos_x+50,
                clouds[j].Pos_y,
                clouds[j].size,
                clouds[j].size);
        //bottomside
        ellipse(clouds[j].Pos_x,clouds[j].Pos_y + 50,
                clouds[j].size - 25,
                clouds[j].size - 25);

        ellipse(clouds[j].Pos_x+100,
                clouds[j].Pos_y + 50,
                clouds[j].size - 25,
                clouds[j].size - 25);

        ellipse(clouds[j].Pos_x+50,
                clouds[j].Pos_y + 50,
                clouds[j].size - 25,
                clouds[j].size - 25);
    }
}
// Function to draw mountains objects.
function drawMountains()
{
    for (var k = 0; k<mountains.length;k++)
    {
        //Mountain
        //big mountain
        fill(105,105,105,250);
        stroke(105,105,105,250);
        triangle(mountains[k].Pos_x,
                 mountains[k].Pos_y + 32,
                 mountains[k].Pos_x+ 300,
                 mountains[k].Pos_y + 32,
                 mountains[k].Pos_x + 140,
                 mountains[k].Pos_y - 300);

        //small mountain
        fill(128,128,128,260);
        stroke(128,128,128,260);
        triangle(mountains[k].Pos_x + 200,
                 mountains[k].Pos_y + 32,
                 mountains[k].Pos_x+ 400,
                 mountains[k].Pos_y + 32,
                 mountains[k].Pos_x + 300,
                 mountains[k].Pos_y - 210);
        
    }
}
// Function to draw trees objects.
function drawTrees()
{
    for (var i = 0; i<trees.length; i++)
    {
        //TREE
        noStroke();
        fill(160,82,42);
        rect(trees[i].pos_x+55,
             trees[i].pos_y - 18,
             trees[i].width,
             trees[i].size);

        fill(0,100,0);

        triangle(trees[i].pos_x + 30,
                 trees[i].pos_y + 50,
                 trees[i].pos_x + 125,
                 trees[i].pos_y + 50,
                 trees[i].pos_x + 75,
                 trees[i].pos_y - 100);

        triangle(trees[i].pos_x + 25,
                 trees[i].pos_y,
                 trees[i].pos_x + 125,
                 trees[i].pos_y,
                 trees[i].pos_x+ 75,
                 trees[i].pos_y - 100);
    }
}

// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{
    noStroke();
    //fill(156,3,3);
    //outside section of canyon
    fill(128,0,0)
    rect(t_canyon.x_pos,
         t_canyon.y_pos,
         t_canyon.width,160);
    
    
    //inside section of canyon
    fill(128,15,15)
    rect(t_canyon.x_pos + 10,
         t_canyon.y_pos + 10,
         t_canyon.width - 20 ,160)

}

// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{
    if((gameChar_world_x > t_canyon.x_pos && 
        gameChar_world_x < t_canyon.x_pos + t_canyon.width) && 
        (gameChar_y >= floorPos_y))
    {   
        
        isPlumeting = true;
    }
    
    if(isPlumeting == true)
    {
        gameChar_y += 1;
        
    }
}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable)
{
    
    //COLLECTABLE ITEM
    //cherry sapling
    stroke(165,42,42)
    line(t_collectable.x_pos-5,
         t_collectable.y_pos+100,
         t_collectable.x_pos+10,
         t_collectable.y_pos+75);

    line(t_collectable.x_pos+10,
         t_collectable.y_pos+75,
         t_collectable.x_pos+25,
         t_collectable.y_pos+100);

    //cherry
    stroke(220,20,60);
    fill(220,20,60);

    ellipse(t_collectable.x_pos-8,
            t_collectable.y_pos+100,
            t_collectable.size,
            t_collectable.size);

    ellipse(t_collectable.x_pos+28,
            t_collectable.y_pos+100,
            t_collectable.size,
            t_collectable.size);


}

// Function to check character has collected an item.

function checkCollectable(t_collectable)
{
    if(dist(gameChar_world_x, gameChar_y,t_collectable.x_pos,t_collectable.y_pos)<t_collectable.size + 100)
    {
        t_collectable.isFound = true;
        game_score += t_collectable.size;
            
    }

}

function renderFlagpole()
{
    push();
    stroke(150);
    strokeWeight(5);
    line(flagpole.x_pos,
         floorPos_y - 14,
         flagpole.x_pos,floorPos_y - 250);
    noStroke();
    fill(72,61,139)
    rect(flagpole.x_pos - 50,floorPos_y - 30, 105, 21)

    if(flagpole.isReached)
    {
        
        //flag background
        fill(0,0,0)
        rect(flagpole.x_pos,floorPos_y - 255,55,50)
        
        //enemy head
        strokeWeight(3);
        fill(25,25,112);
        rect(flagpole.x_pos + 2,floorPos_y - 250, 50,40)
        
        //flag enemy eyes
        fill(0,0,0);
        strokeWeight(3);
        ellipse(flagpole.x_pos + 18, floorPos_y - 235, 10,10)
        ellipse(flagpole.x_pos + 35, floorPos_y - 235, 10,10)
        
        //flag enemy eyebrows
        fill(0,0,0);
        stroke(0,0,0);
        strokeWeight(3);
        line(flagpole.x_pos + 10,floorPos_y - 243,flagpole.x_pos + 18,floorPos_y - 239)
        line(flagpole.x_pos + 34,floorPos_y - 239,flagpole.x_pos + 42,floorPos_y - 243)
        
        //flag enemy mouth
        noFill();
        stroke(0,0,0);
        strokeWeight(3);
        fill(25,25,112);
        beginShape();
        vertex(flagpole.x_pos + 10, floorPos_y - 215);
        vertex(flagpole.x_pos + 14, floorPos_y - 222);
        vertex(flagpole.x_pos + 18, floorPos_y - 215);
        vertex(flagpole.x_pos + 22, floorPos_y - 222);
        vertex(flagpole.x_pos + 26, floorPos_y - 215);
        vertex(flagpole.x_pos + 30, floorPos_y - 222);
        vertex(flagpole.x_pos + 34, floorPos_y - 215);
        vertex(flagpole.x_pos + 38, floorPos_y - 222);
        vertex(flagpole.x_pos + 42, floorPos_y - 215);
        endShape();
    }
    else
    {
        
        //flag background
        fill(0,0,0)
        rect(flagpole.x_pos,floorPos_y - 80,55,50)
        
        //flag enemy head
        strokeWeight(3);
        fill(25,25,112);
        rect(flagpole.x_pos + 2,floorPos_y - 75, 50,40)
        
        //flag enemy eyes
        fill(0,0,0);
        strokeWeight(3);
        ellipse(flagpole.x_pos + 18, floorPos_y - 60, 10,10)
        ellipse(flagpole.x_pos + 35, floorPos_y - 60, 10,10)
        
        //flag enemy eyebrows
        fill(0,0,0);
        stroke(0,0,0);
        strokeWeight(3);
        line(flagpole.x_pos + 10,floorPos_y - 68,flagpole.x_pos + 18,floorPos_y - 64)
        line(flagpole.x_pos + 34,floorPos_y - 64,flagpole.x_pos + 42,floorPos_y - 68)
        
        //flag enemy mouth
        noFill();
        stroke(0,0,0);
        strokeWeight(3);
        fill(25,25,112);
        beginShape();
        vertex(flagpole.x_pos + 10, floorPos_y - 40);
        vertex(flagpole.x_pos + 14, floorPos_y - 47);
        vertex(flagpole.x_pos + 18, floorPos_y - 40);
        vertex(flagpole.x_pos + 22, floorPos_y - 47);
        vertex(flagpole.x_pos + 26, floorPos_y - 40);
        vertex(flagpole.x_pos + 30, floorPos_y - 47);
        vertex(flagpole.x_pos + 34, floorPos_y - 40);
        vertex(flagpole.x_pos + 38, floorPos_y - 47);
        vertex(flagpole.x_pos + 42, floorPos_y - 40);
        endShape();
        
    }
    pop();
}

function checkFlagpole()
{
    var d = abs(gameChar_world_x - flagpole.x_pos);
    
    if(d < 50)
    {
        flagpole.isReached = true;
    }
}

function createPlatform(x,y,length)
{
    var p= {
        x: x,
        y: y,
        length: length,
        draw: function()
        {
            fill(169,169,169);
            stroke(0,0,0);
            rect(this.x,this.y,this.length,20)
            noStroke();
            fill(139,69,19);
            rect(this.x + 3, this.y +3 , this.length - 5, 15)
        },
        
        checkContact: function(gc_x,gc_y)
        {
            //checks wheter game char is incontact with the platform
            if(gc_x > this.x && gc_x< this.x + this.length)
            {
                var d = this.y - gc_y;
                if(d >= 0 && d < 5)
                {
                    return true;
                }

            }
            return false;
        }
    }
    return p;
}

function Enemy(x,y,range)
{
    this.x = x;
    this.y = y;
    this.range = range;
    this.current_x = x;
    this.incr = 2;
    
    this.draw = function()
    {
        //enemy leg
        stroke(0,0,0);
        strokeWeight(2);
        fill(72,61,139);
        rect(this.current_x + 5, this.y - 40 ,10,34)
        rect(this.current_x + 25, this.y - 40 ,10,34)
        
        //enemy arm
        strokeWeight(2);
        fill(72,61,139);
        rect(this.current_x + 40,this.y - 50,8,35)
        rect(this.current_x - 8,this.y - 50,8,35)
        
        //enemy head
        strokeWeight(2);
        fill(25,25,112);
        rect(this.current_x,this.y - 55, 40,30)
        
        //enemy feet
        strokeWeight(2);
        fill(0,0,128);
        ellipse(this.current_x + 11, this.y - 2, 14,10)
        ellipse(this.current_x + 31, this.y - 2, 14,10)
        
        //enemy eye
        fill(0,0,0);
        strokeWeight(2);
        ellipse(this.current_x + 12, this.y - 42, 8,8)
        ellipse(this.current_x + 27, this.y - 42, 8,8)
        
        //eyebrows
        fill(0,0,0);
        stroke(0,0,0);
        strokeWeight(2);
        line(this.current_x + 4,this.y - 50,this.current_x + 15,this.y - 46)
        line(this.current_x + 25,this.y - 46,this.current_x + 35,this.y - 50)
        
        
        //enemy mouth
        noFill();
        stroke(0,0,0);
        strokeWeight(2)
        fill(25,25,112);
        beginShape();
        vertex(this.current_x + 4, this.y - 28);
        vertex(this.current_x + 8, this.y - 35);
        vertex(this.current_x + 12, this.y - 28);
        vertex(this.current_x + 16, this.y - 35);
        vertex(this.current_x + 20, this.y - 28);
        vertex(this.current_x + 24, this.y - 35);
        vertex(this.current_x + 28, this.y - 28);
        vertex(this.current_x + 32, this.y - 35);
        vertex(this.current_x + 36, this.y - 28);
        endShape();
        
        

    }
    
    this.update = function()
    {
        this.current_x += this.incr
        if(this.current_x < this.x)
        {
            this.incr =1;
        }
        else if(this.current_x > this.x + this.range)
        {
            this.incr =-1;
        }
    }
    
    this.isContact = function(gcX,gcY)
    {
        //returns true if contact is made
        var d = dist(gcX,gcY,this.current_x,this.y)
        
        if(d < 25)
        {
            return true;
        }
        return false;
    }
}

