import ArrayBufferConverter from '../ArrayBufferConverter';
import GetBuffer from '../GetBuffer';
describe('Check error', () => {
  const bufferConverter = new ArrayBufferConverter();
  const buffer = GetBuffer();
  bufferConverter.load(buffer);
  const jsonString = bufferConverter.toString();
  test('checker case', () => {
    expect(jsonString).toEqual(`{"data":{"user":{"id":1,"name":"Hitman","level":10}}}`);
  });
})