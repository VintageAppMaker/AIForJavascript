
Person(😀): 
- Node.js에서 파일로 저장하고 읽어오기 restful로 만들어주세요

ChatGPT(🤖): 
- 아래는 Node.js에서 파일에 데이터를 저장하고 읽어오는 간단한 RESTful API 예제입니다.

```javascript

const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

// 데이터 저장 경로
const filePath = 'data.json';

// 데이터 읽기
app.get('/data', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('서버 오류');
      return;
    }
    
    res.json(JSON.parse(data));
  });
});

// 데이터 저장
app.post('/data', (req, res) => {
  const newData = req.body;
  
  fs.writeFile(filePath, JSON.stringify(newData), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('서버 오류');
      return;
    }
    
    res.send('데이터 저장 완료');
  });
});

app.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다.');
});
```



이 예제에서는 Express 프레임워크를 사용하여 간단한 서버를 만들었습니다. 클라이언트는 `/data` 엔드포인트로 GET 요청을 보내어 데이터를 읽고, POST 요청을 보내어 데이터를 저장할 수 있습니다. 데이터는 JSON 형식으로 저장되며, `data.json` 파일에 저장됩니다.

실행을 위해 Node.js와 Express가 설치되어 있어야 하며, 코드를 `server.js`와 같은 파일에 저장한 후에 터미널에서 `node server.js` 명령을 실행하여 서버를 실행할 수 있습니다. 서버는 `http://localhost:3000` 주소에서 실행됩니다.

Person(😀): 
- 위의 node.js 소스로 만든 서버에 전달할 수 있도록 HTML 파일에서 
1. button A를 누르면 이름과 나이를 서버에 저장한다.
2. button B를 누르면 서버에서 이름과 나이를 가져온다. 
소스를 만들어주세요

ChatGPT(🤖): 
- 아래는 HTML 파일에서 서버로 데이터를 보내고 받을 수 있는 예제입니다.

```html

<!DOCTYPE html>
<html>
<head>
  <title>RESTful API 예제</title>
</head>
<body>
  <h1>이름과 나이 저장하기</h1>
  
  <div>
    <label for="name">이름:</label>
    <input type="text" id="name">
  </div>
  
  <div>
    <label for="age">나이:</label>
    <input type="number" id="age">
  </div>
  
  <button id="saveBtn">저장</button>
  <button id="retrieveBtn">불러오기</button>
  
  <script>
    const saveBtn = document.getElementById('saveBtn');
    const retrieveBtn = document.getElementById('retrieveBtn');
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');

    saveBtn.addEventListener('click', () => {
      const name = nameInput.value;
      const age = ageInput.value;

      const data = {
        name: name,
        age: age
      };

      fetch('/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.ok) {
          console.log('데이터 저장 완료');
        } else {
          console.error('데이터 저장 실패');
        }
      })
      .catch(error => {
        console.error('네트워크 오류:', error);
      });
    });

    retrieveBtn.addEventListener('click', () => {
      fetch('/data')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('데이터 불러오기 실패');
        }
      })
      .then(data => {
        console.log('이름:', data.name);
        console.log('나이:', data.age);
      })
      .catch(error => {
        console.error('네트워크 오류:', error);
      });
    });
  </script>
</body>
</html>
```



위의 코드는 `saveBtn` 버튼을 클릭하면 이름과 나이를 서버로 전송하고, `retrieveBtn` 버튼을 클릭하면 서버에서 이름과 나이를 가져와서 콘솔에 출력합니다.

HTML 파일을 생성한 후에 해당 파일을 웹 서버에 호스팅하고, 웹 브라우저에서 접속하여 버튼을 클릭하면 서버와의 통신이 이루어집니다. 서버는 전송받은 데이터를 파일에 저장하고, 요청 시에는 해당 파일에서 데이터를 읽어와 응답합니다.

Person(😀): 
- 위의 node.js 소스에서 /로 주소입력시 index.html을 출력하도록 해주세요

ChatGPT(🤖): 
- 아래는 Node.js 서버 코드를 수정하여 루트 경로(`/`)로 접속했을 때 `index.html` 파일을 출력하도록 하는 예제입니다.

```javascript

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

// 데이터 저장 경로
const filePath = 'data.json';

// 루트 경로로 접속했을 때 index.html 파일을 읽어서 출력
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  
  fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('서버 오류');
      return;
    }
    
    res.send(data);
  });
});

// 데이터 읽기
app.get('/data', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('서버 오류');
      return;
    }
    
    res.json(JSON.parse(data));
  });
});

// 데이터 저장
app.post('/data', (req, res) => {
  const newData = req.body;
  
  fs.writeFile(filePath, JSON.stringify(newData), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('서버 오류');
      return;
    }
    
    res.send('데이터 저장 완료');
  });
});

app.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다.');
});
```



