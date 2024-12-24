import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// Starts the server and logs a message when it’s running
server.listen(3000, '127.0.0.1', () => {
  console.log('Server is running on http://127.0.0.1:3000');
});

function randomSanta() {
  const card = document.getElementById('card');
  const santaImage = document.getElementById('cardCover');

  // Check if santaImage exists
  if (santaImage) {
    // Add a random background image from the "assets/images/images-santa" folder
    const randomSantaImages = [
      'images-santa/santa-brown.jpg',
      'images-santa/santa-gifts.jpg',
      'images-santa/santa-magic.jpg',
      'images-santa/santa-pipe.jpg',
      'images-santa/stampa.jpg',
      'images-santa/two-santas.jpg'
    ];

    const randomSantaImage = randomSantaImages[Math.floor(Math.random() * randomSantaImages.length)];

    santaImage.style.backgroundImage = `url("/assets/images/images-santa/${randomSantaImage}")`;

    card.classList.toggle('open');
  }
}


  