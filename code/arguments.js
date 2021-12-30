var data = [];

for (var i = 0; i < 3; i++) {
    (data[i] = function () {
       console.log(arguments.callee.i) 
    }).i = i;
}

console.log(data[0]);

data[0]();
data[1]();
data[2]();


(function () {
    var undefined = 1
    console.log(undefined);
})()
