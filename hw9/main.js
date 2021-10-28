// создаем обертку(wrapher), в которую будем добавлять квадраты. Присваиваем ей класс, и добавляем в HTML
const wrapher = document.createElement('div');
wrapher.className = 'container';
document.body.append(wrapher);
// создаем квадраты. Делаем тоже самое, что и в прошлом этапе только в виде цикла + создаем случайный цвет, и добавляем в обертку
const generateBlocks = () => {
  for (let i = 0; i < 25; i++) {
    const square = document.createElement('div');
    square.classList.add('box');
    square.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    wrapher.append(square);
  }
}
generateBlocks();
// Advanced 
const generateBlocksInterval = () => {
  setInterval(()=> {
    wrapher.innerHTML = '' 
      generateBlocks()
  },1000)
}
generateBlocksInterval();