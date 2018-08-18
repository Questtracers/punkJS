class Entity extends PIXI.Container {

    constructor()
    {
        super();

        this.graphic = undefined;
        this.pMask = undefined;
        this.pType = undefined;
        this.pLayer = undefined;
    }



    create()
    {
        if (this.graphic === undefined) return;

        if ((this.graphic instanceof PImage) || (this.graphic instanceof Spritemap))
        {
            this.addChild(this.graphic);
            this.setHitbox(this.graphic.width,this.graphic.height);
        }

        else
        {
            this.setHitbox(this.graphic.imgs[0].width, this.graphic.imgs[0].height);
            for (let i=0; i<this.graphic.imgs.length; i+=1)
                this.addChild(this.graphic.imgs[i]);
        }

    };

    update()
    {

    };

    get hitBox()
    {
        let aux = new PIXI.Rectangle;
        aux.x = aux.y = aux.width = aux.height = 0;
        if (this.pMask != null)
        {
            aux.x = this.x + this.pMask.x - this.pMask.originX;
            aux.y = this.y + this.pMask.y - this.pMask.originY;
            aux.width = this.pMask.width;
            aux.height = this.pMask.height;
        }
        return aux;
    };

    pCollide(_hitbox)
    {
        let selfBox = this.hitBox;

        if ((selfBox.x > (_hitbox.x + _hitbox.width)) || ((selfBox.x + selfBox.width) < _hitbox.x)) return false;
        if ((selfBox.y > (_hitbox.y + _hitbox.height)) || ((selfBox.y + selfBox.height) < _hitbox.y)) return false;

        return true;
    }

    pointCollision(_x, _y)
    {
        let selfBox = this.hitBox;
        if ((selfBox.x > (_x + 1)) || ((selfBox.x + selfBox.width) < _x)) return false;
        if ((selfBox.y > (_y + 1)) || ((selfBox.y + selfBox.height) < _y)) return false;
        return true;
    }

    collide(_pType)
    {
        let collided = false;
        for (let i = 0; ((i < FP.World.children.length) && (collided == false)); i +=1)
        {
            if (FP.World.children[i].pType == _pType)
            {
                collided = this.pCollide(FP.World.children[i].hitBox);
            }
        }
        return collided;
    }

    setHitbox(_width, _height, _originX, _originY)
    {
        this.pMask = new hitBox();
        this.pMask.width = _width;
        this.pMask.height = _height;
        this.pMask.originX = _originX || 0;
        this.pMask.originY = _originY || 0;


    //    let maskVisual = FP.CreateRect(_width, _height, 0xFFFFFFF);
    //    maskVisual.alpha = 0.5;
    //    this.addChild(maskVisual);
    }

    removeObject()
    {

        if (this.graphic.imgs != undefined)
        {
            for (let i=0; i < this.graphic.imgs.length; i+=1)
            {
                if (this.graphic.imgs[i].texture != undefined)
                {
                    this.graphic.imgs[i].destroy(true, true, false);
                }
            }
        }
        else
        {
            this.graphic.texture.destroy(true, true, false);
        }

    //    if (this.pMask == null) return;
      //  if (typeof this.pMask.texture != "undefined") this.pMask.texture.destroy(false);
    }
}

class Graphiclist
{
    constructor()
    {
        this.imgs = [];

        for (let i=0; i < arguments.length; i++) {
            this.imgs[i] = arguments[i];
        }
    }
}

class hitBox
{
    constructor()
    {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.originX = 0;
        this.originY = 0;
    }
}