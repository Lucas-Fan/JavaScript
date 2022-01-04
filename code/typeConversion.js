console.log('------');

console.log(Boolean()) // false
console.log(Boolean(false)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(null)) // false
console.log(Boolean(+0)) // false
console.log(Boolean(-0)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean("")) // false

console.log('------');

console.log(!!false);
console.log(!!undefined);
console.log(!!null);
console.log(!!+0);
console.log(!!-0);
console.log(!!NaN);
console.log(!!"");

console.log('------');

console.log(Number()) // +0
console.log(Number(undefined)) // NaN
console.log(Number(null)) // +0
console.log(Number(false)) // +0
console.log(Number(true)) // 1
console.log(Number("123")) // 123
console.log(Number("-123")) // -123
console.log(Number("1.2")) // 1.2
console.log(Number("000123")) // 123
console.log(Number("-000123")) // -123
console.log(Number("0x11")) // 17
console.log(Number("")) // 0
console.log(Number(" ")) // 0
console.log(Number("123 123")) // NaN
console.log(Number("foo")) // NaN
console.log(Number("100a")) // NaN

console.log('------');

console.log(parseInt("3 abc")) // 3
console.log(parseFloat("3.14 abc")) // 3.14
console.log(parseInt("-12.34")) // -12
console.log(parseInt("0xFF")) // 255
console.log(parseFloat(".1")) // 0.1
console.log(parseInt("0.1")) // 0

console.log('------');

console.log(String()) // 空字符串
console.log(String(undefined)) // undefined
console.log(String(null)) // null
console.log(String(false)) // false
console.log(String(true)) // true
console.log(String(0)) // 0
console.log(String(-0)) // 0
console.log(String(NaN)) // NaN
console.log(String(Infinity)) // Infinity
console.log(String(-Infinity)) // -Infinity
console.log(String(1)) // 1

console.log('------');

console.log(({}).toString()) // [object Object]
console.log([].toString()) // ""
console.log([0].toString()) // 0
console.log([1, 2, 3].toString()) // 1,2,3
console.log((function(){var a = 1;}).toString()) // function (){var a = 1;}
console.log((/\d+/g).toString()) // /\d+/g
console.log((new Date(2010, 0, 1)).toString()) // Fri Jan 01 2010 00:00:00 GMT+0800 (CST)

console.log('------');

console.log(Number({})) // NaN
console.log(Number({a : 1})) // NaN
console.log(Number([])) // 0
console.log(Number([0])) // 0
console.log(Number([1, 2, 3])) // NaN
console.log(Number(function(){var a = 1;})) // NaN
console.log(Number(/\d+/g)) // NaN
console.log(Number(new Date(2010, 0, 1))) // 1262275200000
console.log(Number(new Error('a'))) // NaN

console.log('------');

console.log(JSON.stringify(null)) // null
console.log(JSON.stringify(undefined)) // undefined，注意这个undefined不是字符串的undefined
console.log(JSON.stringify(true)) // true
console.log(JSON.stringify(42)) // 42
console.log(JSON.stringify("42")) // "42"

console.log('------');
