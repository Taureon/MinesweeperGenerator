# MinesweeperGenerator
Generates minesweeper map as a 2d array
```js
const generate = require('./file_location/generator.js');

//generates a map that is 5 tiles wide and 6 tiles high with 10 mines in it.
const map = generate(5, 6, 10);

//checks if tile at x position 2 and y position 4 is a mine (mines are represented by -1)
if (map[2][4] === -1) {
  console.log("Tile is a mine!");
} else {
  console.log("Tile is not a mine!");
}
```
