var map, layer, fx, dots, group, player, monsters, cursors;

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

function create() {
	createMap();
	createLayer();
	game.physics.startSystem(Phaser.Physics.ARCADE);
	createSounds();
	createDots();

	group = game.add.group();

	createPlayer();
	createMonsters();

	game.camera.follow(player);
	game.camera.deadzone = new Phaser.Rectangle(96, 96, 192, 84);

	cursors = game.input.keyboard.createCursorKeys();
}

function createMap() {
	map = game.add.tilemap('map');
	map.addTilesetImage('dungeon');
	map.setCollisionBetween(1, 8, true, 'walls');	
}

function createLayer() {
	layer = map.createLayer('walls');
	layer.resizeWorld();
	layer.fixedToCamera = true;	
}

function createSounds() {
	fx = game.add.audio('sfx');
	//fx.allowMultiple = true;
	fx.addMarker('hit', 3, 0.5);
	fx.addMarker('die', 8, 0.5);
	fx.addMarker('dot', 9, 0.1, 0.3);
	fx.addMarker('miss', 19, 0.3);
}

function createDots() {
	dots = game.add.group();
	dots.enableBody = true;
	var remainingDots = map.createFromTiles(9, null, 'dot', 'walls', dots);
}

function createPlayer() {
	group = game.add.group();
	player = new Player(game, 48, 48, "link", group);
	group.add(player);
}

function createMonsters() {
	monsters = game.add.group();
	monsters.name = "monsters";
	for (var i = 0; i < 12; i++) {
		monsters.add(new Monster(game, 144 + i * 64, 144 + i * 64, 'skeleton', monsters));
	}
}
