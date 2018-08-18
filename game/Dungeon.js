class Dungeon extends Entity
{

    constructor()
    {
        super();

        this.innerBar = FP.CreateRect(128, 8, 0x000000);
        this.outerBar = FP.CreateRect(128, 8, 0xFF3300);

        this.lula = new Spritemap(Assets.LULA_OK, 150, 160);
        this.lula.add("play",[0,1,2,3,4,5,6,7,8,9,10,11,12,13],1,true);
        this.lula.play("play");

        let dungeonBack = new PImage(Assets.ASSET_DUNGEON);
        this.pType = "back";
        Global.lifepoints = this.outerBar.width;

        this.graphic = new Graphiclist(dungeonBack, this.innerBar, this.outerBar, this.lula);

        this.innerBar.x = this.outerBar.x = 170;
        this.innerBar.y = this.outerBar.y = 4;

        this.x = 0;
        this.y = 0;
    }

    update()
    {
        this.outerBar.width = Global.lifepoints;

        if (this.outerBar.width <= 0)
        {
            FP.World = new endWorld("Game Over");
        }

        if (Input.mousePressed)
        {
            console.log("pressed");
        }

        if (Input.mouseDown)
        {
            console.log("down");
        }

        if (Input.mouseReleased)
        {
            console.log("Released");
        }
    }

}