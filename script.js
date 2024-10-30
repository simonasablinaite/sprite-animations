const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = './shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 3;

// Cia bus programuojamas animacijos ciklas:
function animate() {
   // Nereikalingu spalvu pasalinimas is canva tarp kiekvieno animacijos kadro
   context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

   // PRADEDAME PIESTI:
   // context.fillRect(50, 50, 100, 100);

   // Piesimo metodas priima 3, 5 arba 9 parametrus, priklausomai kiek norima valdyti vaizda:
   // context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
   context.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

   if (frameX < 6) frameX++;
   else frameX = 0;

   // sukuriamas ir paleidziamas animacijos ciklas:
   requestAnimationFrame(animate);
}
animate();
