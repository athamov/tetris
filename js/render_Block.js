import {CONSTANTS} from './TetrisData.js'

class render_Block {
  constructor(coordinateX, coordinateY, color) {
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
    this.color = color;
  }

  createBlock(coordinateX,coordinateY,color){

  // set fill and stroke styles
  ctx.fillStyle = color;

  // draw a rectangle with fill and stroke
  ctx.fillRect(coordinateX, coordinateY, CONSTANTS.BLOCK_SIZE, CONSTANTS.BLOCK_SIZE);
}

}

export default render_Block;