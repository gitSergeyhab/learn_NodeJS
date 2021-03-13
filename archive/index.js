
const something = require('fs');

const data = `
  in Hell!
  I am warwing place!
  for You!
`
// запись в файл
something.writeFileSync('some_file.txt', data);
// чтение из файла
const result = something.readFileSync('some_file.txt', {encoding: 'utf-8'});
console.log(result);

console.log(__dirname, __filename);