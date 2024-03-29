# 아그리콜라 (Agricola)

<p align='center'><img width="30%" src="https://github.com/Agricola-Team4/Agricola-React/assets/68095803/28efdf7f-0303-41e4-a8dc-f1dc8e0f932a"/></p>

## About the Project

개발 기간 : 2023.03 ~ 203.06  
개발 인원 : 6명 (FE 2, BE 4)

소프트웨어 공학 수업에서 진행한 프로젝트  
웹을 사용하여 만든 온라인 보드게임 아그리콜라 프로토타입

<br/>

## Stacks

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=react%20query&logoColor=white"> <img src="https://img.shields.io/badge/tailwind-F0F0F0?style=for-the-badge&logo=tailwindcss&logoColor=#38BDF8">

<br/>

## Architecture Design

<p align='center'><img width="90%" src="https://github.com/Agricola-Team4/Agricola-React/assets/68095803/c57dc75e-4546-46d7-908b-e3dc94bac495"/></p>

<br/>

## 게임 화면

<p align='center'><img width="90%" src="https://github.com/Agricola-Team4/Agricola-React/assets/68095803/3146e05d-2acf-4e77-89ec-e62e98604b43"/></p>

<br/>

## 게임 테스트 방법 (현재 동작 X)

### player 1

1. 해당 깃허브 프로젝트 코드를 로컬에 다운로드합니다.
2. 프로젝트 루트 디렉토리에서 **npm install**을 명령어를 실행합니다.
3. context폴더 안에 **AuthContext.jsx** 파일에 들어갑니다.
4. const [pid, setPid] = useState(2);를 **const [pid, setPid] = useState(1);** 로 변경하고 저장합니다.
5. 프로젝트 루트 디렉토리에서 **npm start**를 명령어를 실행합니다.

### player 2

1. 크롬 브라우저에서 https://jazzy-trifle-183e7d.netlify.app/ 접속합니다.
2. url 왼쪽에 있는 자물쇠 아이콘을 클릭합니다.
3. 사이트 설정에 들어갑니다.
4. 아래로 스크롤하여 '안전하지 않은 콘텐츠'에 허용을 눌러줍니다.

player1, player2 한번 씩 새로고침을 하여 웹소켓 연결 후 게임을 시작합니다.

<br/>

## 작동 기능 범위 및 한계

- 현재 5라운드부터 8라운드까지의 플레이가 가능합니다.
- 울타리(fence), round카드 open, 최종결과 modal은 상대 플레이어에게 보이지 않습니다.

<br/>

## 시연 시나리오

player1(dongree), player2(hyeseon)  
player2(hyeseon)가 선플레이어인 경우

player2 기본자원  
player1 교습  
player2 기본자원  
player1 울타리

player2 기본자원  
player1 양시장  
player2 기본자원  
player1 농지

player2 농지  
player1 농장확장  
player2 기본자원  
player1 회합장소
