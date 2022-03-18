import { type, wallKicks, BLOCK_SIZE, COLS, ROWS } from './TetrisData'

// import gsap from 'gsap';
// import fs from 'fs';
// import express from 'express';

// const app = express();
// const config = express.config

const canvas = document.querySelector('#canvas');
    // get the context
let ctx = canvas.getContext('2d'); 

function drowCurrentBlock(block) {

}

function createBlock(x,y,color){
  // set fill and stroke styles
  ctx.fillStyle = color;
  // draw a rectangle with fill and stroke
  ctx.fillRect(x, y, 30, 30);
}

createBlock(30,30,"green")

createBlock(60,60,"red")
ctx.clearRect(60,60,30,30);

createBlock(90,60,"blue")

createBlock(120,60,"yellow")


//! keyboard function
// function doKeyDown(evt){
//   switch (evt.keyCode) {
//   case 38:  /* Up arrow was pressed */
//   if (y - dy > 0){
//   y -= dy;
//   }
//   break;
//   case 40:  /* Down arrow was pressed */
//   if (y + dy < HEIGHT){
//   y += dy;
//   }
//   break;
//   case 37:  /* Left arrow was pressed */
//   if (x - dx > 0){
//   x -= dx;
//   }
//   break;
//   case 39:  /* Right arrow was pressed */
//   if (x + dx < WIDTH){
//   x += dx;
//   }
//   break;
//   }
//   }
// window.addEventListener('keydown',doKeyDown,true);
