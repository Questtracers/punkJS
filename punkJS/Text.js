class PText extends PIXI.Text
{
    constructor(_text, _wiidth, _height)
    {
        super(_text);

        if (_wiidth != undefined) this.width = _wiidth;
        if (_height != undefined) this.height = _height;
    }

    configSet(_font, _fontsize, _align, _color, _filters)
    {
        let pstrokeThickness = 0,
            strokeColor = 'black',
            pdropshadow = false,
            dropshadowAlpha = 1,
            dropshadowAngle = Math.Pi/6,
            dropshadowBlur = 0,
            dropshadowColor = 'black',
            palign = _align;

        if (_filters != undefined)
        {
            for (let i=0; i < _filters.length; i++)
            {
                if (_filters[i] instanceof StrokeFilter)
                {
                    pstrokeThickness = _filters[i].thickness;
                    strokeColor = _filters[i].color;
                }
                else if (_filters[i] instanceof shadowFilter)
                {
                    pdropshadow = true;
                    dropshadowAlpha = _filters[i].alpha;
                    dropshadowAngle = _filters[i].angle;
                    dropshadowBlur = _filters[i].pblur;
                    dropshadowColor = _filters[i].color;
                }
            }
        }

        this.style = new PIXI.TextStyle
        (
            {
                fontFamily: _font,
                fontSize: _fontsize || 10,
                fill: _color || "white",
                align : palign || 'left',
                dropShadow: pdropshadow,
                dropShadowAlpha: dropshadowAlpha,
                dropShadowAngle: dropshadowAngle,
                dropShadowColor: dropshadowColor,
                wordWrap : true,
                wordWrapWidth : this.width,
                stroke : strokeColor,
                strokeThickness : pstrokeThickness
            }
        );

    }

    copyStyle(_text)
    {
        this.style = _text.style;
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


class StrokeFilter
{
    constructor(_color, _thickness)
    {
        this.color = _color || "black";
        this.thickness = _thickness || 1;
    }
}

class shadowFilter
{
    constructor(_distance, _angle, _color, _alpha, _blur)
    {
        this.distance = _distance;
        this.angle = _angle;
        this.color = _color;
        this.alpha = _alpha;
        this.pblur = _blur;
    }
}