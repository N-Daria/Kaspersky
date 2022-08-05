# Тестовое задание для лаборатории Касперского 

Представляет из себя хэдер сайта с рекламой антивируса. 

[Ссылка на Github Pages](https://n-daria.github.io/Kaspersky/#)

### Функциональность

Reviews, логотипы компании в блоке выбора валюты и блоке покупки - ссылки. 

Блок выбора валюты закрепляется на верху экрана, когда пользователь скроллит вверх. 

Блок покупки закрепляется только тогда, когда пользователь пролистал страницу до него. В мобильной версии при нажатии на текст (заголовок/стоимость) открывается полная версия блока. При повторном нажатии сворачивается.

При нажатии на кнопку "Buy Now", в консоль выводится сообщение о том, является ли выбранный элемент дефолтно выбранным или его отметил пользователь.

Так как в ТЗ не было описано промежуточное состояние, я добавила темную подложку для текста (белые буквы, светлая картинка).

Добавлен темный блок, чтобы можно было оценить работу скроллинга по странице. 

Размеры страницы не фиксированные, фоновые изображения прикрепляются к краям экрана. 

Так как сборщик проектов не использовался, стили и js-файлы подключены в html.

## Используемые технологии

### Верстка:
 1. HTML5, CSS3
 2. БЭМ (Flex)
 3. Адаптивная верстка
 4. Flexbox
 5. PixelPerfet
 
 ### JavaScript
 1. работа с DOM

## Планы по доработке
1. Изменить архитектуру, поместить весь блок в хэдер
2. Добавить плавное перемещение элементов по странице
3. Добавить закрытие блока с покупкой по нажатию на фон
4. Кастомизировать выпадющий список
5. Реогранизовать css структуру (БЭМ nested) 
