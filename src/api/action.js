import { takeAction } from "./agricola";
export function fence(setIsAbActive, setIsFbActive, setPrompt) {
  // takeAction({ pid, aid: 17 });
  setIsFbActive(true);
  setIsAbActive(false);

  setPrompt({
    message: "울타리를 치고 싶은 땅을 모두 선택하세요.",
    buttons: [
      {
        text: "최종선택완료",
        onClick: () => {
          console.log("hello");
        },
      },
      {
        text: "이어서 치기",
        onClick: () => {
          console.log("이어서 치기");
          setPrompt({
            message: "이어서 울타리를 만들고 싶은 땅을 선택해주세요.",
            buttons: [
              {
                text: "최종선택완료",
                onClick: () => {
                  console.log("최종선택완료 함수");
                },
              },
              {
                text: "이어서 치기",
                onClick: () => {
                  console.log("최종선택완료 함수");
                },
              },
            ],
          });
        },
      },
    ],
  });
}
