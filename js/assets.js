function preload() {
	game.load.tilemap('map', 'assets/lv1b.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.image('dungeon', 'assets/dungeon.png');
    game.load.spritesheet('link', 'assets/link2.png', 32, 32);
	game.load.spritesheet('skeleton', 'assets/skeleton64.png', 64, 64);
	game.load.image('dot', 'assets/dot.png');
	game.load.image('attackUp', 'assets/btnAttackUp.png');
	game.load.image('defenseUp', 'assets/btnDefenseUp.png');
	game.load.audio('sfx', 'assets/fx_mixdown.mp3');
}


// var map, layer, dots, fx;

