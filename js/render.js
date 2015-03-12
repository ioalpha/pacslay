function render() {
	game.debug.text("exp: " + player.exp, 20, 20);
	game.debug.text("hp: " + player.health, 120, 20);
	game.debug.text("att: " + player.skill, 220, 20);
	game.debug.text("def: " + player.defense, 320, 20);
	game.debug.text("dam: " + (1 + player.damageMod) + "-" + (player.damageRand + player.damageMod), 420, 20);
	game.debug.text("rate: " + (player.attackRate / 1000), 520, 20);
	game.debug.text("monster count: " + monsters.total, 650, 20);
	
	game.debug.text("next Level: " + (player.nextLevel - player.exp), 20, 40);
	//game.debug.bodyInfo(monsters.getAt(0), 20, 40);
	game.debug.body(monsters);
	for (var i = 0; i < monsters.total; i++) {
		var m = monsters.getAt(i);
		//game.debug.text(m.name, 20, i * 20 + 40);
		game.debug.body(m);
	}
	game.debug.body(player);
}
