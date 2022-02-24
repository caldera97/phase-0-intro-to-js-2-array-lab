let cats = ["Milo", "Otis", "Garfield"]

function  destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function  destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat(name) {
    return cats.concat(name);
}

function  prependCat(name) {
    let newCats = [name]
    return newCats.concat(cats);
}

function removeLastCat (){
    let newcats = cats.slice(0, 2)
    return newcats
}

function removeFirstCat() {
return cats.slice(1);
}