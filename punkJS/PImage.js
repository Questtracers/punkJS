class PImage extends PIXI.Sprite{

    constructor(_texture)
    {
        super(PIXI.loader.resources[_texture].texture)
    }

    set originX(_value)
    {
        this.anchor.x = _value / this.width;
    }

    set originY(_value)
    {
        this.anchor.y = _value / this.height;
    }

    get originX()
    {
        return (this.anchor.x * this.height);
    }

    get originY()
    {
        return (this.anchor.y * this.width);
    }

    centerOrigin()
    {
        this.anchor.x = this.anchor.y = 0.5;
    }

    set angle(_value)
    {
        this.rotation = _value * (Math.PI / 180);
    }

    get angle()
    {
        return (this.rotation * (180 / Math.PI));
    }
}