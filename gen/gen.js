function* lol() {
    yield 22;
    yield 99;
    yield true;

}
const padreGen = lol();
console.log(padreGen.next().value);
console.log(padreGen.next().value);
console.log(padreGen.next().value);

