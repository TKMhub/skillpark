import { atom } from "recoil";

export const layoutTitle = atom({
  key: "layoutTitle", // アトムの一意のキー
  default: "", // 初期値
});

// アトムの作成
// Recoilのアトムは、状態の最小単位です。アトムはアプリケーションのどのコンポーネントからもアクセス・更新が可能です。

// javascript
// Copy code
// import { atom } from 'recoil';

// export const counterState = atom({
//   key: 'counterState', // アトムの一意のキー
//   default: 0, // 初期値
// });
// コンポーネントでのアトムの使用
// Recoilの状態をReactコンポーネントで使用するには、いくつかのユーティリティーフックが提供されています。

// useRecoilState: アトムの値を取得または設定するためのフックです。
// jsx
// Copy code
// import { useRecoilState } from 'recoil';
// import { counterState } from './path-to-your-atom-file';

// function Counter() {
//   const [count, setCount] = useRecoilState(counterState);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }
// useRecoilValue: アトムの値を読み取るのみの場合に使用します。
// jsx
// Copy code
// import { useRecoilValue } from 'recoil';

// function DisplayCount() {
//   const count = useRecoilValue(counterState);

//   return <p>Count: {count}</p>;
// }
// useSetRecoilState: アトムの状態を設定するのみの場合に使用します。
// jsx
// Copy code
// function IncrementButton() {
//   const setCount = useSetRecoilState(counterState);

//   return <button onClick={() => setCount((count) => count + 1)}>Increment</button>;
// }
// セレクタの使用
// セレクタは、アトムや他のセレクタの値を変換するための純粋な関数です。計算された状態や非同期クエリを扱うのに便利です。

// javascript
// Copy code
// import { selector } from 'recoil';

// export const doubleCounterState = selector({
//   key: 'doubleCounterState',
//   get: ({ get }) => {
//     const count = get(counterState);
//     return count * 2;
//   }
// });
// このセレクタは、counterStateの値の2倍の値を返します。
// これをコンポーネントで使う場合、useRecoilValueを使用できます。

// jsx
// Copy code
// function DisplayDoubleCount() {
//   const doubleCount = useRecoilValue(doubleCounterState);

//   return <p>Double Count: {doubleCount}</p>;
// }
// これらの基本を理解すれば、Recoilを使用してNext.jsのアプリケーションで状態管理を行うことができます。
// Recoilには、これらの機能の他にも、非同期処理やアトムのファミリーなど、さまざまな高度な機能がありますので、公式ドキュメントを参照することをおすすめします。
