kakao.maps.load(function () {
    var mapContainer = document.getElementById('map');
    var mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
  
    var map = new kakao.maps.Map(mapContainer, mapOption);
  
    var marker = new kakao.maps.Marker({
      position: map.getCenter()
    });
    marker.setMap(map);
  
    kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
      var latlng = mouseEvent.latLng;
  
      marker.setPosition(latlng);
  
      var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
      message += '경도는 ' + latlng.getLng() + ' 입니다';
  
      var resultDiv = document.getElementById('clickLatlng');
      resultDiv.innerHTML = message;
    });
  });