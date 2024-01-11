//let a = window.innerHeight;

//document.querySelector('.button-down').onclick = () => {
//  window.scrollBy(0, a);
//};

//document.querySelector('.button-up').onclick = () => {
//  window.scrollBy(0, -a);
//};

window.onload = function () {
  document.body.classList.add('animation_hiding');
  window.setTimeout(function () {
    document.body.classList.add('animation');
    document.body.classList.remove('animation_hiding');
  }, 600);
}

/* этот код помечает картинки, для удобства разработки */
let i = 1;
for(let li of carousel.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

/* конфигурация */
let width = 240; // ширина картинки
let count = 1; // видимое количество изображений

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0; // положение ленты прокрутки

carousel.querySelector('.prev').onclick = function() {
  // сдвиг влево
  position += width * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
  // сдвиг вправо
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};



//       Анимация появления

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    //} else {
    //  change.target.classList.remove('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.section-three__para');
let elemSectionFour = document.querySelectorAll('.section-four__img');
let elemSectionFive = document.querySelectorAll('.section-five');
let elemSectionFiveWrapper = document.querySelectorAll('.section-five-wrapper');
let elemSectionFiveBtn = document.querySelectorAll('.section-five__btn');
let elemSectionFivePara = document.querySelectorAll('.section-five__para');

for (let elm of elements) {
  observer.observe(elm);
}

for (let elm of elemSectionFour) {
  observer.observe(elm);
}

for (let elm of elemSectionFive) {
  observer.observe(elm);
}

for (let elm of elemSectionFiveWrapper) {
  observer.observe(elm);
}

for (let elm of elemSectionFiveBtn) {
  observer.observe(elm);
}

for (let elm of elemSectionFivePara) {
  observer.observe(elm);
}

//    popUp

//let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
//let popup = document.querySelector('.popup'); // Само окно
//let openPopupButtons = document.querySelectorAll('.section-five__btn'); // Кнопки для показа окна
//let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна

//openPopupButtons.forEach((button) => { // Перебираем все кнопки
//  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
//      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
//      popupBg.classList.add('active'); // Добавляем класс 'active' для фона
//      popup.classList.add('active'); // И для самого окна
//  })
//});

//closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
//  popupBg.classList.remove('active'); // Убираем активный класс с фона
//  popup.classList.remove('active'); // И с окна
//});

//document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
//  if(e.target === popupBg) { // Если цель клика - фот, то:
//      popupBg.classList.remove('active'); // Убираем активный класс с фона
//      popup.classList.remove('active'); // И с окна
//  }
//});

//     button Up

const btnUp = {
  el: document.querySelector('.btn-up'),
  scrolling: false,
  show() {
    if (this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
      this.el.classList.remove('btn-up_hide');
      this.el.classList.add('btn-up_hiding');
      window.setTimeout(() => {
        this.el.classList.remove('btn-up_hiding');
      }, 300);
    }
  },
  hide() {
    if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
      this.el.classList.add('btn-up_hiding');
      window.setTimeout(() => {
        this.el.classList.add('btn-up_hide');
        this.el.classList.remove('btn-up_hiding');
      }, 300);
    }
  },
  addEventListener() {
    // при прокрутке окна (window)
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (this.scrolling && scrollY > 0) {
        return;
      }
      this.scrolling = false;
      // если пользователь прокрутил страницу более чем на 200px
      if (scrollY > 400) {
        // сделаем кнопку .btn-up видимой
        this.show();
      } else {
        // иначе скроем кнопку .btn-up
        this.hide();
      }
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      this.scrolling = true;
      this.hide();
      // переместиться в верхнюю часть страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();