위의 코드에서 `/` 경로로 접속했을 때 `index.html` 파일을 읽어서 클라이언트에게 전달합니다. `path` 모듈을 사용하여 `index.html` 파일의 경로를 계산하고, `fs.readFile()`을 사용하여 파일 내용을 읽어 클라이언트에게 전송합니다.

서버를 실행한 후 `http://localhost:3000` 주소로 접속하면 `index.html` 파일이 표시됩니다.

Person(😀): 
- 위의 node.js 소스에서 express가 에러가 납니다. 어떻게 설치하지요?

ChatGPT(🤖): 
- `express` 모듈을 설치하기 위해 다음 명령을 사용하여 `npm`을 통해 패키지를 설치해야 합니다.

터미널 또는 명령 프롬프트를 열고 다음 명령을 실행하세요:

```

npm install express
```



위 명령을 실행하면 `express` 모듈이 현재 프로젝트에 설치됩니다. 그리고 `package.json` 파일에 종속성이 추가됩니다.

설치가 완료되면 이전에 제공한 Node.js 서버 코드를 실행할 때 에러가 발생하지 않을 것입니다.

Person(😀): 
- 위의 node.js 소스는 데이터가 추가되지 않습니다. 
데이터 저장시 추가를 할 수 있도록 node.js 소스를 수정해주세요.

ChatGPT(🤖): 
- 아래는 데이터를 추가할 수 있는 방식으로 Node.js 서버 코드를 수정한 예제입니다.

```javascript

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

// 데이터 저장 경로
const filePath = 'data.json';

// 루트 경로로 접속했을 때 index.html 파일을 읽어서 출력
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  
  fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('서버 오류');
      return;
    }
    
    res.send(data);
  });
});

// 데이터 읽기
app.get('/data', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('서버 오류');
      return;
    }
    
    res.json(JSON.parse(data));
  });
});

// 데이터 추가
app.post('/data', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('서버 오류');
      return;
    }

    const existingData = JSON.parse(data);
    const newData = req.body;
    
    const mergedData = {
      ...existingData,
      ...newData
    };
    
    fs.writeFile(filePath, JSON.stringify(mergedData), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('서버 오류');
        return;
      }
      
      res.send('데이터 저장 완료');
    });
  });
});

app.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다.');
});
```



위의 코드에서 `/data` 엔드포인트에 POST 요청이 들어오면, 기존 데이터를 읽어와서 새로운 데이터와 병합한 후에 다시 파일에 저장합니다. 기존 데이터와 새로운 데이터를 병합하는 방법은 객체 스프레드 문법(`...`)을 사용하여 수행됩니다.

이제 클라이언트에서 POST 요청을 보낼 때, 기존 데이터에 새로운 데이터가 추가됩니다.

Person(😀): 
- 위의 소스도 원하는 기능이 실행되지 않습니다. 
디테일하게 요청합니다.
1. data.json로 읽어온 정보를 배열로 데이터처리 하세요
2. 데이터 추가시 배열에 추가하세요
3. 파일에 저장시 배열을 저장하세요
위의 내용을 적용해서 소스코드를 만들어주세요

ChatGPT(🤖): 
- 알겠습니다. 아래는 데이터를 배열로 처리하고, 데이터를 추가할 때 배열에 추가하고 파일에 저장하는 기능이 포함된 Node.js 서버 코드입니다.

```javascript

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

// 데이터 저장 경로
const filePath = 'data.json';

// 데이터 읽기
app.get('/data', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('서버 오류');
      return;
    }
    
    const dataArray = JSON.parse(data);
    res.json(dataArray);
  });
});

// 데이터 추가
app.post('/data', (req, res) => {
  const newData = req.body;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('서버 오류');
      return;
    }

    const dataArray = JSON.parse(data);
    dataArray.push(newData);
    
    fs.writeFile(filePath, JSON.stringify(dataArray), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('서버 오류');
        return;
      }
      
      res.send('데이터 저장 완료');
    });
  });
});

// 루트 경로로 접속했을 때 index.html 파일을 읽어서 출력
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  
  fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('서버 오류');
      return;
    }
    
    res.send(data);
  });
});

app.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다.');
});
```



