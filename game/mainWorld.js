class mainWorld extends World
{
    constructor()
    {
        super();

        //Dungeon
        dungeon = new Dungeon();
        this.add(dungeon);

        //Door
        door = new Door();
        this.add(door);

        //Explorer
        explorer = new Explorer();
        this.add(explorer);

        //Treasure
        treasure = new Treasure();
        this.add(treasure);

        //Make the blobs
        let numberOfBlobs = 6,
            spacing = 48,
            xOffset = 150,
            speed = 2,
            direction = 1;

        //An array to store all the blob monsters
        this.blobs = [];

        //Make as many blobs as there are `numberOfBlobs`
        for (let i = 0; i < numberOfBlobs; i++) {

            //Make a blob
            let blob = new Blob();

            //Space each blob horizontally according to the `spacing` value.
            //`xOffset` determines the point from the left of the screen
            //at which the first blob should be added
            let x = spacing * i + xOffset;

            //Give the blob a random y position
            let y = FP.randomInt(0, 512 - blob.height);

            //Set the blob's position
            blob.x = x;
            blob.y = y;

            //Set the blob's vertical velocity. `direction` will be either `1` or
            //`-1`. `1` means the enemy will move down and `-1` means the blob will
            //move up. Multiplying `direction` by `speed` determines the blob's
            //vertical direction
            blob.vy = speed * direction;

            //Reverse the direction for the next blob
            direction *= -1;

            //Push the blob into the `blobs` array
            this.blobs.push(blob);

            //Add the blob to the `gameScene`
            this.add(blob);
        }

    }

    update()
    {
        super.update();

        //Loop through all the sprites in the `enemies` array
        this.blobs.forEach(function(blob) {

            //Move the blob
            blob.y += blob.vy;

            //Check the blob's screen boundaries
            let blobHitsWall = contain(blob, {x: 28, y: 10, width: 488, height: 480});

            //If the blob hits the top or bottom of the stage, reverse
            //its direction
            if (blobHitsWall === "top" || blobHitsWall === "bottom") {
                blob.vy *= -1;
            }
        });
    }
}