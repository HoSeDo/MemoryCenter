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

  var resultDiv = document.getElementById('clickLatlng');
  var ps = new kakao.maps.services.Places();

  // 지도 클릭 시 마커 이동 및 위도/경도 표시
  kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
    var latlng = mouseEvent.latLng;

    marker.setPosition(latlng);

    var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
    message += '경도는 ' + latlng.getLng() + ' 입니다';

    resultDiv.innerHTML = message;
  });

  // 검색 함수
  window.searchPlaces = function () {
    var keyword = document.getElementById('keyword').value.trim();

    if (!keyword) {
      alert('검색어를 입력하세요.');
      return;
    }

    ps.keywordSearch(keyword, function (data, status) {
      if (status === kakao.maps.services.Status.OK) {
        var place = data[0];
        var latlng = new kakao.maps.LatLng(place.y, place.x);

        map.setCenter(latlng);
        marker.setPosition(latlng);

        resultDiv.innerHTML = '검색 결과: ' + place.place_name +
          '<br>위도: ' + place.y + ', 경도: ' + place.x;
      } else {
        alert('검색 결과가 없습니다.');
      }
    });
  };
});
