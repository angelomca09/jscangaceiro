class Negociacao {
  constructor(data, quantidade, valor) {
    Object.assign(this, { quantidade, valor }); // Propriedades Literais
    this._data = new Date(data.getTime()); // Programação Defensiva
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
