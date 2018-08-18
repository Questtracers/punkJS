class Explorer extends Entity
{
    constructor()
    {
        super();

        this.graphic = new PImage(Assets.ASSET_EXPLORER);
        this.pType = "explorer";
        Global.explorer = this;

        this.x = 68;
        this.y = 512 / 2 - this.height / 2;
        this.vx = 0;
        this.vy = 0;
    }

    update()
    {
        if ((Input.KeyRelease["down"]) || (Input.KeyRelease["up"]))
            this.vy = 0;

        if ((Input.KeyRelease["right"]) || (Input.KeyRelease["left"]))
            this.vx = 0;

        if (Input.KeyDown["left"])
            this.vx = -5;

        if (Input.KeyDown["right"])
            this.vx = 5;

        if (Input.KeyDown["down"])
            this.vy = 5;

        if (Input.KeyDown["up"])
            this.vy = -5;

        //use the explorer's velocity to make it move
        this.x += this.vx;
        this.y += this.vy;

        //Contain the explorer inside the area of the dungeon
        contain(this, {x: 28, y: 10, width: 488, height: 480});

        if (this.collide("treasure"))
        {
            Global.treasure.x = this.x + 8;
            Global.treasure.y = this.y + 8;
        }

        this.alpha = 1;
        if (this.collide("blob"))
        {
            Global.lifepoints -= 1;
            this.alpha = 0.5;
        }
    };

}