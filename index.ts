//Questão 1
export class Animal {
  private nome: string;
  private caracteristicas: string[];

  constructor(nome: string) {
    this.nome = nome;
    this.caracteristicas = [];
  }

  exibirAnimal(): void {
    console.log(`Nome do animal ${this.nome}`);
  }

  cadastrar(caracteristica: string): void {
    this.caracteristicas.push(caracteristica);
  }

  exibirCaracteristica(): string {
    const randomIndex = Math.floor(Math.random() * this.caracteristicas.length);
    return this.caracteristicas[randomIndex];
  }
}

//Questão 2
console.log("Segunda questão");
export interface FilhoteInterface {
  readonly cores: string[];
  readonly pelagem: number;
  readonly tutor: string | undefined;
}

export class Filhote implements FilhoteInterface {
  readonly cores: string[];
  readonly pelagem: number;
  tutor: string | undefined;

  constructor(cores: string[], pelagem: number) {
    this.cores = cores;
    this.pelagem = pelagem;
    this.tutor = undefined;
  }

  adotar(tutor: string): void {
    this.tutor = tutor;
  }
}

//Qustão 3
export type ComidaDePet =
  | "insetos"
  | "frutas"
  | "plantas"
  | "sementes"
  | "vegetais";

export abstract class PequenoRoedor {
  readonly especie: string;
  felicidade: number;

  constructor(especie: string) {
    this.especie = especie;
    this.felicidade = 0;
  }

  abstract comer(comida: ComidaDePet): boolean;

  estaFeliz(): boolean {
    return this.felicidade > 0;
  }
}

export class Furao extends PequenoRoedor {
  constructor() {
    super("Furão");
  }

  cavar(): void {
    this.felicidade++;
  }

  comer(comida: ComidaDePet): boolean {
    return (
      comida === "insetos" ||
      comida === "plantas" ||
      comida === "sementes" ||
      comida === "vegetais"
    );
  }
}

export class Hamster extends PequenoRoedor {
  constructor() {
    super("Hamster");
  }

  correr(): void {
    this.felicidade++;
  }

  comer(comida: ComidaDePet): boolean {
    return true;
  }
}