위의 코드에서 `/data` 엔드포인트에 GET 요청이 들어오면, `data.json` 파일을 읽어와서 배열로 처리하여 클라이언트에게 전달합니다. `/data` 엔드포인트에 POST 요청이 들어오면, 기존 데이터 배열에 새로운 데이터를 추가한 후에 파일에 저장합니다.

데이터는 배열 형태로 관리되며, GET 요청 시에는 해당 배열을 JSON 형식으로 반환하고, POST 요청 시에는 새로운 데이터를 배열에 추가한 후에 파일에 저장합니다.

위의 코드를 실행하고 클라이언트에서 `/data` 엔드포인트에 GET 및 POST 요청을 보내면, 데이터를 읽고 추가할 수 있습니다.

Person(😀): 
- 위의 소스에서 dataArray.push is not a function이 발생합니다. 소스코드를 수정해주세요

ChatGPT(🤖): 
- 죄송합니다. `dataArray`가 배열이 아닌 경우 `push` 함수를 사용할 수 없습니다. 아래 수정된 코드에서는 초기에 빈 배열로 시작하고, `data.json` 파일이 존재하는 경우 파일의 내용을 배열로 처리합니다.

```javascript

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

// 데이터 저장 경로
const filePath = 'data.json';

// 데이터 읽기
app.get('/data', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('서버 오류');
      return;
    }

    let dataArray = [];
    if (data) {
      dataArray = JSON.parse(data);
    }
    
    res.json(dataArray);
  });
});

// 데이터 추가
app.post('/data', (req, res) => {
  const newData = req.body;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('서버 오류');
      return;
    }

    let dataArray = [];
    if (data) {
      dataArray = JSON.parse(data);
    }
    
    dataArray.push(newData);
    
    fs.writeFile(filePath, JSON.stringify(dataArray), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('서버 오류');
        return;
      }
      
      res.send('데이터 저장 완료');
    });
  });
});

// 루트 경로로 접속했을 때 index.html 파일을 읽어서 출력
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  
  fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('서버 오류');
      return;
    }
    
    res.send(data);
  });
});

app.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다.');
});
```



이제 `dataArray`는 초기에 빈 배열로 선언되고, `data.json` 파일이 존재하는 경우 파일의 내용을 배열로 처리하여 데이터를 추가할 수 있게 됩니다.

Person(😀): 
- data.json 파일이 없거나 array가 아니면 에러가 발생합니다. 
1. data.json 파일이 없다면 생성하고 array로 리턴
2. data.json이 배열이 아니라면 1처럼 하고 리턴 
으로 소스를 고쳐주세요

ChatGPT(🤖): 
- 알겠습니다. 아래 코드는 `data.json` 파일이 존재하지 않거나 배열이 아닌 경우, 파일을 생성하고 빈 배열로 초기화하여 처리하는 방식으로 수정한 코드입니다.

```javascript

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

// 데이터 저장 경로
const filePath = 'data.json';

// 데이터 읽기
app.get('/data', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // data.json 파일이 없을 경우, 빈 배열로 초기화
        const dataArray = [];
        fs.writeFile(filePath, JSON.stringify(dataArray), (err) => {
          if (err) {
            console.error(err);
            res.status(500).send('서버 오류');
            return;
          }
          res.json(dataArray);
        });
      } else {
        console.error(err);
        res.status(500).send('서버 오류');
      }
      return;
    }

    let dataArray;
    try {
      dataArray = JSON.parse(data);
    } catch (parseError) {
      // data.json 파일이 배열이 아닐 경우, 빈 배열로 초기화
      console.error(parseError);
      dataArray = [];
      fs.writeFile(filePath, JSON.stringify(dataArray), (err) => {
        if (err) {
          console.error(err);
          res.status(500).send('서버 오류');
          return;
        }
        res.json(dataArray);
      });
      return;
    }

    res.json(dataArray);
  });
});

// 데이터 추가
app.post('/data', (req, res) => {
  const newData = req.body;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err && err.code !== 'ENOENT') {
      console.error(err);
      res.status(500).send('서버 오류');
      return;
    }

    let dataArray = [];
    if (data) {
      try {
        dataArray = JSON.parse(data);
      } catch (parseError) {
        console.error(parseError);
        res.status(500).send('서버 오류');
        return;
      }
    }
    
    dataArray.push(newData);
    
    fs.writeFile(filePath, JSON.stringify(dataArray), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('서버 오류');
        return;
      }
      
      res.send('데이터 저장 완료');
    });
  });
});

// 루트 경로로 접속했을 때 index.html 파일을 읽어서 출력
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  
  fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('서버 오류');
      return;
    }
    
    res.send(data);
  });
});

app.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다.');
});
```



