class Client {
  _idclients: number;
  _name: string;
  _age: number;

  constructor (name: string, age: number, idclients: number) {
    this._name = name;
    this._age = age;
    this._idclients = idclients;
  }

  static empty() {
    return new Client('', 0, 0);
  }

  get idclients() {
    return this._idclients;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }
}

export default Client;
