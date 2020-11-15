class Negociacao {
  constructor(data, quantidade, valor) {
    this._data = new Date(data.getTime()); // Programação Defensiva
    this._quantidade = quantidade;
    this._valor = valor;
  }

  get data() {
    return new Date(this._data.getTime()); // Programação Defensiva
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }

  get volume() {
    return this._quantidade * this.valor;
  }
}
