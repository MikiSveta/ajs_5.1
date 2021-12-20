const arrType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    if (name.length < 3 || name.length > 9) {
      throw new Error('Имя не соответствует установленным требованиям');
    } else {
      this.name = name;
    }

    if (arrType.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Тип задан некорректно');
    }

    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить level умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('health задано некорректно');
    }
  }
}
