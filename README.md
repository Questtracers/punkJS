# punkJS

For the ones interested, this is a flashpunk based JS framework that uses Pixi as a renderer. You can use it for your projects without no restriction. But it will be highly desirable that:

- You give credit to the engine
- You push your code changes to the branch

While this is engine has not been used in any of my projects as it is right now, an older version of it based in Pixi v1 was used to create these two games:

- COSMOLICIOUS : https://www.youtube.com/watch?v=bF7bKiGzLQE
(The game is broken due to some original licensors site error and im not linking pirated versions of the game, but the game still works after 2 years)
- Prom Queen Sim : http://www.girlsgogames.com/game/prom-queen-sim

Pixi JS is the faster html5 renderer and its the core of the framework, so the best thing to support punkJS is to support them
Website: http://www.pixijs.com/
Patreon: https://www.patreon.com/user/overview?u=2384552

Flashpunk was areally cool as3 engine
http://useflashpunk.net/

Cool Punk JS features:
- Each scene is a world, changing the world by FP.World = (the new world) will destroy the previous world and will free the memory used by the textures
- Each interactuable element is an entity, you add them to the world by world.add(entity)
- Each entity has an update function that is the function that is repeated in the game loop
- Each entity can have several graphics assigned and they work as a group, this.graphic is the variable that controls it
- You can add text, spritemaps and PImages to the graphic list

- Flashpunk Spritemap class : That allows the user to control the frames and animations in a very friendly way

        this.lula = new Spritemap(Assets.LULA_OK, 150, 160);
        this.lula.add("play",[0,1,2,3,4,5,6,7,8,9,10,11,12,13],1,true);
        this.lula.play("play");

The constructor generates the frames using the provided width and height of each frame and the asset

You can add several animations with several frame sequences using the same spritemap. 
add(name of the anim, frame sequence of the anim, animation speed, is loopabble?)

- Flashpunk collision management : 

You can assign one or several entities as a type
this.type = "enemy"

And detect that specific collision in the hero very easily

        if (this.collide("enemy"))
        {
            Global.lifepoints -= 1;
            this.alpha = 0.5;
        }
      
The collision is generated automatically when you assign the image to the entity this.graphic

- Fashpunk input: 
you have several variables to control the touches and mouse
Input.mousePressed
Input.mouseDown
Input.mouseReleased

To detect a click in an entity each entity has a pointCollision(x,y) function
Limited keyboard support for the momment

------

Development disclaimer:
- I will update the framework to add the stuff that i will use in my future games so dont expect full flashpunk support unless its not done by contributors or required by my games.
- At some point I will add a more advanced collision system (more advanced than the flashpunk one) that I did for a previous game
- Possible new little changes in the future cause im porting Puzzle Cross Pirates right now so expect new stuff in order to be able to make ios, android, amazon apps soon

https://www.questtracers.com/
