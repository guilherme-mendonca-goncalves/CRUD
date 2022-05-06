class Client {
  _id: number;
  _name: string;
  _age: number;

  constructor (name: string, age: number, id: number) {
    this._name = name;
    this._age = age;
    this._id = id;
  }

  static empty() {
    return new Client('', 0, 0);
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }
}

export default Client;
