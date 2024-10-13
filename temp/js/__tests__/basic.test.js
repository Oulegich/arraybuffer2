"use strict";

var _ArrayBufferConverter = _interopRequireDefault(require("../ArrayBufferConverter"));
var _GetBuffer = _interopRequireDefault(require("../GetBuffer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('Check error', function () {
  var bufferConverter = new _ArrayBufferConverter["default"]();
  var buffer = (0, _GetBuffer["default"])();
  bufferConverter.load(buffer);
  var jsonString = bufferConverter.toString();
  test('checker case', function () {
    expect(jsonString).toEqual("{\"data\":{\"user\":{\"id\":1,\"name\":\"Hitman\",\"level\":10}}}");
  });
});