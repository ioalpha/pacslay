Monster = function (game, x, y, name) {
	Phaser.Sprite.call(this, game, x, y, name);
	game.physics.arcade.enable(this);
	this.body.enable = true;
	this.body.setSize(32, 32, 0, 8);
	this.animations.add('idle', [0, 1, 2, 3, 4, 5, 6, 3, 2], 10, true);
	this.animations.play('idle');
	this.name = name;
	this.health = 13;
	this.defense = 1;
	this.skill = 1;
	this.attackRate = 750;
	this.attackReady = true;
	this.damageRand = 2;
	this.damageMod = 0;
	this.anchor.set(0.5);
	this.speed = 40;
	this.direction = "down";
	game.add.existing(this);
};

Monster.prototype = Object.create(Phaser.Sprite.prototype);
Monster.prototype.constructor = Monster;

Monster.prototype.damage = function(amount) {
    if (this.alive) {
        this.health -= amount;
        if (this.health <= 0) {
			fx.play("die");
            this.kill();
        }
    }
    return this;
};
