"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getBuffer;
function getBuffer() {
  var data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return function (input) {
    var buffer = new ArrayBuffer(data.length * 2);
    var bufferView = new Uint16Array(buffer);
    for (var i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  }(data);
}