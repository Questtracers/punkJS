class PInput {
    constructor() {

        this.mousePressed = false;
        this.mouseDown = false;
        this.mouseReleased = false;

        this.KeyDown = {

            up : false,
            down : false,
            left : false,
            right : false,
            space : false

        };

        this.KeyPress = FP.Clone(this.KeyDown);
        this.KeyRelease = FP.Clone(this.KeyDown);

        return this;
    }

    init()
    {
        app.stage.interactive = true;
        app.stage.on("pointerdown",function () { Input.mouseDown = true; Input.mousePressed = true; });
        app.stage.on("pointerup",function () { Input.mouseReleased = true; Input.mouseDown = false; });

        //Capture the keyboard arrow keys
        let left = keyboard(37),
            up = keyboard(38),
            right = keyboard(39),
            down = keyboard(40),
            space = keyboard(32);

        left.press = function () { console.log("left"); Input.KeyDown["left"] = true; Input.KeyPress["left"] = true; };
        left.release = function () { Input.KeyDown["left"] = false; Input.KeyRelease["left"] = true; };
        right.press = function () { Input.KeyDown["right"] = true; Input.KeyDown["right"] = true; };
        right.release = function () { Input.KeyDown["right"] = false; Input.KeyRelease["right"] = true; };
        up.press = function () { Input.KeyDown["up"] = true; Input.KeyPress["up"] = true; };
        up.release = function () { Input.KeyDown["up"] = false; Input.KeyRelease["up"] = true; };
        down.press = function () { Input.KeyDown["down"] = true; Input.KeyPress["down"] = true; };
        down.release = function () { Input.KeyDown["down"] = false; Input.KeyRelease["down"] = true; };
        space.press = function () { Input.KeyDown["space"] = true; Input.KeyPress["space"] = true; };
        space.release = function () { Input.KeyDown["space"] = false; Input.KeyRelease["space"] = true; };

        //The `keyboard` helper function
        function keyboard(keyCode) {
            var key = {};
            key.code = keyCode;
            key.isDown = false;
            key.isUp = true;
            key.press = undefined;
            key.release = undefined;

            //The `downHandler`
            key.downHandler = function(event) {

                if (event.keyCode === key.code) {
                    if (key.isUp && key.press) key.press();
                    key.isDown = true;
                    key.isUp = false;
                }
                event.preventDefault();
            };

            //The `upHandler`
            key.upHandler = function(event) {
                if (event.keyCode === key.code) {
                    if (key.isDown && key.release) key.release();
                    key.isDown = false;
                    key.isUp = true;
                }
                event.preventDefault();
            };

            //Attach event listeners
            window.addEventListener(
                "keydown", key.downHandler.bind(key), false
            );
            window.addEventListener(
                "keyup", key.upHandler.bind(key), false
            );
            return key;
        }
    }

    ResetValues() {
     //   this.mousePressed = false;
     //   this.mouseReleased = false;

        this.KeyPress = {

            up : false,
            down : false,
            left : false,
            right : false,
            space : false

        };

        this.KeyRelease = {

            up : false,
            down : false,
            left : false,
            right : false,
            space : false

        };
    }

    get MouseX()
    {
        return app.renderer.plugins.interaction.mouse.global.x;
    }

    get MouseY()
    {
        return app.renderer.plugins.interaction.mouse.global.y;
    }
}

Input = new PInput();

