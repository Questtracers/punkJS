class Sfx
{
    constructor(_val)
    {
        this.sound = PIXI.loader.resources[_val].sound;
    }

    play()
    {
        this.sound.play();
    }

    stop()
    {
        this.sound.stop();
    }

    loop()
    {
        this.sound.play({loop : true});
    }
}