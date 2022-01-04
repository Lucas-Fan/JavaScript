Object.prototype.bind = function (context) {
    if (typeof this !== 'function') {
        throw new Error('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var beforeArgs = Array.prototype.slice.call(arguments, 1);

    var self = this
    var fNOP = function () {};

    var fBond = function () {
        var lastArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, beforeArgs.concat(lastArgs));
    }

    fNOP.prototype = this.prototype;
    fBond.prototype = new fNOP;
    return fBond;
}

let a = {
    value: 123
}

function b () {
console.log(this.value)
}

let c = b.bind(a)

c()