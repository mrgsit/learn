var compnum = Math.round(Math.random() * 100),
gameover = false;

for (var i = 0; i < 10; i++) {
for (var j = 0; j < 2; j++) {
    var input = prompt('Раунд ' + (i + 1) + '\nИгрок ' + (j + 1) +
        '\nВведите число\nВведите end для окончания игры');
    if (input == 'end') {
        gameover = true;
        break;
    }
    var usernum = +input;

    if (usernum > compnum) {
        alert('Число больше загаданного');
    } else if (usernum < compnum) {
        alert('Число меньше загаданного');
    } else if (usernum == compnum) {
        alert('Верный ответ!');
        alert('Выиграл игрок ' + (j + 1) + '!\nОн угадал число с ' + (i + 1) + ' попытки.');
        gameover = true;
        break;
    } else {
        alert('Ввод должен быть числом от 1 до 100!');
    }
}
if (gameover) {
    break;
}
}
if (i == 10) {
alert('Игра окончена, Компьютер загадал число ' + compnum);

}