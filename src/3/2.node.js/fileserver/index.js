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