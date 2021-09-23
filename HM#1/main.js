
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setRandomBackgroundColor() {
  var r = getRandomIntInclusive(0, 255);
  var g = getRandomIntInclusive(0, 255);
  var b = getRandomIntInclusive(0, 255);
  console.info('rgb values', r, g, b);
  // set body background color with rgb;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function setBackgroungInHex() {
  var rr = getHexValue(getRandomIntInclusive(10, 255));
  var gg = getHexValue(getRandomIntInclusive(10, 255));
  var bb = getHexValue(getRandomIntInclusive(10, 255));
  console.info('hex values', rr, gg, bb);
  // set body background color with hex;
  document.body.style.backgroundColor = `#${rr}${gg}${bb}`;
}

function getHexValue(num) {
  return num.toString(16);
}
// click the screen to change background color;
window.onload = function() {
  document.addEventListener('click', function() { 
    setRandomBackgroundColor() 
  });
};

setBackgroungInHex();


/*

  Задание 1.

  Написать функцию которая будет задавать СЛУЧАЙНЫЙ цвет для фона.
  Каждая перезагрузка страницы будет с новым цветом.
  Для написания используйте функцию на получение случайного целого числа,
  между минимальным и максимальным значением (Приложена снизу задания)

  + Бонус, повесить обработчик на кнопку через метод onClick
  + Бонус, использовать 16-ричную систему исчесления и цвет HEX -> #FFCC00
  + Бонус выводить полученый цвет по центру страницы.
  
  Необходимо создать блок через createElement задать ему стили через element.style
  и вывести через appendChild или insertBefore

  Необходимые материалы:
    Math.Random (Доки): https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    __
    Работа с цветом:
    Вариант 1.
      Исользовать element.style.background = 'rgb(r,g,b)';
      где r,g,b случайное число от 0 до 255;

    Вариант 2.
      Исользовать element.style.background = '#RRGGBB';
      где, RR, GG, BB, значние цвета в 16-ричной системе исчесления
      Формирование цвета в вебе: https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML
      Перевод в 16-ричную систему исчесления делается при помощи
      метода 
      
      Number.toString( ) https://www.w3schools.com/jsref/jsref_tostring_number.asp,

      var myNumber = '251'
      myNumber.toString(16) // fb

*/
