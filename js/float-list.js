$(document).ready(function(){

//////////////////////////////////////////////
$( ".hide-shops" ).click(function() {
  $(".list-shops").slideToggle();
  $(".hide-shops .i-arrow").toggleClass("close");
  var text = $('.hide-shops .text').text();
    $('.hide-shops .text').text(
        text == "ПОКАЗАТЬ СПИСОК МАГАЗИНОВ" ? "СКРЫТЬ СПИСОК МАГАЗИНОВ" : "ПОКАЗАТЬ СПИСОК МАГАЗИНОВ");
});



//////////////////////
ymaps.ready(init);



function init () {
    var myMap = new ymaps.Map('map', {
            center: [55.76, 37.64],
            zoom: 10
        });

    // В метод add можно передать строковый идентификатор
    // элемента управления и его параметры.
    myMap.controls
        // Кнопка изменения масштаба.
        .add('zoomControl', { right: 10, top: 150 })

    
       myPlacemark1 = new ymaps.Placemark([55.76, 37.64], {
            // Свойства.
            hintContent: 'Собственный значок метки'
        }, {
            // Опции.
            // Своё изображение иконки метки.
            iconImageHref: 'i/mark.png',
            // Размеры метки.
            iconImageSize: [24, 83],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0]
        });

       myPlacemark2 = new ymaps.Placemark([55.79, 37.60], {
            // Свойства.
            hintContent: 'Собственный значок метки'
        }, {
            // Опции.
            // Своё изображение иконки метки.
            iconImageHref: 'i/mark.png',
            // Размеры метки.
            iconImageSize: [24, 83],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0]
        });
    // Добавляем все метки на карту.
    myMap.geoObjects
        .add(myPlacemark1)
        .add(myPlacemark2)


}

////////////////
});
