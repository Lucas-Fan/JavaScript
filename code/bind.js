// Object.prototype.bind = function (context) {
//     if (typeof this !== 'function') {
//         throw new Error('Function.prototype.bind - what is trying to be bound is not callable');
//     }

//     var beforeArgs = Array.prototype.slice.call(arguments, 1);

//     var self = this
//     var fNOP = function () {};

//     var fBond = function () {
//         var lastArgs = Array.prototype.slice.call(arguments);
//         return self.apply(this instanceof fNOP ? this : context, beforeArgs.concat(lastArgs));
//     }

//     fNOP.prototype = this.prototype;
//     fBond.prototype = new fNOP;
//     return fBond;
// }

Object.prototype.bind = function (context) {
    if (typeof this !== 'function') {
        throw new Error('Function.prototype.bind - what is trying to be bound is not callable');
    }
    let beforeArgs = Array.prototype.slice.call(arguments, 1);

    let self = this;
    let fNOP = function () {};
    let fBond = function () {
        let lastArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, beforeArgs.concat(lastArgs));
    }

    fNOP.prototype = this.prototype;
    fBond.prototype = new fNOP();
    return fBond;
}

let a = {
    value: 123
}

function b (name, age) {
console.log(this.value, name, age)
}

let c = b.bind(a, 'tom', 8)

c()