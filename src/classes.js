class Character {
	constructor(attack, defence) {
		this.level = 1;
		this.life = 100;
		this.attack = attack;
		this.defence = defence;
	}
}

export class Bowerman extends Character {
	attack = 25;
	defence = 25;
}

export class Swordsman extends Character {
	attack = 40;
	defence = 10;
}

export class Magician extends Character {
	attack = 10;
	defence = 40;
}

export class Undead extends Character {
	attack = 25;
	defence = 25;
}

export class Zombie extends Character {
	attack = 40;
	defence = 10;
}

export class Daemon extends Character {
	attack = 10;
	defence = 40;
}