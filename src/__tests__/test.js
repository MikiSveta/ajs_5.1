import Character from '../js/character';
import Bowman from '../js/bowman';
import Swordsman from '../js/swordsman';
import Magician from '../js/magician';
import Daemon from '../js/daemon';
import Undead from '../js/undead';
import Zombie from '../js/zombie';

describe('Character()', () => {
  test('character = Bowman', () => {
    const character = new Character('Bowman', 'Bowman');
    expect(character).toEqual({
      name: 'Bowman', type: 'Bowman', health: 100, level: 1,
    });
  });

  test('character = Swordsman', () => {
    const character = new Character('Swordsman', 'Swordsman');
    expect(character).toEqual({
      name: 'Swordsman', type: 'Swordsman', health: 100, level: 1,
    });
  });

  test('character = Magician', () => {
    const character = new Character('Magician', 'Magician');
    expect(character).toEqual({
      name: 'Magician', type: 'Magician', health: 100, level: 1,
    });
  });

  test('character = Daemon', () => {
    const character = new Character('Daemon', 'Daemon');
    expect(character).toEqual({
      name: 'Daemon', type: 'Daemon', health: 100, level: 1,
    });
  });

  test('character = Undead', () => {
    const character = new Character('Undead', 'Undead');
    expect(character).toEqual({
      name: 'Undead', type: 'Undead', health: 100, level: 1,
    });
  });

  test('character = Zombie', () => {
    const character = new Character('Zombie', 'Zombie');
    expect(character).toEqual({
      name: 'Zombie', type: 'Zombie', health: 100, level: 1,
    });
  });

  test('check levelUp', () => {
    const character = new Swordsman('Swordsman');
    character.levelUp();
    expect(character).toEqual({
      name: 'Swordsman', type: 'Swordsman', health: 100, level: 2, attack: 48, defence: 12,
    });
  });

  test('error in damage', () => {
    function errorDamage() {
      const character = new Character('Bowman', 'Bowman');
      character.health = -5;
      character.damage(5);
    }
    expect(errorDamage).toThrow(new Error('health задано некорректно'));
  });

  test('check damage', () => {
    const character = new Swordsman('Swordsman');
    character.damage(5);
    expect(character).toEqual({
      name: 'Swordsman', type: 'Swordsman', health: 95.5, level: 1, attack: 40, defence: 10,
    });
  });

  test('error in levelUp ', () => {
    function errorLevelUp() {
      const character = new Character('Swordsman', 'Swordsman');
      character.health = 0;
      character.levelUp();
    }
    expect(errorLevelUp).toThrow(new Error('Нельзя повысить level умершего'));
  });
});

test('error in name', () => {
  function errorName() {
    return new Character('Di', 'Bowman');
  }
  expect(errorName).toThrow(new Error('Имя не соответствует установленным требованиям'));
});

test('error in type', () => {
  function errorType() {
    return new Character('Bowman', 'Bowma');
  }
  expect(errorType).toThrow(new Error('Тип задан некорректно'));
});

test('error in name', () => {
  function errorName() {
    return new Character('Stanislavas', 'Bowman');
  }
  expect(errorName).toThrow(new Error('Имя не соответствует установленным требованиям'));
});

describe('players()', () => {
  test('new Bowman', () => {
    const character = new Bowman('Bowman');
    expect(character).toEqual({
      name: 'Bowman', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
    });
  });

  test('new Swordsman', () => {
    const character = new Swordsman('Swordsman');
    expect(character).toEqual({
      name: 'Swordsman', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
    });
  });

  test('new Magician', () => {
    const character = new Magician('Magician');
    expect(character).toEqual({
      name: 'Magician', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
    });
  });

  test('new Undead', () => {
    const character = new Undead('Undead');
    expect(character).toEqual({
      name: 'Undead', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
    });
  });

  test('new Zombie', () => {
    const character = new Zombie('Zombie');
    expect(character).toEqual({
      name: 'Zombie', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
    });
  });

  test('new Daemon', () => {
    const character = new Daemon('Daemon');
    expect(character).toEqual({
      name: 'Daemon', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
    });
  });
});
