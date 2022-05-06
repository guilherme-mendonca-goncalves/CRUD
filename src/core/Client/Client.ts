class Client {
  #id: number;
  #name: string;
  #age: number;

  constructor (name: string = '', age: number = 0, id: number = 0) {
    this.#name = name;
    this.#age = age;
    this.#id = id;
  }

  static empty() {
    return new Client();
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }
}

export default Client;
