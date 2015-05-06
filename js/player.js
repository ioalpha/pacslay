Player = function (game, x, y, name) {
	Phaser.Sprite.call(this, game, x, y, name);
	game.physics.arcade.enable(this);
	this.name = "player";
	this.anchor.set(0.5);
	game.physics.arcade.enable(this);
	this.animations.add('up', [0, 1], 10, true);
	this.animations.add('right', [2, 3], 10, true);
	this.animations.add('left', [4, 5], 10, true);
	this.animations.add('down', [6, 7], 10, true);
	this.exp = 0;
	this.nextLevel = 50;
	this.health = 12;
	this.defense = 2;
	this.skill = 2;
	this.attackRate = 500;
	this.attackReady = true;
	this.damageRand = 3;
	this.damageMod = 0;
	this.speed = 150;
	game.add.existing(this);
}

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.damage = function(amount) {
    if (this.alive) {
        this.health -= amount;
        if (this.health <= 0) {
			fx.play("die");
            this.kill();
        }
    }
    return this;
};
