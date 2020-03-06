let btn = document.querySelectorAll('.switch-btn')
let weatherItemTitle = document.querySelectorAll('.weather__item--title')
let weatherItem = document.querySelectorAll('.weather__item')
let weatherDesc = document.querySelectorAll('.weather__desc')


function toSwitch(props) {
  btn[props].classList.toggle('switch-on')
  weatherItemTitle[props].classList.toggle('weather__item--title-red')

  //кнопка ветер
  if (btn[0].classList == "switch-btn switch-on") {
    weatherItemTitle[0].textContent = 'Сильный ветер (шквалистый)'
    weatherItem[0].classList.add('weather__item--wind-red')
    weatherDesc[0].textContent = 'Скорость порывов от 25м/с и более.'
  }
  else if (btn[0].classList == "switch-btn") {
    weatherItemTitle[0].textContent = 'Ветер'
    weatherItem[0].classList.remove('weather__item--wind-red')
    weatherDesc[0].textContent = ''
  } 

  //кнопка дождь
  if (btn[1].classList == "switch-btn switch-on") {
    weatherItemTitle[1].textContent = 'Сильный дождь (Ливень)'
    weatherItem[1].classList.add('weather__item--rain-red')
    weatherDesc[1].textContent = 'Кол-во осадков 100 мм и более, в период менее чем за 12 часов.'
  }
  else if (btn[1].classList == "switch-btn") {
    weatherItemTitle[1].textContent = 'Дождь'
    weatherItem[1].classList.remove('weather__item--rain-red')
    weatherDesc[1].textContent = ''
  } 

  //кнопка снег
  if (btn[2].classList == "switch-btn switch-on") {
    weatherItemTitle[2].textContent = 'Сильный снег'
    weatherItem[2].classList.add('weather__item--snow-red')
    weatherDesc[2].textContent = 'Кол-во осадков 20 мм и более, в период менее чем за 12 часов.'
  }
  else if (btn[2].classList == "switch-btn") {
    weatherItemTitle[2].textContent = 'Снег'
    weatherItem[2].classList.remove('weather__item--snow-red')
    weatherDesc[2].textContent = ''
  } 

  //кнопка метель
  if (btn[3].classList == "switch-btn switch-on") {
    weatherItemTitle[3].textContent = 'Сильная метель'
    weatherItem[3].classList.add('weather__item--blizzard-red')
    weatherDesc[3].textContent = 'При ветре 20 м/c в течение суток с выпадением снега.'
  }
  else if (btn[3].classList == "switch-btn") {
    weatherItemTitle[3].textContent = 'Метель'
    weatherItem[3].classList.remove('weather__item--blizzard-red')
    weatherDesc[3].textContent = ''
  } 

  //кнопка град
  if (btn[4].classList == "switch-btn switch-on") {
    weatherItemTitle[4].textContent = 'Крупный град'
    weatherItem[4].classList.add('weather__item--hail-red')
    weatherDesc[4].textContent = 'Диаметр градин 20 мм и более.'}

  else if (btn[4].classList == "switch-btn") {
    weatherItemTitle[4].textContent = 'Град'
    weatherItem[4].classList.remove('weather__item--hail-red')
    weatherDesc[4].textContent = ''
  } 

  //кнопка гололед
  if (btn[5].classList == "switch-btn switch-on") {
    weatherItemTitle[5].textContent = 'Сильный гололед'
    weatherItem[5].classList.add('weather__item--ice-red')
    weatherDesc[5].textContent = 'Диаметр отложений на проводах 20 мм и более.'}

  else if (btn[5].classList == "switch-btn") {
    weatherItemTitle[5].textContent = 'Гололед'
    weatherItem[5].classList.remove('weather__item--ice-red')
    weatherDesc[5].textContent = ''
  } 

  //кнопка мороз
  if (btn[6].classList == "switch-btn switch-on") {
    weatherItemTitle[6].textContent = 'Сильный мороз'
    weatherItem[6].classList.add('weather__item--frost-red')
    weatherDesc[6].textContent = 'Температура воздуха у поверхности земли - 30°C и ниже для Европейской части РФ. '}

  else if (btn[6].classList == "switch-btn") {
    weatherItemTitle[6].textContent = 'Мороз'
    weatherItem[6].classList.remove('weather__item--frost-red')
    weatherDesc[6].textContent = ''
  } 

}


//обработчики клика + вызов функции
btn[0].addEventListener('click', function(){toSwitch(0)})

btn[1].addEventListener('click', function(){toSwitch(1)})

btn[2].addEventListener('click', function(){toSwitch(2)})

btn[3].addEventListener('click', function(){toSwitch(3)})

btn[4].addEventListener('click', function(){toSwitch(4)})

btn[5].addEventListener('click', function(){toSwitch(5)})

btn[6].addEventListener('click', function(){toSwitch(6)})