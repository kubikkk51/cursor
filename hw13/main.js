function* idGenerator () {
    let i = 1;
    while (true) {
        yield i++;
    }
}
const getId = idGenerator();

console.log( getId.next().value );
console.log( getId.next().value );
console.log( getId.next().value );
console.log( getId.next().value );
console.log( getId.next().value );



function* newFontGenerator(fontSize) {
  let result = yield fontSize;   
  while (true) {
    if ( result === "up" ) {
        fontSize += 2;
        result = yield fontSize;
        
    }
      if ( result === "down" ) {
          fontSize -= 2;
          result = yield fontSize;
        
    }
    
  }
}

const fontGenerator = newFontGenerator(14);
console.log( fontGenerator.next("up").value );
console.log( fontGenerator.next("up").value );
console.log( fontGenerator.next("down").value );
console.log( fontGenerator.next("down").value );
