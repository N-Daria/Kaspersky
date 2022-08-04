const header = document.querySelector('.header');
const purchase = document.querySelector('.purchase');
const purchaseheigth = purchase.getBoundingClientRect().height;
const purchaseInfo = purchase.querySelector('.purchase__info');
const purchaseButton = purchase.querySelector('.purchase__button');
const purchaseList = purchase.querySelector('.purchase__options');
const purchaseListItems = Array.from(purchaseList.options);
let scroll = 0;


function isSelected() {
  let selectedElement = purchaseList.querySelector('.purchase__option[selected]');
  if (selectedElement.getAttribute('selected') === "selected") {
    console.log('handle selected')
  } else {
    console.log('initial selected')
  }

  return selectedElement
}

function cleanSelectedElements() {
  purchaseListItems.forEach((element) => {
    if (element.hasAttribute('selected')) {
      element.removeAttribute('selected');
    }
  })
}

function setSelectedElement(evt) {
  let selectedElement = null;

  purchaseListItems.forEach((element) => {
    if (evt.target.value === element.textContent) {
      selectedElement = element;
    }
  })
  selectedElement.setAttribute('selected', 'selected')
}

function buyItem() {
  isSelected();
}

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
    document.removeEventListener('scroll', setPurchaseOpen);
  }
}

function showFullPurchaseVertion() {
  if (document.documentElement.clientWidth < 1071) {
    purchase.classList.toggle('purchase_sticky');
    purchase.classList.toggle('purchase_sticky_open');
  }
}



purchaseList.addEventListener(('change'), (evt) => {
  cleanSelectedElements(evt);
  setSelectedElement(evt);
})

purchaseButton.addEventListener('click', buyItem);

document.addEventListener('scroll', setPurchaseOpen);

document.addEventListener('scroll', showHeader);

purchaseInfo.addEventListener('click', showFullPurchaseVertion);
