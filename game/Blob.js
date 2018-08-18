class Blob extends Entity
{

    constructor()
    {
        super();

        this.graphic = new PImage(Assets.ASSET_BLOB);
        this.pType = "blob";

        this.x = 0;
        this.y = 0;
    }



}