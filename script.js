var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var platforms;
var player;
var flipper1;
var flipper2;
var game = new Phaser.Game(config);

function preload ()
{
    console.log('got images');
    this.load.image('background', 'imgs/background.png');
    this.load.image('board', 'imgs/arena.png');
    this.load.image('flipper', 'imgs/flipper.png');
    this.load.image('target', 'imgs/hit.png');
    this.load.image('ball', 'imgs/ball.png');
}

function create ()
{
    console.log(this)
    this.add.image(400, 300, 'background');

    platforms = this.physics.add.staticGroup();

    platforms.create(375, 300, 'board').refreshBody();
    platforms.create(300, 200, 'target').setScale(0.25);
    platforms.create(400, 300, 'target').setScale(0.25);
    platforms.create(500, 150, 'target').setScale(0.4);

    flipper1 = this.add.image(330, 520, 'flipper').setScale(0.3);
    flipper2 = this.add.image(440, 510, 'flipper').setScale(0.3);
    flipper2.angle = 160;

    player = this.physics.add.image(445, 100, 'ball');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.physics.add.collider(player, platforms);
    this.physics.add.collider(player, flipper1);

    cursors = this.input.keyboard.createCursorKeys();

}

function update ()
{
    if (cursors.left.isDown) {
        
    }
}