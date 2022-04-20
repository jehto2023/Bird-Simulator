// Name: Jennifer To
// Project Title: Bird Simulator
// Date: 4/20/22
// Time it Took: ~12 hours

// Points Breakdown:
// Redesign the game's artwork, UI, and sound to change its theme/aesthetic (60); Changed from arcade game spaceship/space to chill relaxing game bird/forest
// Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20); Bee is smaller, moves faster, and is worth 100 points :-D
// Implement parallax scrolling (10); Background and sky are moving at different speeds
// Display the time remaining (in seconds) on the screen (10); Time displayed top right

// Sources:
// Background - https://opengameart.org/content/mountain-at-dusk-background (NO COPYRIGHT)
// Crow Sound - https://opengameart.org/content/crow-caw (NO COPYRIGHT)
// Background Music - https://youtu.be/8Th4BWkfFDE (NO COPYRIGHT)
// Shimmer Sound - https://opengameart.org/content/shimmer-glitter-magic (ATTRIBUTION REQ.; changed from .flac to .wav)
// Cheri Font - https://www.dafont.com/cheri.font (FREE FOR PERSONAL USE)

// For displaying time, got help from Discord

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;