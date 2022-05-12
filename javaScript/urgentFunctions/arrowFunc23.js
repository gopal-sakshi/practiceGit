const addNum23 = (num1, num2) => num1+num2;
const totalley23 = addNum23(6,2);
console.log(totalley23);

const addNum24 = num1 => num2 => num1+num2;
const totalley24 = addNum24(6)(7);
// const totalley24 = addNum24(6, 67);  // use this line... see how totalley24 changes color from blue to yellow
                                            // it seems, blue is number/string/something... yellow is function (like addNum23, addNum24)
console.log(totalley24);

function addNum25(a,b,c) {
    return a+b+c;
}

const squared23 = num1 => num1*num1;
console.log(squared23(4));