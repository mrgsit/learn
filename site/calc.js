function message(text) {
    alert('you have new massage!' + text);
}
message('you sic!');

// функция определена сама по себе, видна всему документу. можно использовать и сверху и снизу её.
var c = summ(34, 324);
alert(c);
function summ(a, b) {
    return a + b;
}

// функция определена через переменную, использование возможно только после определения переменной
var summ = function (a, b) {
    return a+b;
}
alert(summ(343, 3432));

// 4! = 1*2*3*4 = 24
// 5! = 1*2*3*4*5 = 4!*5 = 120

// factorial(5)
// i=5, n=5
// i=4, n=5*4
// i=3, n=5*4*3
alert(factorial(5));
function factorial(i) {
    var n = 1
    while (i > 1) {
        n *= i--;
    }
    return n;
}