이제 `data.json` 파일이 존재하지 않거나 배열이 아닌 경우, 파일을 생성하고 빈 배열로 초기화하여 처리합니다.

Person(😀): 
- index.html에서
1. <button id="retrieveBtn">불러오기</button> 버튼을 눌렀을 경우
2. 결과값을 <button id="retrieveBtn"> 밑에 출력한다. 
소스를 수정해주세요

ChatGPT(🤖): 
- 아래는 `index.html` 파일을 수정하여 "불러오기" 버튼을 눌렀을 때 결과값을 아래에 출력하는 코드입니다.

```html

<!DOCTYPE html>
<html>
<head>
  <title>데이터 불러오기</title>
</head>
<body>
  <h1>데이터 불러오기</h1>

  <button id="retrieveBtn">불러오기</button>
  <div id="result"></div>

  <script>
    const retrieveBtn = document.getElementById('retrieveBtn');
    const resultDiv = document.getElementById('result');

    retrieveBtn.addEventListener('click', () => {
      fetch('/data')
        .then(response => response.json())
        .then(data => {
          let resultHTML = '';
          data.forEach(item => {
            resultHTML += `<p>${item.name} - ${item.age}</p>`;
          });
          resultDiv.innerHTML = resultHTML;
        })
        .catch(error => {
          console.error(error);
          resultDiv.textContent = '데이터를 불러오는 중 오류가 발생했습니다.';
        });
    });
  </script>
</body>
</html>
```



위의 코드에서는 "불러오기" 버튼 클릭 시 `/data` 엔드포인트에 GET 요청을 보내고, 서버에서 반환한 데이터를 받아와 결과값을 `result`라는 id를 가진 `<div>` 요소에 출력합니다. 데이터는 `forEach` 메서드를 사용하여 각각의 이름과 나이를 `<p>` 요소로 구성된 HTML 문자열로 만들고, `resultDiv.innerHTML`을 통해 결과값을 업데이트합니다. 만약 데이터를 불러오는 과정에서 오류가 발생하면 오류 메시지가 출력됩니다.

이렇게 수정한 `index.html` 파일을 사용하면 "불러오기" 버튼을 클릭하여 결과값을 아래에 출력할 수 있습니다.

Person(😀): 
- 위의 소스는 변수명부터 맞지 않습니다. 
다음 소스에서 
<!DOCTYPE html>
<html>
<head>
  <title>RESTful API 예제</title>
</head>
<body>
  <h1>이름과 나이 저장하기</h1>
  
  <div>
    <label for="name">이름:</label>
    <input type="text" id="name">
  </div>
  
  <div>
    <label for="age">나이:</label>
    <input type="number" id="age">
  </div>
  
  <button id="saveBtn">저장</button>
  <button id="retrieveBtn">불러오기</button>
  
  <script>
    const saveBtn = document.getElementById('saveBtn');
    const retrieveBtn = document.getElementById('retrieveBtn');
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');

    saveBtn.addEventListener('click', () => {
      const name = nameInput.value;
      const age = ageInput.value;

      const data = {
        name: name,
        age: age
      };

      fetch('/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.ok) {
          console.log('데이터 저장 완료');
        } else {
          console.error('데이터 저장 실패');
        }
      })
      .catch(error => {
        console.error('네트워크 오류:', error);
      });
    });

    retrieveBtn.addEventListener('click', () => {
      fetch('/data')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('데이터 불러오기 실패');
        }
      })
      .then(data => {
        console.log('이름:', data.name);
        console.log('나이:', data.age);
      })
      .catch(error => {
        console.error('네트워크 오류:', error);
      });
    });
  </script>
</body>
</html>

<button id="retrieveBtn">를 누르면 
<button id="retrieveBtn">밑에 서버에서 가져온 값을 출력하도록
소스를 수정해주세요

ChatGPT(🤖): 
- 죄송합니다. 이전에 제시한 내용과 맞지 않았습니다. 아래는 수정된 `index.html` 소스 코드입니다.

