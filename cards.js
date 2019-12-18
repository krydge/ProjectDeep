
//base class of the card
class Card {

    constructor(image, name, description) {
        this.cardImage = image;
        this.cardName = name;
        this.cardDescription = description;
    }

    get image() {
        return this.cardImage;
    }
    set image(image) {
        this.cardImage = image;
    }

    get name() {
        return this.cardName;
    }
    set name(name) {
        this.cardName = name;
    }

    get description() {
        return this.cardDescription;
    }
    set description(description) {
        this.cardDescription = description;
    }
}

//monster adds health, power and type to a card
class Monster extends Card {
    constructor(image, name, description, hp, pwr, tp) {
        super(image, name, description);
        this.health = hp;
        this.power = pwr;
        this.type = tp;
    }

    get health() {
        return this.health;
    }
    set health(hp) {
        this.health = hp;
    }

    get power() {
        return this.power;
    }
    set power(pwr) {
        this.power = pwr;
    }

    get type() {
        return this.type;
    }
    set type(tp) {
        this.type = tp;
    }
}

//player adds health, power and weapon to a card
class Player extends Card {
    constructor(image, name, description, hp, pwr, wpn) {
        super(image, name, description);
        this.health = hp;
        this.power = pwr;
        this.weapon = wpn;
    }

    get health() {
        return this.health;
    }
    set health(hp) {
        this.health = hp;
    }

    get power() {
        return this.power;
    }
    set power(pwr) {
        this.power = pwr;
    }

    get weapon() {
        return this.weapon;
    }
    set weapon(wpn) {
        this.weapon = wpn;
    }

    character(){
        return 
    }
}

//weapon adds damage and tpe to a card is used by player
class Weapon extends Card {
    constructor(image, name, description, dmg, tp) {
        super(image, name, description);
        this.damage = dmg;
        this.type = tp;
    }

    get damage() {
        return this.damage;
    }
    set damage(dmg) {
        this.damage = dmg;
    }

    get type() {
        return this.type;
    }
    set type(tp) {
        this.type = tp;
    }

}