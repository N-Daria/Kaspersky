// checks if element was selected by default

function isSelected() {
  let selectedElement = purchaseList.querySelector('.purchase__option[selected]');
  if (selectedElement.getAttribute('selected') === "selected") {
    console.log('handle selected')
  } else {
    console.log('initial selected')
  }

  return selectedElement
}

// removes selected attributes for every element

function cleanSelectedElements() {
  purchaseListItems.forEach((element) => {
    if (element.hasAttribute('selected')) {
      element.removeAttribute('selected');
    }
  })
}

// adds attribute to element

function setSelectedElement(evt) {
  let selectedElement = null;

  purchaseListItems.forEach((element) => {
    if (evt.target.value === element.textContent) {
      selectedElement = element;
    }
  })
  selectedElement.setAttribute('selected', 'selected')
}

// able to send data

function buyItem(evt) {
  evt.preventDefault();
  const elementData = isSelected().value;
}

// hide or show currency block

function showCurrency() {
  if (scroll > window.pageYOffset) {
    header.classList.add('currency-choice_scroll');
  } if (scroll < window.pageYOffset) {
    header.classList.remove('currency-choice_scroll');
  }
  scroll = window.pageYOffset;
}

// set sticky mode for purchase block 

function setPurchaseOpen() {
  if (window.pageYOffset >= purchase.getBoundingClientRect().bottom + purchaseheigth) {
    purchase.classList.add('purchase_sticky');
    document.removeEventListener('scroll', setPurchaseOpen);
  }
}

// show or hide full version of purchase block 

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

formBuy.addEventListener('submit', buyItem);

// will be deleted
document.addEventListener('scroll', setPurchaseOpen);

document.addEventListener('scroll', showCurrency);

purchaseInfo.addEventListener('click', showFullPurchaseVertion);
