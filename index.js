const body = document.querySelector('.page')
const header = document.querySelector('.header');
const purchase = document.querySelector('.purchase');
// const purchaseWayToWindowTop = purchase.getBoundingClientRect().bottom;


// const selectedItemAdd = document.querySelector('.purchase__new-price');
// const text = document.querySelector('.purchase__new-price_sticky');


// если расстояние от низа окна до верзней границы purchase > высота purchase, добавить "purchase_sticky", удалить слушатель
// добавить в псевдоэлемент текст селекта
// добавить слушатель на кнопку -> вызвать функцию сотановки события и добавления выбранного товара в корзину
// добавить слушатель на остальной контент -> вызвать функцию полного открытия попапа 


// при скролле вверх добавлять header_scroll в хэдер

// добавить ссылку в логотип в попапе
// добавиьт ссылку в ревью
// удалить селект и добавлять его с помощью js
// ограничить выпадающий список по ширине 

// изменить положение попапа


document.addEventListener('scroll', setPurchaseOpen);

function setPurchaseOpen() {
  if (window.pageYOffset >= purchase.getBoundingClientRect().bottom) {
    purchase.classList.add('purchase_sticky');
    addsSelectedElementTextToAdd();
    // document.removeEventListener('scroll', setPurchaseOpen);
  } 
}

function addsSelectedElementTextToAdd() {

console.log(445)
  // selectedItemAdd.classList.add('purchase__new-price_sticky');
  // text.textContent = text + "55";
}