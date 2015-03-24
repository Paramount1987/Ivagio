$(document).ready(function(){

//////////////////////
ymaps.ready(init);

function init () {
    var myMapContact = new ymaps.Map('map-contact', {
            center: [55.65374078, 37.61780550],
            zoom: 16
        });

    
       myPlacemark1 = new ymaps.Placemark([55.65474078, 37.61710550], {
            // Свойства.
            hintContent: 'Собственный значок метки'
        }, {
            // Опции.
            // Своё изображение иконки метки.
            iconImageHref: 'i/mark.png',
            // Размеры метки.
            iconImageSize: [24, 83],

        });


    // Добавляем все метки на карту.
    myMapContact.geoObjects
        .add(myPlacemark1)
}
////////////////
});
