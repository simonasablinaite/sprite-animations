const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = './shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 5;

const spriteAnimations = [];
const animationStates = [
   {
      name: 'idle',
      frames: 7,
   },
   {
      name: 'jump',
      frames: 7,
   }
];

animationStates.forEach((state, index) => {
   let frames = {
      location: [],
   }

   for (let j = 0; j < state.frames; s++) {
      let positionX = j * spriteWidth;
      let positionY = index * spriteHeight; frames.location.push({ x: positionX, y: positionY });
   }
   spriteAnimations[state.name] = frames;
});

// Cia bus programuojamas animacijos ciklas:
function animate() {
   // Nereikalingu spalvu pasalinimas is canva tarp kiekvieno animacijos kadro
   context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
   // Nustatomas kadras Y i 0:
   let position = Math.floor(gameFrame / staggerFrames) % 6;
   frameX = spriteWidth * position;


   // PRADEDAME PIESTI:
   // Piesimo metodas priima 3, 5 arba 9 parametrus, priklausomai kiek norima valdyti vaizda:
   context.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

   // Metodai, leidziantys pereiti tarp skirtingu animacijos busenu:




   gameFrame++;

   // sukuriamas ir paleidziamas animacijos ciklas:
   requestAnimationFrame(animate);
}
animate();
