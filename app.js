/* eslint-disable no-console */
const ambilight = require('ambilight-provider');
const y = require('yeelight');

const yeelight = new y.Yeelight({
  lightIp: '192.168.1.5',
  lightPort: '55443',
});
let red; let green; let blue;

// ambilight.start(500, (color) => {
//   // Doesn't prevent NaNs
//   if (!Number.IsNaN(parseInt(color[0], 10))) {
//     red = parseInt(color[0], 10);
//     green = parseInt(color[1], 10);
//     blue = parseInt(color[2], 10);
//   }
// });

// yeelight.on('connected', () => {
//   console.log('connected');
// });

// Placeholder promise
// const wait = time => new Promise(resolve => setTimeout(resolve, time));

// wait(3000).then(() => {
//   yeelight.connect().then((l) => {
//     setInterval(() => {
//       console.log(`${red}, ${green}, ${blue}`);
//       l.setRGB(new y.Color(red, green, blue), 'smooth', 500);
//     }, 1000);
//   }).catch((err) => {
//     console.log('error!');
//     console.error(err);
//   });
// });
// console.log('Starting');
