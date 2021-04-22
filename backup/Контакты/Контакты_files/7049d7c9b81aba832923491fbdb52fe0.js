 document.addEventListener('DOMContentLoaded', function(){
function footertwelve(){

var script = document.createElement('script');
    script.onload = function () {
         ymaps.ready(initMap);

    function initMap() {
        var defCoordinate = [55.729149788580955, 37.658035911361395];
        
        var str_coor = $("#footermaptwelve").data("coordinate");

        if(str_coor)
       {
           var ar_coor = str_coor.split(',');
           if(ar_coor[0] && ar_coor[1])
           {
               defCoordinate = ar_coor;
           }
       }


    
       var myMap = new ymaps.Map('footermaptwelve', {
               center:  defCoordinate,
               zoom: 17,
               controls: ['smallMapDefaultSet']
           }),

           myPlacemark = new ymaps.Placemark(defCoordinate, {
               hintContent: $(".legendd .info").text(),
               balloonContent: $("").text()
           }, {
               iconLayout: 'default#image',
               iconImageSize: [32, 38]
             
           });

       myMap.behaviors.disable('scrollZoom');


       myMap.geoObjects.add(myPlacemark);
   }        
        
    };
    script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";

    document.head.appendChild(script)


} footertwelve();


    });

