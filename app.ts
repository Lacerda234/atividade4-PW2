import {
  Animal,
  Filhote,
  ComidaDePet,
  PequenoRoedor,
  Furao,
  Hamster,
} from "./index";
//Questão 1
console.log("Primeira questão");
const animal1 = new Animal("Leão");
animal1.exibirAnimal();

animal1.cadastrar("carnívoro");
animal1.cadastrar("vive em bando");
animal1.cadastrar("habitat: Savana");

console.log(animal1.exibirCaracteristica());

const animal2 = new Animal("Girafa");
animal2.exibirAnimal();

animal2.cadastrar("herbívoro");
animal2.cadastrar("possui pescoço longo");
animal2.cadastrar("vive em grupos pequenos");

console.log(animal2.exibirCaracteristica());

console.log();

//Questão 2
console.log("questão 2");
const filhote1 = new Filhote(["marrom", "branco"], 3);
console.log(filhote1.cores);
console.log(filhote1.pelagem);
console.log(filhote1.tutor);

filhote1.adotar("João");
console.log(filhote1.tutor);

const filhote2 = new Filhote(["Preto"], 5);
console.log(filhote2.cores);
console.log(filhote2.pelagem);
console.log(filhote2.tutor);

filhote2.adotar("Maria");
console.log(filhote2.tutor);

//Questão 3
console.log("Terceira questão");
const furao1 = new Furao();
console.log(furao1.especie);
console.log(furao1.felicidade);
console.log(furao1.comer("insetos"));

furao1.cavar();
console.log(furao1.felicidade);

const hamster1 = new Hamster();
console.log(hamster1.especie);
console.log(hamster1.felicidade);
console.log(hamster1.comer("frutas"));

hamster1.correr();
console.log(hamster1.felicidade);
