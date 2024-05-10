
function selectLetter(letter) {
  let alphabhetArray = [
    'apple', 'banana', 'cat', 'dog', 'elephant', 'ant','fish', 'giraffe', 'horse', 'iguana', 'jaguar',
    'kangaroo', 'lion', 'monkey', 'nest', 'owl', 'penguin', 'queen', 'rabbit', 'snake', 'tiger',
    'umbrella', 'vulture', 'whale', 'xylophone', 'yak', 'zebra',
    'ball', 'car', 'cup', 'duck', 'egg', 'frog', 'goat', 'hat', 'ice cream', 'jam',
    'kite', 'lemon', 'moon', 'net', 'orange', 'pear', 'queen', 'rose', 'sun', 'tomato',
    'violin', 'watermelon', 'xylophone', 'yogurt', 'zeppelin',
    'artichoke', 'butterfly', 'candle', 'dolphin', 'engine', 'flower', 'glass', 'heart', 'island', 'jellyfish',
    'knight', 'lighthouse', 'magnet', 'ninja', 'octopus', 'pumpkin', 'quartz', 'rocket', 'star', 'tent',
    'uranium', 'violin', 'watermelon', 'xylophone', 'yellow',
    'zebra', 'apple', 'banana', 'cat', 'dog', 'elephant', 'fish', 'giraffe', 'horse', 'iguana',
    'jaguar', 'kangaroo', 'lion', 'monkey', 'nest', 'owl', 'penguin', 'queen', 'rabbit', 'snake',
    'tiger', 'umbrella', 'vulture', 'whale', 'xylophone', 'yak', 'zebra' ,'penguin',
    'castle','elephant','butterfly','rainbow','guitar','octopus','banana','robot',
    'moon','unicorn','koala','tiger','pizza','whale','zebra','queen','sun','yak',
    'hat','orange','nest','volcano','umbrella','kangaroo','dragon','apple','jellyfish',
    'giraffe','dog','book','lemon','butterfly','pizza','banana','elephant','moon','robot','penguin','koala'
  ];
  letter = letter.toLowerCase()
  let start = []
  console.log(letter);
  for (let i = 0; i < alphabhetArray.length; i++) {
      if (alphabhetArray[i][0] == letter) {
        start.unshift(alphabhetArray[i])
      }
  }
  if (start.length > 0) {
    let random = Math.floor(Math.random()*start.length)
    document.getElementById('write').innerText = start[random]
  }
}
