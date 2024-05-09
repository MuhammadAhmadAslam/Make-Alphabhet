
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
// alphabhetArray = [
//   'apple', 'banana', 'cat', 'dog', 'elephant', 'fish', 'giraffe', 'horse', 'iguana', 'jaguar',
//   'kangaroo', 'lion', 'monkey', 'nest', 'owl', 'penguin', 'queen', 'rabbit', 'snake', 'tiger',
//   'umbrella', 'vulture', 'whale', 'xylophone', 'yak', 'zebra',
//   'ball', 'car', 'cup', 'duck', 'egg', 'frog', 'goat', 'hat', 'ice cream', 'jam',
//   'kite', 'lemon', 'moon', 'net', 'orange', 'pear', 'queen', 'rose', 'sun', 'tomato',
//   'violin', 'watermelon', 'xylophone', 'yogurt', 'zeppelin',
//   'artichoke', 'butterfly', 'candle', 'dolphin', 'engine', 'flower', 'glass', 'heart', 'island', 'jellyfish',
//   'knight', 'lighthouse', 'magnet', 'ninja', 'octopus', 'pumpkin', 'quartz', 'rocket', 'star', 'tent',
//   'uranium', 'violin', 'watermelon', 'xylophone', 'yellow',
//   'zebra', 'apple', 'banana', 'cat', 'dog', 'elephant', 'fish', 'giraffe', 'horse', 'iguana',
//   'jaguar', 'kangaroo', 'lion', 'monkey', 'nest', 'owl', 'penguin', 'queen', 'rabbit', 'snake',
//   'tiger', 'umbrella', 'vulture', 'whale', 'xylophone', 'yak', 'zebra'
// ];
// console.log(alphabhetArray[Math.floor(Math.random()*103)][0]);






















// function getting(){
  // var a = document.getElementById("A").value
  // var b = document.getElementById("B").value
  // var c = document.getElementById("C").value
  // var d = document.getElementById("D").value
  // var e = document.getElementById("E").value
  // var f = document.getElementById("F").value
  // var g = document.getElementById("G").value
  // var h = document.getElementById("H").value
  // var i = document.getElementById("I").value
  // var j = document.getElementById("J").value
  // var k = document.getElementById("K").value
  // var l = document.getElementById("L").value
  // var m = document.getElementById("M").value
  // var n = document.getElementById("N").value
  // var o = document.getElementById("O").value
  // var p = document.getElementById("P").value
  // var q = document.getElementById("Q").value
  // var r = document.getElementById("R").value
  // var s = document.getElementById("S").value
  // var t = document.getElementById("T").value
  // var u = document.getElementById("U").value
  // var v = document.getElementById("V").value
  // var w = document.getElementById("W").value
  // var x = document.getElementById("X").value
  // var y = document.getElementById("Y").value
  // var z = document.getElementById("Z").value
  // let small = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','q','r','s','t','u','v','w','x','y','z']
//  if (alphabhetArray[i][0] == ) {
  
//  }
  // console.log(user);

// }

// let big =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
// function selectLetter(letter) {
//   console.log(letter);
//      for (let i = 0; i < alphabhetArray.length; i++) {
//       if (alphabhetArray[Math.floor(Math.random()*10)][0] == letter.toLowerCase()) {
//         console.log(true);
//       }
     
//      }
// }
