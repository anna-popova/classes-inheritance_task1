import {Bowerman, Swordsman, Magician, Undead, Zombie, Daemon} from '../classes';

test('test class for Bowerman', () => {
	const bowerman =  new Bowerman();
	expect(bowerman).toEqual( {"attack": 25, "defence": 25, "level": 1, "life": 100} );
})

test('test class for Swordsman', () => {
	const swordsman =  new Swordsman();
	expect(swordsman).toEqual( {"attack": 40, "defence": 10, "level": 1, "life": 100} );
})

test('test class for Magician', () => {
	const magician =  new Magician();
	expect(magician).toEqual( {"attack": 10, "defence": 40, "level": 1, "life": 100} );
})

test('test class for Undead', () => {
	const undead =  new Undead();
	expect(undead).toEqual( {"attack": 25, "defence": 25, "level": 1, "life": 100} );
})

test('test class for Zombie', () => {
	const zombie =  new Zombie();
	expect(zombie).toEqual( {"attack": 40, "defence": 10, "level": 1, "life": 100} );
})

test('test class for Daemon', () => {
	const daemon =  new Daemon();
	expect(daemon).toEqual( {"attack": 10, "defence": 40, "level": 1, "life": 100} );
})