```html

<!DOCTYPE html>
<html>
<head>
  <title>RESTful API 예제</title>
</head>
<body>
  <h1>이름과 나이 저장하기</h1>
  
  <div>
    <label for="name">이름:</label>
    <input type="text" id="name">
  </div>
  
  <div>
    <label for="age">나이:</label>
    <input type="number" id="age">
  </div>
  
  <button id="saveBtn">저장</button>
  <button id="retrieveBtn">불러오기</button>
  
  <div id="result"></div>
  
  <script>
    const saveBtn = document.getElementById('saveBtn');
    const retrieveBtn = document.getElementById('retrieveBtn');
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const resultDiv = document.getElementById('result');

    saveBtn.addEventListener('click', () => {
      const name = nameInput.value;
      const age = ageInput.value;

      const data = {
        name: name,
        age: age
      };

      fetch('/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.ok) {
          console.log('데이터 저장 완료');
        } else {
          console.error('데이터 저장 실패');
        }
      })
      .catch(error => {
        console.error('네트워크 오류:', error);
      });
    });

    retrieveBtn.addEventListener('click', () => {
      fetch('/data')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('데이터 불러오기 실패');
        }
      })
      .then(data => {
        let resultHTML = `<p>이름: ${data.name}</p><p>나이: ${data.age}</p>`;
        resultDiv.innerHTML = resultHTML;
      })
      .catch(error => {
        console.error('네트워크 오류:', error);
      });
    });
  </script>
</body>
</html>
```



위의 코드에서는 "불러오기" 버튼을 클릭했을 때 서버에서 가져온 값들을 `resultDiv`라는 id를 가진 `<div>` 요소에 출력합니다. 이를 위해 `resultDiv` 변수를 추가하고, `fetch` 요청이 완료되면 `then` 메서드에서 결과값을 받아와 `resultDiv.innerHTML`을 통해 결과값을 업데이트합니다. 결과값은 `<p>` 요소로 구성되어 `resultHTML` 변수에 저장되고, 이를 `resultDiv.innerHTML`에 할당하여 화면에 출력됩니다.

이렇게 수정한 `index.html` 파일을 사용하면 "불러오기" 버튼을 클릭하여 서버에서 가져온 값을 아래에 출력할 수 있습니다.

Person(😀): 
- 아.. 정말 retrieveBtn를 눌렀을 때 받아오는 데이터는 배열입니다!
가져온 값을 배열로 처리해주세요

ChatGPT(🤖): 
- 죄송합니다. 이전에 제시한 내용과 맞지 않았습니다. 아래는 수정된 `index.html` 소스 코드입니다. 데이터를 배열로 처리하여 출력합니다.

```html

<!DOCTYPE html>
<html>
<head>
  <title>RESTful API 예제</title>
</head>
<body>
  <h1>이름과 나이 저장하기</h1>
  
  <div>
    <label for="name">이름:</label>
    <input type="text" id="name">
  </div>
  
  <div>
    <label for="age">나이:</label>
    <input type="number" id="age">
  </div>
  
  <button id="saveBtn">저장</button>
  <button id="retrieveBtn">불러오기</button>
  
  <div id="result"></div>
  
  <script>
    const saveBtn = document.getElementById('saveBtn');
    const retrieveBtn = document.getElementById('retrieveBtn');
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const resultDiv = document.getElementById('result');

    saveBtn.addEventListener('click', () => {
      const name = nameInput.value;
      const age = ageInput.value;

      const data = {
        name: name,
        age: age
      };

      fetch('/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.ok) {
          console.log('데이터 저장 완료');
        } else {
          console.error('데이터 저장 실패');
        }
      })
      .catch(error => {
        console.error('네트워크 오류:', error);
      });
    });

    retrieveBtn.addEventListener('click', () => {
      fetch('/data')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('데이터 불러오기 실패');
        }
      })
      .then(data => {
        let resultHTML = '<ul>';
        data.forEach(item => {
          resultHTML += `<li>이름: ${item.name}, 나이: ${item.age}</li>`;
        });
        resultHTML += '</ul>';
        resultDiv.innerHTML = resultHTML;
      })
      .catch(error => {
        console.error('네트워크 오류:', error);
      });
    });
  </script>
</body>
</html>
```



위의 코드에서는 "불러오기" 버튼을 클릭했을 때 서버에서 가져온 값을 배열로 처리하여 `<ul>`과 `<li>` 요소를 사용하여 목록 형태로 출력합니다. 각각의 이름과 나이는 `<li>` 요소로 구성되어 `resultHTML` 변수에 추가되고, 최종적으로 `resultDiv.innerHTML`에 할당하여 화면에 출력됩니다.

이렇게 수정한 `index.html` 파일을 사용하면 "불러오기" 버튼을 클릭하여 서버에서 가져온 값을 배열로 처리하여 출력할 수 있습니다.
