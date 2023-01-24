class Persona {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  confrontaEtà(personaSeconda) {
    if (this.age > personaSeconda.age) {
      return this.name + " è più vecchio di " + personaSeconda.name;
    } else if (this.age < personaSeconda.age) {
      return this.name + " è più giovane di " + personaSeconda.name;
    } else {
      return this.name + " ha la stessa età di " + personaSeconda.name;
    }
  }
  static confrotaPersone(personaA, personaB) {
    if (personaA.age > personaB.age) {
      return (
        personaA.name +
        " è più vecchio di " +
        personaB.name +
        " e hanno " +
        personaA.age +
        " e " +
        personaB.age
      );
    } else if (personaA.age < personaB.age) {
      return (
        personaA.name +
        " è più giovane di " +
        personaB.name +
        " e hanno " +
        personaA.age +
        " e " +
        personaB.age
      );
    } else {
      return (
        personaA.name +
        " ha la stessa età di " +
        personaB.name +
        " e hanno " +
        personaA.age
      );
    }
  }
}

const persone = [
  new Persona("Mario", 25),
  new Persona("Luigi", 30),
  new Persona("Carlo", 23),
  new Persona("Simone", 30),
  new Persona("Dario", 28),
];

console.log(persone[0].confrontaEtà(persone[1]));
console.log(persone[1].confrontaEtà(persone[3]));
console.log(persone[3].confrontaEtà(persone[4]));
console.log(persone[2].confrontaEtà(persone[1]));
console.log(persone[2].confrontaEtà(persone[4]));

console.log(Persona.confrotaPersone(persone[0], persone[1]));
console.log(Persona.confrotaPersone(persone[1], persone[3]));
console.log(Persona.confrotaPersone(persone[3], persone[4]));
console.log(Persona.confrotaPersone(persone[2], persone[1]));
console.log(Persona.confrotaPersone(persone[2], persone[4]));
