## About the Project

---

웹을 사용하여 만든 온라인 보드게임 아그리콜라 프로토타입

<br/>

## Stack

---

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/tailwind-FFFFFF?style=for-the-badge&logo=tailwindcss&logoColor=#38BDF8">

<br/>

## 게임 테스트 방법

---

### player 1

1. https://jazzy-trifle-183e7d.netlify.app/ 접속합니다.

### player 2

1. 해당 깃허브 프로젝트 코드를 로컬에 다운로드합니다.
2. 프로젝트 루트 디렉토리에서 **npm install**을 명령어를 실행합니다.
3. context폴더 안에 **AuthContext.jsx** 파일에 들어갑니다.
4. const [pid, setPid] = useState(2);를 **const [pid, setPid] = useState(1);** 로 변경하고 저장합니다.
5. 프로젝트 루트 디렉토리에서 **npm start**를 명령어를 실행합니다.

player1, player2 한번 씩 새로고침을 하여 웹소켓 연결 후 게임을 시작합니다.

<br/>

## 작동 기능 범위 및 한계

---

- 현재 5라운드부터 8라운드까지의 플레이가 가능합니다.
- 울타리(fence), round카드 open, 최종결과 modal은 상대 플레이어에게 보이지 않습니다.

<br/>

## 시연 시나리오

---

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
