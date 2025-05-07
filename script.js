kakao.maps.load(function () {
    var mapContainer = document.getElementById('map');
    var mapOption = {
      center: new kakao.maps.LatLng(37.5665, 126.9780), // 서울 중심 좌표
      level: 5
    };
  
    var map = new kakao.maps.Map(mapContainer, mapOption);
  
    var locations = [
      {
        title: "서울보건소",
        latlng: new kakao.maps.LatLng(37.5714, 126.9918)
      },
      {
        title: "서울대학교병원",
        latlng: new kakao.maps.LatLng(37.5796, 126.9980)
      },
      {
        title: "서울의료원",
        latlng: new kakao.maps.LatLng(37.6236, 127.0801)
      }
    ];
  
    locations.forEach(function(loc) {
      var marker = new kakao.maps.Marker({
        map: map,
        position: loc.latlng,
        title: loc.title
      });
  
      var infowindow = new kakao.maps.InfoWindow({
        content: `<div style="padding:5px;font-size:14px;">${loc.title}</div>`
      });
  
      kakao.maps.event.addListener(marker, 'mouseover', function() {
        infowindow.open(map, marker);
      });
      kakao.maps.event.addListener(marker, 'mouseout', function() {
        infowindow.close();
      });
    });
  });

  var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 지도에 클릭 이벤트를 등록합니다
// 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
    
    // 클릭한 위도, 경도 정보를 가져옵니다 
    var latlng = mouseEvent.latLng;
    
    var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
    message += '경도는 ' + latlng.getLng() + ' 입니다';
    
    var resultDiv = document.getElementById('result'); 
    resultDiv.innerHTML = message;
});
