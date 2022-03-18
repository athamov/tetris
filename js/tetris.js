// import  CONSTANTS  from './TetrisData.js'
import { render_Block } from './render_Block.js';
import {canvas } from 'canvas'
// render_Block = require('render_Block');
// import gsap from 'gsap';
// import fs from 'fs';
// import express from 'express';

// const app = express();
// const config = express.config

const canvas = window.document.querySelector('#canvas');
    // get the context
let ctx = canvas.getContext('2d'); 

let block1 = new render_Block(30, 30,'red')

block1.createBlock(30,30,"red")

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
