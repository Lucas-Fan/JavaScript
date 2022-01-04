let foo = {
    value: 1
}

function bar(name, age) {
    console.log(this.value, name, age);
}


Function.prototype.call2 = function (context) {
    let tempContext = context || window;
    let args = [];
    tempContext.fn = this;
    for (let i = 1;i < arguments.length;i ++) {
        args.push('arguments[' + i + ']');
    }
    let result = eval('context.fn(' + args +')');
    tempContext.fn(...args);
    delete tempContext.fn;
    return result;
}

bar.call2(foo, 'tom', 6);
