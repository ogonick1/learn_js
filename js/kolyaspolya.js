'use strict';
class User {
    constructor(name, age){
        this.name = name;
        this._age = age;

    }
    #surname = 'Drazhyn';

    say = () => {
        console.log(`имя пользователя: ${this.name} ${this.#surname},возраст уже ${this.age}`);
    }
    get age(){
        return this._age;
    }
    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 99) {
            this._age = age;
        } else {console.log('tu_durak?');}
    }
}
let kolyaspolya = new User('kolya', 26);
console.log(kolyaspolya.surname);
kolyaspolya.say();