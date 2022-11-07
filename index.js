class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName = () => {
        return this.name;
    }

    getAge = () => {
        return this.age;
    }

    setJob = (job) => {
        this.job = job
    }
}

class House {
    constructor(address, price, residents) {
        this.address = address;
        this.price = price;
        this.residents = residents;
    }

    getAddress = () => {
        return this.address;
    }

    getPrice = () => {
        return this.price;
    }

    getResidents = () => {
        return this.residents;
    }

    addResident = (resident) => {
        this.residents.push(resident);
        return this.residents;
    }
}

let Person1 = new Person(`shailesh`, '23');
let Person2 = new Person('kjhhvf', 25);

let house = new House("jbjhvbjhf", 280000, [])
house.addResident(Person1);
Person1.setJob("developer");
house.addResident(new Person('dfkjkjbf', 30));

console.log(Person1.name);
console.log(Person1.age);
console.log(Person1.getName());
console.log(house.getAddress());
console.log(house.getResidents());

class Programmer extends Person {
    constructor(name, age, company, salary, language) {
        super(name, age);
        this.company = company;
        this.salary = salary;
        this.language = language;
    }

    sayHi = () => {
        console.log(`Hii i am a programmer! my name is ${this.getName()} I work for ${this.company}`);
    }
}

let programmer = new Programmer('akjnbjknd', 23, 'twitch', 100000, 'js');
programmer.sayHi();