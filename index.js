kittens =  ["Milo", "Otis", "Garfield"]

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendName(name){
  return [...kittens, name]
}


function prependName(name){
  return [name, ...kittens]
}



