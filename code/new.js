// # new 关键字执行过程

// - 创建一个空对象
// - 获取构造函数
// - 修改空对象的 `__proto__` 指向构造函数的原型
// - 修改构造函数 `this` 指向并执行构造函数保存返回值
// - 判断返回值类型
//     - 如果是对象则返回返回值，如果返回值为 `null` 则返回创建的对象
//     - 如果是数组的话则直接返回
//     - 如果值是基本类型则返回创建的对象

function Otaku (name, age) {
    this.name = name
    this.age = age

    this.habit = 'Games'
    
    // return {
    //     name,
    //     age
    // }
    // return '1'
    // return ['12','34']
}

Otaku.prototype.strength = 60

Otaku.prototype.sayYourName = function () {
    console.log('I am' + this.name)
}

function objectFactory() {
    // 获取 arguments 并转为数组
    let args = Array.prototype.slice.call(arguments)
    // 获取构造函数
    let Constructor = args.shift()
    // 修改原型指向
    let obj = new Object(Constructor.prototype)
    // 修改 this 指向并执行
    let ret = Constructor.apply(obj, args)
    // 返回值类型判断
    return typeof ret === 'object'
        ? ret || obj
        : typeof ret === 'array'
            ? ret
            : obj
}

var person = objectFactory(Otaku, 'Kevin', '18')
// var person = new Otaku('Kevin', '18')
console.log(person);

console.log(person.name)
console.log(person.age)
console.log(person.habit)
console.log(person.strength)

person.sayYourName()