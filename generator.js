module.exports = (width = 9, height = 6, mines = 15) => {
    //make sure the values aren't dumb
    //comment out these five lines if you don't want it to affect the map with unintended values
    if (width < 4) width = 4;
    if (height < 4) height = 4;
    if (width > 16) width = 16;
    if (height > 16) height = 16;
    while (mines > (width * height) / 2) mines = Math.floor(mines / 2);

    //generate empty map
    var temp = ()=>Array(height).fill(0);
    var map = Array(width).fill(temp).map(f => f());

    //spawn mines
    var x = 0,
        y = 0,
        i = 0;
    while (i < mines) {
        x = Math.floor(Math.random() * width);
        y = Math.floor(Math.random() * height);
        //commented-out part makes sure there are no mines at the top left 2x2 square
        //i added that because this file is ripped from my discord bot and it uses spoilers to hide mines
        if (!map[x][y] /*&& !(x < 2 && y < 2)*/) {
            i++;
            map[x][y] = -1;
        }
    }

    function tileIsAMine(x, y) {
        if (x === -1 || y === -1 || x === width || y === height) return false;
        return map[x][y] === -1;
    }

    //add mine counters
    for (x = 0; x < width; x++) {
        for (y = 0; y < height; y++) {
            if (!map[x][y]) {
                //this seems dumb, but it works!
                [-1, 0, 1].forEach((a) => {
                    [-1, 0, 1].forEach((b) => {
                        map[x][y] += tileIsAMine(x - a, y - b);
                    });
                });
            }
        }
    }

    return map;
};
