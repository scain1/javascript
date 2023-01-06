const Calculator = {
    add : function (x , y) {
        return x + y;
    },
    minus : function (x , y) {
        return x - y ;
    }
};

let x = Calculator.add(10, 5)
let y = Calculator.minus(10, 5)

console.log(x)
console.log(y)
