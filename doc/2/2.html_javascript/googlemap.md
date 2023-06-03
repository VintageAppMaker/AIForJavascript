```
😀
html에서 javascript를 활용한다. 
함수: getLocation() 
	브라우저의 GPS의 경도와 위도를 가져온다. 
함수: setLocation()
	경도와 위도 정보를 가져와서 
	google map을 위도와 경도 정보를 가지고
	dom의 innerHTML에 iframe으로 만들고 보여준다. 

1. html내에 버튼이 있다. 
   버튼을 누르면 "getLocation()"이라는 함수가 호출된다. 
   위도와 경도의 정보를 setLocation()으로 넘긴다. 
```


### 🤖 ChatGPT

아래는 HTML에서 JavaScript를 활용하여 위도와 경도 정보를 가져와서 Google 지도를 표시하는 예시입니다.

~~~html
<!DOCTYPE html>
<html>
<head>
  <title>Location Example</title>
</head>
<body>
  <button onclick="getLocation()">Get Location</button>
  <div id="map"></div>

  <script>
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setLocation);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    }

    function setLocation(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      var mapElement = document.getElementById("map");
      mapElement.innerHTML = '<iframe src="https://www.google.com/maps?q=' + latitude + ',' + longitude + '&output=embed" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>';
    }
  </script>
</body>
</html>
~~~

위의 예시 코드에서는 버튼을 클릭하면 getLocation() 함수가 호출됩니다. 이 함수는 navigator.geolocation.getCurrentPosition()을 사용하여 현재 위치 정보를 가져옵니다. 그 다음, setLocation() 함수를 호출하여 위도와 경도 정보를 전달합니다. setLocation() 함수는 document.getElementById("map")로 map 요소를 가져온 후, 해당 요소의 innerHTML을 설정하여 Google 지도의 iframe을 생성하고 표시합니다. iframe의 URL에 위도와 경도 정보를 포함시켜 해당 위치를 지도에 표시합니다.

위의 코드를 HTML 파일에 저장한 뒤 웹 브라우저에서 열면 버튼을 클릭하여 현재 위치의 Google 지도가 표시됩니다.