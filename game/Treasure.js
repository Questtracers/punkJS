class Treasure extends Entity
{

    constructor()
    {
        super();

        this.graphic = new PImage(Assets.ASSET_TREASURE);
        this.pType = "treasure";
        Global.treasure = this;

        this.x = 512 - this.width - 48;
        this.y = 512 / 2 - this.height / 2;
    }

    update()
    {
        if (this.collide("door"))
        {
            FP.World = new endWorld("You won!");
        }
    }

}