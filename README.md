## 항해99 주특기과제 4 & 5 


### 폴더구조 

```jsx
📦src  
 ┣ 📂Hook  
 ┃ ┣ 📜Auth.jsx  
 ┃ ┗ 📜useInput.jsx  
 ┣ 📂axios  
 ┃ ┗ 📜api.js  
 ┣ 📂components  
 ┃ ┣ 📂Deatil  
 ┃ ┃ ┗ 📜DeatilSidebar.jsx  
 ┃ ┣ 📂Home  
 ┃ ┃ ┗ 📜List.jsx  
 ┃ ┣ 📂common  
 ┃ ┃ ┣ 📜Button.jsx  
 ┃ ┃ ┣ 📜Footer.jsx  
 ┃ ┃ ┗ 📜Header.jsx  
 ┃ ┗ 📜Sidebar.jsx  
 ┣ 📂pages  
 ┃ ┣ 📜Detail.jsx  
 ┃ ┣ 📜Home.jsx  
 ┃ ┣ 📜Login.jsx  
 ┃ ┗ 📜Signup.jsx  
 ┣ 📂redux  
 ┃ ┣ 📂config  
 ┃ ┃ ┗ 📜configStore.js  
 ┃ ┗ 📂modules  
 ┃ ┃ ┗ 📜PostsSlice.js  
 ┣ 📂shared  
 ┃ ┗ 📜Router.jsx  
 ┣ 📂style  
 ┃ ┣ 📜GlobalStyle.jsx  
 ┃ ┣ 📜mixin.jsx  
 ┃ ┗ 📜theme.jsx  
 ┣ 📜.DS_Store  
 ┣ 📜App.jsx  
 ┗ 📜index.js
```

## 기간

23-02-18 ~ 23-02-23 

## 기능

## 🛠️ TOOLS 
 ![](https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=VisualStudioCode&logoColor=white)


##  🛠️ 기술스택

 ![](https://img.shields.io/badge/Gir-F05032?style=for-the-badge&logo=Git&logoColor=white)
 ![](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)
  ![](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white)
![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
 ![](https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white)
![](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white)
![](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white)
![](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=JSON&logoColor=white)









## 웹뷰

### Home Page
<img width="800" alt="스크린샷 2023-02-23 19 24 54" src="https://user-images.githubusercontent.com/95469708/220885299-cb4a063c-1ec2-4dbb-a63f-7cab9a3c68fc.png">
#### 사이드바 + 버튼을 눌러 새로운 POSTS 등록 

<img width="800" alt="스크린샷 2023-02-23 19 25 02" src="https://user-images.githubusercontent.com/95469708/220885547-6e03a25e-1291-4fe7-a016-2808f4d867c3.png">
등록된 POST를 클릭하면 상세페이지로 이동 

### 상세페이지

<img width="800" alt="스크린샷 2023-02-23 19 25 21" src="https://user-images.githubusercontent.com/95469708/220885709-a66fd8d2-acce-4586-963b-d6e60f338c95.png">
#### 사이드바 클릭하여 수정 및 삭제 가능 

<img width="800" alt="스크린샷 2023-02-23 19 26 01" src="https://user-images.githubusercontent.com/95469708/220886446-db5edccd-7116-4268-a755-a128ddf8ae35.png">

#### 로그인 회원가입 페이지

<img width="800" alt="스크린샷 2023-02-23 19 54 26" src="https://user-images.githubusercontent.com/95469708/220887040-15071b66-5432-4ff3-9ec3-ca055437ae10.png">
#### 정규식을 통해 아이디와 비밀번호를 조건에 맞게  회원가입

<img width="800" alt="스크린샷 2023-02-23 22 11 23" src="https://user-images.githubusercontent.com/95469708/220916399-67d303d0-8db1-401e-acc1-6db732bdd485.png">
#### 로그인 성공시 서버 로부터 발급받은 토큰을 쿠키에 저장 



### 쿠키에발급시간이 지나거나 삭제시  쿠키체크 함수를 통해 로그인페이지로 이동






