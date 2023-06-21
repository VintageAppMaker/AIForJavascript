
Person(👨🏾‍🦳): 
- 이모지 아트로 비오는 하늘을 만들어줘

ChatGPT: 
- 다음은 비오는 하늘을 이모지 아트로 만든 예시입니다:

```markdown

☁️🌧️🌧️🌧️☁️
   🌧️      🌧️
      🌧️   🌧️
☁️🌧️🌧️🌧️☁️
```



이모지 아트는 문자와 이모지를 사용하여 그림이나 패턴을 만드는 것입니다. 위의 예시는 구름과 비가 내리는 모습을 이모지로 표현한 것입니다. 이를 기반으로 더 복잡하거나 다양한 비오는 하늘 모양을 만들 수도 있습니다. 이모지를 사용하여 자유롭게 창의력을 발휘해보세요!

Person(👨🏾‍🦳): 

```
위의 화면을 
1. javascript에서
2.  ->를 누르면 오른쪽으로 1칸 움직인다.
3. <- 를 누르면 왼쪽으로 1칸 움직인다.
소스코드를 만들어주세요
```

ChatGPT: 
- 아래는 JavaScript로 구현된 비오는 하늘 이모지 아트를 오른쪽과 왼쪽으로 움직일 수 있는 소스 코드입니다:

```html

<!DOCTYPE html>
<html>
<head>
  <title>Rainy Sky</title>
</head>
<body>
  <pre id="sky"></pre>

  <script>
    const skyElement = document.getElementById("sky");
    let position = 0;
    let sky = "☁️🌧️🌧️🌧️☁️\n   🌧️      🌧️\n      🌧️   🌧️\n☁️🌧️🌧️🌧️☁️";

    function drawSky() {
      skyElement.textContent = sky;
    }

    function moveRight() {
      const lines = sky.split("\n");
      const newLines = lines.map(line => " " + line.slice(0, -1));
      sky = newLines.join("\n");
      position++;

      drawSky();
    }

    function moveLeft() {
      const lines = sky.split("\n");
      const newLines = lines.map(line => line.slice(1) + " ");
      sky = newLines.join("\n");
      position--;

      drawSky();
    }

    document.addEventListener("keydown", function(event) {
      if (event.key === "ArrowRight") {
        moveRight();
      } else if (event.key === "ArrowLeft") {
        moveLeft();
      }
    });

    drawSky();
  </script>
</body>
</html>
```



이 코드를 HTML 파일에 추가하고 웹 브라우저에서 열면 비오는 하늘이 표시됩니다. 오른쪽 화살표(`->`)를 누르면 비오는 하늘이 오른쪽으로 1칸씩 움직이고, 왼쪽 화살표(`<-`)를 누르면 왼쪽으로 1칸씩 움직입니다. 비오는 하늘이 이동할 때마다 화면이 업데이트되어 변경된 위치가 표시됩니다.
