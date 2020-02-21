# 기본적인 MVC 형식의 포스팅 웹사이트 express 로 구축하기.

## 1. 회원가입, 로그인, 이메일 체크 기능 구현.
## 2. 제목과 내용을 작성 후 게시 가능.

-  nodeJS의 프레임워크인 express를 이용한 웹 어플리케이션.  
   page 뷰 방식은 ejs 형식을 사용(Django 풀스택 프로젝트에서 유사한 방식 사용경험).

-  프로젝트의 구성도는 server 폴더 안에  
   Model, View, Controller (MVC) 폴더 생성 그외 config, routes 폴더도 함께 생성.

-  app.js를 통해 설치한 미들웨어들을 변수에 넣고, 다른 곳에서 불러 사용 할 수 있도록 해줌(이 부분은 다시 확인이 필요).  
   DB 설정과 웹페이지 주소 경로에 해당하는 파일을 연결 시켜줌.

-  HTML의 기본 형태에 해당하는 header, stylesheet, footer, javascript를 미리 파일(ejs)로 만들어 두고  
   새로운 페이지를 만들때마다 ejs 방식으로 해당하는 파일을 불러와서(연결시켜) 페이지를 완성시킴.

-  passport를 이용해서 인증을 사용했고, mongoDB를 이용해서 사용자 정보를 (세션에 express-session을 이용해)저장.

-  passport에서 사용하는 usernameField 및 passwordField 기본값을 각각 email, password로 지정.  
   email의 경우 입력받는 email을 모두 소문자로 지정해서 저장.

-  회원가입시 해당하는 email을 가진 user가 존재한다면 flash를 통해 사용자 친화적 메시지 출력.

-  router를 이용해 GET 이나 POST 형식의 요청이 들어올때 성공시, 실패시 리다이렉션 경로 지정.

-  comment의 경우 정렬 기준을 created로 하고 작성시 req.body로 새 comment 전달.  
   comment를 작성하는 유저는 req.user로 전달.

-  comment는 modal로 작성하도록 디자인.