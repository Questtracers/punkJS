class endWorld extends World
{
    constructor(_text)
    {
        super();

        let strokeFilter = new StrokeFilter('white', 5);
        let shadow = new shadowFilter(2,45,'blue',0.6,2);

        let textoMundo = new PText(_text);
        textoMundo.configSet("Futura", 64, 'center', 'green',[strokeFilter, shadow]);
        textoMundo.x = 120;
        textoMundo.y = 520/2;

        this.add(textoMundo);

        this.music = new Sfx(Assets.MUSIC);
        this.music.play();
    }

    update()
    {
        if (Input.KeyDown["space"])
            FP.World = new mainWorld();
    }
}