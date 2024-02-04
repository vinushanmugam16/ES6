var member = {
    studName: 'Bava',
    rollNum: 301
};
console.log(member);
var Sides = /** @class */ (function () {
    function Sides(square, rectangle) {
        this.square = square;
        this.rectangle = rectangle;
    }
    Sides.prototype.getSides = function () {
        return ("Square: ".concat(this.square, ", Rectangle: ").concat(this.rectangle));
    };
    return Sides;
}());
var shape = new Sides('4 sides equal', "2 sides equal");
console.log(shape.getSides());
var options = [
    {
        breakFast: 'Idly',
        lunch: 'Sambar Rice'
    },
    {
        breakFast: 'Dosa',
        lunch: 'Egg Curry'
    },
    {
        breakFast: 'Poori',
        lunch: 'Ghee Rice'
    }
];
console.log(options.map(function (value) { return value.breakFast; }));
var num = 23;
num = 40;
console.log(num);
var word;
word = 'aspire';
console.log(word);
//implicit
// var value=67;
// value='Higher';                ///Implicit type --- value assigned is number so,ts automatically determines type as number so we can't re-assign a string to it
// console.log(value);           //error
var arr = [1, 4, 'five', true];
console.log(arr);
///explicit unions
var source;
source = 'Rocky';
source = true;
function getLength(obj) {
    return obj.length;
}
console.log(getLength([23, 2, 9]));
function getType(word) {
    if (typeof word === 'string') {
        return word;
    }
    else {
        return [word];
    }
}
console.log(getType(['Aspire', 'Systems']));
///generic
function multiply(num1, num2, num3) {
    return num1 * num2 * num3;
}
var digits = multiply(2, 4, 6);
console.log(digits);
function merge(age, name) {
    return ("".concat(name, " is ").concat(age, " years old")); ///any ----basic type
}
var words = merge(32, 'Daniel');
console.log(words);
function objects(fruit, price) {
    return ("In market ".concat(fruit, "'s price is ").concat(price));
}
console.log(objects('mango', 45));
function fullName(user) {
    return user.firstName + user.lastName;
}
var user = { firstName: 'Siva', lastName: 'Sathya' };
console.log(fullName(user));
