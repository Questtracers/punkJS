class World extends PIXI.Container
{
    constructor()
    {
        super();
        this.toBeDestroyed = false;
    }

    add(_val)
    {
        if (_val.create != undefined)_val.create();
        console.log("something added");
        console.log(_val);
        this.addChildAt(_val, this.children.length);
    }

    makeEmpty()
    {
        this.toBeDestroyed = true;
    }

    update()
    {
        if (this.toBeDestroyed == true)
        {
            while (this.children.length > 0)
            {
                this.children[this.children.length - 1].removeObject();
                this.children.pop();
            }
        }
        else
        {
            for (let i=0; i<this.children.length; i+=1)
            {
                if (this.children[i].update != undefined)
                    this.children[i].update();
            }
        }
    }

}