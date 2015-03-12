function checkLevelUp() {
	if (player.exp >= player.nextLevel) {
		levelUp = true;
		player.exp -= player.nextLevel;
		player.nextLevel = Math.trunc(player.nextLevel * 1.2);
		
		buttons = game.add.group();
		
		var buttonAttackUp = game.add.button(64, 64, 'attackUp', attackUp, this);
		buttonAttackUp.fixedToCamera = true;
		buttons.add(buttonAttackUp);
		
		var buttonDefenseUp = game.add.button(192, 64, 'defenseUp', defenseUp, this);
		buttonDefenseUp.fixedToCamera = true;
		buttons.add(buttonDefenseUp);
	}
}

function attackUp(button) {
	player.skill += 1;
	buttons.destroy();
}

function defenseUp(button) {
	player.defense += 1;
	buttons.destroy();
}

