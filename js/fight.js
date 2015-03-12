function tryAttack(defender, attacker) {
	if (attacker.attackReady == true) {
		game.debug.text(attacker.name + " attacks " + defender.name, 400, 40 );
		attacker.attackReady = false;
		game.time.events.add(attacker.attackRate, setAttackReady, this, attacker);
		
		chance = attacker.skill / (defender.defense + attacker.skill);
		if (game.rnd.frac() < chance) {
			damage = game.rnd.between(1, attacker.damageRand) + attacker.damageMod;
			defender.damage(damage);
			fx.play("hit");
			defender.tint = 0xFF4444;
			game.time.events.add(100, clearTint, this, defender);
		} else {
			fx.play("miss");
		}	
	}		
}

function setAttackReady(sprite) {
	sprite.attackReady = true;
}

function clearTint(sprite) {
	sprite.tint = 0xFFFFFF;
}
