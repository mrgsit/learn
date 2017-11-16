function showResult(fn) {
    var input1 = document.getElementById('num-1'),
        input2 = document.getElementById('num-2'),
        status = document.getElementById('status');
    var a = +input1.value,
        b = +input2.value;
    if (isNaN(a)) {
        input1.value = '';
        status.innerHTML = 'Неверное значение в поле "Число 1"';
        return;
    }
    if (isNaN(b)) {
        input2.value = '';
        status.innerHTML = 'Неверное значение в поле "Число 2"';
        
        return;

    }
    var result = fn(a, b);

    if (typeof result != 'number') {
        status.innerHTML = result;
        return;
    }
    document.getElementById('result').value = result;
}

function summ() {
    showResult(function (a, b) {
        return a + b;
    })
}



function distract() {
    showResult(function (a, b) {
        return a - b;
    })
}

function multiply() {
    showResult(function (a, b) {
        return a * b;
    })
}

function divide() {
    showResult(function (a, b) {
        if (b == 0) {
            return 'Ошибка, на 0 делить нельзя!'
        }
        return a / b;
    })
}