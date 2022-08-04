export default class Character {
	constructor(attack, defence) {
		this.level = 1;
		this.life = 100;
		this.attack = attack;
		this.defence = defence;
	}

	levelUp() {
		if (this.life !== 0) {
			this.level += 1;
			this.attack = (this.attack * 0.2) + this.attack;
			this.defence = (this.defence * 0.2) + this.defence;
			this.life = 100;
		} else {
			console.log('Уровень жизни равен 0. Нельзя повысить левел умершего');
		}
	}
}
