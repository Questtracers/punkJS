class Spritemap extends PIXI.extras.AnimatedSprite
{
    constructor(_var, _width, _height, imgRow, imgColum)
    {
        let framesInitial = [];
        let baseTexture = PIXI.loader.resources[_var].texture;

        let _imgRow = baseTexture.height / _height;
        let _imgColum = baseTexture.width / _width;

        for (let row=0; row<_imgRow; row+=1) {
            for (let colum = 0; colum<_imgColum; colum+=1) {
                let textureto = new PIXI.Texture(baseTexture, new PIXI.Rectangle(colum * _width, row * _height, _width, _height));
                framesInitial.push(textureto);
            }
        }

        super(framesInitial);

        this.frames = framesInitial;

        this.animList = [];
        this.animFrames = [];
        this.animRate = [];
        this.animLoop = [];

        this.actualFrames = [0];
        this.actualAnim = "null";

        this.x = 0;
        this.y = 0;
        this.originX = 0;
        this.originY = 0;

        this.scaleX = 1;
        this.scaleY = 1;
        this.pScale = 1;
        this.complete = false;
        this._frame = 0;

        this.angle = 0;
    }



    add(_name, _frames, _rate, _loop)
    {
        this.animList.push(_name);
        this.animFrames.push(_frames);
        this.animRate.push(_rate/20);
        this.animLoop.push(_loop || false);
    }

    play(_anim, _forced)
    {
        let forced = _forced || false;

        if ((_anim == this.actualAnim) && (!forced)) return false;
        this.complete = false;

        let pos = -1;
        for (let a=0; (a<this.animList.length && pos == -1); a+=1) {
            if (_anim == this.animList[a]) pos = a;
        }

        if (pos == -1) return false;
        this.actualFrames = this.animFrames[pos];
        this.animationSpeed = this.animRate[pos];
        this.loop = this.animLoop[pos];
        this.playing = true;
        this.actualAnim = _anim;
        this.pcurrentFrame = 0;
    }

    set color(_value)
    {
        if (this.actualColor != _value)
        {
            this.tint = _value;
            this.actualColor = _value;
        }
    }

    get currentAnim()
    {
        return this.actualAnim;
    }

    get index()
    {
        return this.pcurrentFrame;
    }

    set frame(_value)
    {
        this._frame = _value;
        this.gotoAndStop(this._frame);
    }

    get frame()
    {
        return (this._frame);
    }

    set angle(_value)
    {
        this.rotation = _value * (Math.PI / 180);
    }

    get angle()
    {
        return (this.rotation * (180 / Math.PI));
    }

    setTexture(_text)
    {
        this.texture = _text;
    }

    updateTransform()
    {

        if(!this.playing) return;

        this.pcurrentFrame += this.animationSpeed;

        let round = (this.pcurrentFrame + 0.5) | 0;

        if(this.loop || round < this.actualFrames.length)
        {
            this._frame = this.actualFrames[round % this.actualFrames.length];
            if (this._frame < 0)
                this.setTexture(this.textures[0]);
            else
                this.setTexture(this.textures[this._frame]);

        }
        else if(round >= this.actualFrames.length)
        {
            this._frame = this.actualFrames[this.actualFrames.length-1];
            if (this._frame < 0)
                this.gotoAndStop(0);
            else
                this.gotoAndStop(this._frame);

            this.complete = true;
            if(this.onComplete)
            {
                this.onComplete();
            }
        }


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

}