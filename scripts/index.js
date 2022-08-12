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
    currencyHeader.classList.add('currency-choice_scroll');
  } if (scroll < window.pageYOffset) {
    currencyHeader.classList.remove('currency-choice_scroll');
  }
  scroll = window.pageYOffset;
}

// set sticky mode for purchase block on mobile

function addsPurchaseSticky() {
  if (window.innerHeight - purchase.getBoundingClientRect().bottom > 0) {
    purchase.classList.add('purchase_sticky');
  }
}

function removesPurchaseSticky() {
  if (header.getBoundingClientRect().bottom - purchase.getBoundingClientRect().bottom > 0) {
    purchase.classList.remove('purchase_sticky');
  }
}

// show or hide full version of purchase block 

function showFullPurchaseVertion() {
  purchase.classList.toggle('purchase_sticky');
  purchase.classList.toggle('purchase_sticky_open');
}

purchaseList.addEventListener(('change'), (evt) => {
  cleanSelectedElements(evt);
  setSelectedElement(evt);
})

formBuy.addEventListener('submit', buyItem);

document.addEventListener('scroll', showCurrency);

// only for mobile version

if (document.documentElement.clientWidth <= 1071) {
  purchaseInfo.addEventListener('click', showFullPurchaseVertion);
  document.addEventListener('scroll', () => {
    purchase.classList.contains('purchase_sticky') ? removesPurchaseSticky() : addsPurchaseSticky();
  });
}