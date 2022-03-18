const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(200, 200)
const ctx = canvas.getContext('2d')
let http = require('http');
let fs = require('fs');


// Write "Awesome!"
ctx.font = '30px Impact'
ctx.rotate(0.1)
ctx.fillText('Awesome!', 50, 100)

// Draw line under text
var text = ctx.measureText('Awesome!')
ctx.strokeStyle = 'rgba(0,0,0,0.5)'
ctx.beginPath()
ctx.lineTo(50, 102)
ctx.lineTo(50 + text.width, 102)
ctx.stroke()

// Draw cat with lime helmet
loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png').then((image) => {
  ctx.drawImage(image, 50, 0, 70, 70)

  console.log('<img src="' + canvas.toDataURL() + '" />')
})

let handleRequest = (request, response) => {
  response.writeHead(200, {
      'Content-Type': 'text/html'
  });
  fs.readFile('./index.html', null, function (error, data) {
      if (error) {
          response.writeHead(404);
          respone.write('file not found');
      } else {
          response.write(data);
      }
      response.end();
  });
};

http.createServer(handleRequest).listen(8000);