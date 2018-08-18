class Door extends Entity
{
    constructor()
    {
        super();

        this.graphic = new PImage(Assets.ASSET_DOOR);
        this.pType = "door";

        this.x = 32;
        this.y = 0;
    }
}