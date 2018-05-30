//
//Frogger Game App
//

let allEnemies = []; //an array for all enemies
let player = new Player(); //creating a new player
let interval = 100; //setting the interval for when new enemies appear

heading = document.createElement('h1');
document.body.appendChild(heading);
heading.innerHTML = `Arcade Game Clone`;


stats = document.createElement('h3');
document.body.appendChild(stats);       //displays the game statistics


//Defines the Enemy Object
function Enemy(x, y, speed) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
}

// Updates the enemy's position
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // the movement of the enemy is multiplied by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
};

// Draws the enemy on the screen
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


//function to create new enemies
function manageEnemies() {
    interval += (Math.floor((Math.random() * 5) + 1));
    var possibleLoc = [60, 143, 226];
    if (interval >= 100) {
        allEnemies.push(new Enemy(-101, possibleLoc[(Math.floor((Math.random() * 3) + 0))], (Math.floor((Math.random() * 500) + 100))));
        interval = 0;
    }
    if (allEnemies.length > 15) {
        allEnemies.shift();
    }
}

//Checks if the player and enemy collide based on their coordinate positions and sizes
//credit to: https://stackoverflow.com/questions/2440377/javascript-collision-detection
Enemy.prototype.collision = function (enemy) {

    var crash = true;
    if ((player.y + 20 < enemy.y) ||
        (player.y > enemy.y + 20) ||
        (player.x + 50 < enemy.x) ||
        (player.x > enemy.x + 50)) {
        crash = false;
    }
    return crash;
}

//Defines the Player object
function Player(x, y) {
    this.xStart = 202;
    this.yStart = 405
    this.x = this.xStart;
    this.y = this.yStart;
    this.score = 0;
    this.lives = 3;
    this.sprite = 'images/char-princess-girl.png'

    //checking for the position of the player, when on the other side
    //the player's position is resetted and its score raised and updated
    this.update = function () {
        if (this.y < 73) {
            initGame();
            changeScore(100);
        }
        stats.innerHTML = `Points: ${player.score} Lives: ${player.lives}`;
    };

    //drawing the players position on the screen
    this.render = function () {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

    //defining the players movement based on the pressed keys
    this.handleInput = function (pressedKey) {
        switch (pressedKey) {
            case 'left':
                this.x >= 101 ? this.x += -101 : '';
                break;
            case 'up':
                this.y >= 73 ? this.y += -83 : '';
                break;
            case 'right':
                this.x <= 303 ? this.x += +101 : '';
                break;
            case 'down':
                this.y < 405 ? this.y += 83 : '';
                break;
        }
    };
}

//initialises a new round by resetting the players position
function initGame() {
    player.x = player.xStart;
    player.y = player.yStart;
}


//updates the players score
function changeScore(points) {
    player.score += points;
}

//updates the players lives. If none are left, the game is over
function changeLives(lives) {
    player.lives += lives;
    if (player.lives === 0) {
        gameOver();
    }
}


//when the game is over a message with the score is alerted before the player, and its score and lives variables
//are set to their initial values
function gameOver() {
    alert(`Sorry, game over! You scored ${player.score} points. Let's see if you can do even better!`);
    initGame();
    player.score = 0;
    player.lives = 3;
}


// listens for key presses and sends the keys to the
// Player.handleInput() method.
document.addEventListener('keyup', function (e) {
    e.preventDefault();
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


//Prevent window scrolling on using key presses, credit to:
//https://stackoverflow.com/questions/8916620/disable-arrow-key-scrolling-in-users-browser/8916697
window.addEventListener("keydown", function (e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
