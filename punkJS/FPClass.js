class FPClass {
    constructor()
    {
        this._World = undefined;
    }

    CreateRect(_width, _height, _color)
    {
        let rect = new Graphics();
        rect.beginFill(_color)
        rect.drawRect(0, 0, _width, _height);
        rect.endFill();

        return rect;
    }

    get World()
    {
        return this._World;
    }

    set World(_value)
    {
        if (this.World != undefined)
        {
            app.stage.removeChild(this._World);
            this._World.makeEmpty();
        }

        this._World = _value;
        app.stage.addChild(this._World);
    }

    Clone(_source)
    {
        return Object.assign({}, _source);
    }

    randomInt(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

FP = new FPClass();