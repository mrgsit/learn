var day = 0,
    hour = 0,
    speed = 5000,
    money = 0,
    coef = 19672.13;
while (day < 180) {
    do {
        money += speed / coef;
        hour++;
        if (hour == 24) {
            day++;
            hour = 0;
            if (day % 18 == 0) {
                coef *= 1.1;
            }
        }
    } while (money < 1.5);
    speed += 10;
    money -= 1.5;
    if (day % 10 == 0) {
        alert('Время в работе: ' + day + ' Дней, ' + hour + ' часов.' + '\nДенег на балансе: ' + money.toFixed(3) + '\nТекущая скорость: ' + speed + '\nТекущая сложность:' + coef);
    }
}