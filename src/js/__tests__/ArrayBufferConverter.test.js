import ArrayBufferConverter, { getBuffer } from '../ArrayBufferConverter';

const testCharacters = [
  '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}',
];

test.each(testCharacters)(('Проверка конвертера'),
  (data) => {
    const buffer = getBuffer(data);
    ArrayBufferConverter.load(buffer);
    const received = ArrayBufferConverter.toString();
    expect(received).toBe(data);
  });
