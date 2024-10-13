export default class ArrayBufferConverter {
  constructor() {
    this._buffer = null;
  }

  load(buffer) {
    this._buffer = buffer;
  }

  toString() {
    if (!this._buffer) {
      throw new Error('Error');
    }

    const bufferView = new Uint16Array(this._buffer);
    let result = '';
    for (let i = 0; i < bufferView.length; i++) {
      result += String.fromCharCode(bufferView[i]);
    }
    return result;
  }
}