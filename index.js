const body = document.querySelector('.page')
const header = document.querySelector('.header');
const purchase = document.querySelector('.purchase');
const purchaseheigth = purchase.getBoundingClientRect().height;
const purchaseInfo = purchase.querySelector('.purchase__info');
const purchaseButton = purchase.querySelector('.purchase__button');
const purchaseList = purchase.querySelector('.purchase__options');
const purchaseListItems = Array.from(purchaseList.options);

const aa = purchaseList.querySelectorAll('.purchase__option');

// purchaseListItems.forEach((element) => {
//   element.addEventListener(('click'), () => {
//     isSelected();
//     element.setAttribute('selected', 'selected');
//   })
// })

// aa.forEach((element) => {
//   element.addEventListener('click', ff);
// })


// function ff(el) {
//   console.log(el)
// }

function getSelectedItem() {
  let selectedElement = null;
  const items = Array.from(purchaseList.options);
  items.forEach((el) => {
    el.selected ? selectedElement = el : '';
  })
  return selectedElement
}

purchaseList.addEventListener(('change'), (evt) => {
  debugger
  isSelected(evt);
  getSelectedItem();
  // element.setAttribute('selected', '');
})

function isSelected(evt) {
  purchaseListItems.forEach((element) => {
    if (element.hasAttribute('selected')) {
      element.removeAttribute('selected');
    }
  })
}

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


purchaseButton.addEventListener('click', getSelectedItem);




let scroll = 0;

document.addEventListener('scroll', (evt) => {
  setPurchaseOpen();
  showHeader();
});

function showHeader() {
  if (scroll > window.pageYOffset) {
    header.classList.add('header_scroll');
  } if (scroll < window.pageYOffset) {
    header.classList.remove('header_scroll');
  }
  scroll = window.pageYOffset;
}

function setPurchaseOpen() {
  if (window.pageYOffset >= purchase.getBoundingClientRect().bottom + purchaseheigth) {
    purchase.classList.add('purchase_sticky');
    // document.removeEventListener('scroll', setPurchaseOpen);
  }
}




purchaseInfo.addEventListener('click', showFullPurchaseVertion);


function showFullPurchaseVertion() {
  purchase.classList.remove('purchase_sticky');
}



