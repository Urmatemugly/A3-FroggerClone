// Enemies our player must avoid
let Enemy = function() {
    this.x = 0;
    this.y = 0;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.


    // if enemy is not passed boundary
      // move forward
      // increment x by speed * dt

    // else
      // reset pos to start


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
    this.sprite = 'images/char-boy.png';
    this.step = 101;
    this.jump = 83;
    this.startX = this.step *2;
    this.startY = this.jump * 5;
    this.x = this.startX;
    this.y = this.startY;

  }
  // methods
      // update position
        // check colliison here
          // did player x and y collide with enemy?
          // Check win
          // Did player x and y reach final tile?
      // draw player sprite on current x and y coord position
render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
  // keyboard input
  handleInput(input){
    switch(input) {
      case 'left':
      this.x -= this.step;
      break;
      case 'up':
      this.y -= this.jump;
      break;
      case 'right':
      this.x += this.step;
      case 'down':
      this.y += this.jump;
      break;
    }
  }
          // Update player's x and y property according to input
  // reset hero
          // set x and y to starting x and y


  }



// Now instantiate your objects.


    // new hero object
const player = new Hero();
const bug1 = new Enemy();
const allEnemies = [];
allEnemies.push(bug1);
    // init allenemies Array
    // for each enemy create and push new enemy object into above array


// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



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
});
