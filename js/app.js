// Enemies our player must avoid
let Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x + 35;
    this.y = y;
    this.speed = speed;
    this.skip = 101;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.boundary = this.skip * 5;
    this.resetX = this.x;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < 505) {
      this.x += this.speed * dt;
      }
    if (this.x > 505) {
      this.x = this.resetX
      }
    };

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Hero {
  constructor() {
    this.sprite = 'images/char-boy.png'
    this.hop = 101;
    this.skip = 83;
    this.startX = this.skip * 2 + 35;
    this.startY = (this.hop * 4);
    this.x = this.startX;
    this.y = this.startY;

  }
  update() {
      for (let enemy of allEnemies) {
        if (this.y === enemy.y) {
          console.log('same row');
        }
      }
  }
  // Draw the player to the screen
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  handleInput(input) {
    switch(input) {
      case 'left':
        if (this.x > 50) {
          this.x -= this.skip;
        }
      break;
      case 'up':
        if (this.y > this.hop - 40) {
          this.y -= this.hop;
        }
        else if (this.y < this.hop -40) {
          this.y = this.startY;
        }
      break;
      case 'right':
        if (this.x < this.skip * 4) {
          this.x += this.skip;
        }
      break;
      case 'down':
        if (this.y < this.hop * 4) {
          this.y += this.hop;
        }
      break;
    }
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = [];
// Place the player object in a variable called player
const player = new Hero();
const enemyOne = new Enemy(-1, 55, 200);
const enemyTwo = new Enemy(-1, 130, 300);
const enemyThree = new Enemy(-1, 210, 500);
allEnemies.push(enemyOne, enemyTwo, enemyThree);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
}
);
