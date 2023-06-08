// import { takeAction, buildFence } from "./agricola";
// export function fence(
//   setIsAbActive,
//   setIsFbActive,
//   setPrompt,
//   getSelectedPosArr
// ) {
//   // takeAction({ pid, aid: 17 });
//   setIsFbActive(true);
//   setIsAbActive(false);

//   setPrompt({
//     message: "울타리를 치고 싶은 땅을 모두 선택하세요.",
//     buttons: [
//       {
//         text: "최종선택완료",
//         onClick: async () => {
//           console.log("hello");
//           const pid = 1;
//           console.log("짝은어레이");
//           //   const fenceDataArray = buildFence(pid, [selectedPosArr]);
//           //   console.log(fenceDataArray);
//         },
//       },
//       {
//         text: "이어서 치기",
//         onClick: () => {
//           console.log("이어서 치기");
//           setPrompt({
//             message: "이어서 울타리를 만들고 싶은 땅을 선택해주세요.",
//             buttons: [
//               {
//                 text: "최종선택완료",
//                 onClick: () => {
//                   console.log("최종선택완료 함수");
//                 },
//               },
//               {
//                 text: "이어서 치기",
//                 onClick: () => {
//                   console.log("최종선택완료 함수");
//                 },
//               },
//             ],
//           });
//         },
//       },
//     ],
//   });
// }
