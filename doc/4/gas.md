# Google Apps Script 예제

```
😀 Google app scripts 예제 10개만 알려줘
```
### 🤖 ChatGPT
물론입니다! 여기에 Google Apps Script의 10 가지 예제를 제공하겠습니다:

1. 스프레드시트에 데이터 입력하기:
```javascript
function 데이터입력() {
  var 스프레드시트 = SpreadsheetApp.getActiveSpreadsheet();
  var 시트 = 스프레드시트.getSheetByName("시트명");
  시트.getRange("A1").setValue("Hello, World!");
}
```

2. 이메일 보내기:
```javascript
function 이메일보내기() {
  var 이메일주소 = "example@gmail.com";
  var 제목 = "안녕하세요!";
  var 본문 = "안녕하세요, 이메일 내용입니다.";
  MailApp.sendEmail(이메일주소, 제목, 본문);
}
```

3. 스프레드시트에서 데이터 읽기:
```javascript
function 데이터읽기() {
  var 스프레드시트 = SpreadsheetApp.getActiveSpreadsheet();
  var 시트 = 스프레드시트.getSheetByName("시트명");
  var 데이터 = 시트.getRange("A1").getValue();
  Logger.log(데이터);
}
```

4. 폼 만들기:
```javascript
function 폼만들기() {
  var 양식 = FormApp.create("새 양식");
  양식.addTextItem().setTitle("이름");
  양식.addMultipleChoiceItem()
       .setTitle("좋아하는 색상")
       .setChoiceValues(["빨강", "파랑", "노랑"]);
  Logger.log('양식 URL: ' + 양식.getPublishedUrl());
}
```

5. 드라이브 폴더 생성하기:
```javascript
function 폴더생성() {
  var 드라이브폴더 = DriveApp.createFolder("새 폴더");
  Logger.log('폴더 ID: ' + 드라이브폴더.getId());
}
```

6. 시간 기반 트리거 설정하기:
```javascript
function 시간기반트리거() {
  ScriptApp.newTrigger('함수명')
      .timeBased()
      .atDate(2023, 6, 1)
      .atHour(9)
      .create();
}
```

7. 스프레드시트에 시트 추가하기:
```javascript
function 시트추가() {
  var 스프레드시트 = SpreadsheetApp.getActiveSpreadsheet();
  스프레드시트.insertSheet("새 시트");
}
```

8. 셀 서식 지정하기:
```javascript
function 셀서식지정() {
  var 스프레드시트 = SpreadsheetApp.getActiveSpreadsheet();
  var 시트 = 스프레드시트.getSheetByName("시트명");
  var 범위 = 시트.getRange("A1:B2");
  var 형식 = 범위.getNumberFormats();
  형식[0][0] = "0.00";
  범위.setNumberFormats(형식);
}
```

9. 사용자 정의 함수 생성하기:
```javascript
function 대문자변환(문자열) {
  return 문자열.toUpperCase();
}
```

10. 시트 데이터 정렬하기:
```javascript
function 데이터정렬() {
  var 스프레드시트 = SpreadsheetApp.getActiveSpreadsheet();
  var 시트 = 스프레드시트.getSheetByName("시트명");
  시트.getRange("A1:B10").sort(1);
}
```

이 예제들은 Google Apps Script를 사용하여 다양한 작업을 수행하는 방법을 보여줍니다. 원하는 예제를 선택하여 시작할 수 있습니다. 자세한 내용은 Google Apps Script 문서와 자습서를 참조하십시오.

```
😀 
구글시트를 "GAS테스트"라고 만들었다. 
이곳에서 위의 예제를 어떻게 테스트 해볼 수 있어요?
```

### 🤖 ChatGPT
Google Apps Script 예제를 "GAS테스트" 시트에서 실행하려면 다음 단계를 따르세요:

1. 구글 시트에서 "GAS테스트" 시트를 엽니다.

2. 상단 메뉴에서 "도구"를 선택한 다음 "스크립트 편집기"를 클릭합니다.

3. 스크립트 편집기가 열리면, 해당 예제 중 하나를 복사하여 스크립트 편집기에 붙여넣습니다.

4. 원하는 경우 스크립트를 수정하여 특정 요구에 맞게 설정합니다. 예를 들어, 이메일 주소, 시트 이름, 범위 등을 필요에 따라 변경할 수 있습니다.

5. 상단 메뉴에서 "실행"을 클릭한 다음 실행할 함수를 선택합니다. 예를 들어, "데이터입력" 함수를 실행하려면 "데이터입력"을 선택합니다.

6. 처음 실행하는 경우, 스크립트에 대한 권한 요청 팝업이 나타납니다. 요청된 권한을 허용하려면 팝업에 따라 지침을 따르세요.

7. 스크립트가 성공적으로 실행되면, 스크립트 실행 결과나 출력 내용이 필요한 경우 "보기" 메뉴에서 "로그"를 클릭하여 로그를 확인할 수 있습니다.

이제 "GAS테스트" 시트에서 예제 스크립트를 실행하여 결과를 확인할 수 있습니다. 필요에 따라 예제를 수정하고 여러 가지 작업을 시도해볼 수 있습니다.

```
😀 
GAS테스트 시트에서 상단에 내가 만든 "예제실행"이라는 메뉴를 만들고
스크립트 편집기에 있는 함수를 하나 선택하여 실행하고자 합니다. 
방법을 알려주세요
```

### 🤖 ChatGPT

GAS테스트 시트에 사용자 지정 메뉴를 추가하여 스크립트 편집기에 있는 함수를 실행하려면 다음 단계를 따르세요:

1. 스크립트 편집기에서 함수를 실행할 사용자 지정 메뉴를 생성하는 코드를 추가합니다. 예를 들어, "예제실행"이라는 메뉴를 추가하려면 다음과 같은 코드를 사용할 수 있습니다:

```javascript
function onOpen() {
  var 스프레드시트 = SpreadsheetApp.getActiveSpreadsheet();
  var 메뉴 = [
    {name: "데이터 입력", functionName: "데이터입력"},
    {name: "이메일 보내기", functionName: "이메일보내기"},
    // 다른 함수들을 추가로 포함할 수 있습니다.
  ];
  스프레드시트.addMenu("예제실행", 메뉴);
}
```

2. 위의 코드를 스크립트 편집기에 추가하고 저장합니다.

3. 스크립트 편집기를 닫고 "GAS테스트" 시트로 돌아갑니다.

4. 상단 메뉴에서 "도구"를 선택한 다음 "스크립트 편집기"를 클릭하여 스크립트 편집기를 다시 엽니다.

5. 스크립트 편집기에서 "예제실행" 메뉴를 클릭하여 사용자 지정 메뉴를 생성합니다.

6. "예제실행" 메뉴를 클릭하면 하위 메뉴에 등록한 함수가 실행됩니다.

이제 "예제실행" 메뉴를 통해 스크립트 편집기에 있는 함수를 간편하게 실행할 수 있습니다. 필요한 함수를 추가로 등록하고 메뉴를 확장하여 다양한 작업을 수행할 수 있습니다.