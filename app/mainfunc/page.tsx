"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
  // スクロール位置の状態を定義します.
  const [scrollY, setScrollY] = useState(0);

  // スクロールイベントを監視します.
  useEffect(() => {
    // スクロール位置を取得する関数.
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // スクロールイベントにリスナーを追加します.
    window.addEventListener("scroll", handleScroll);

    // クリーンアップ関数です. コンポーネントがアンマウントされた時にリスナーを削除します.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //初期表示でアニメーションを実行
  const variantsTop = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: { opacity: 1, x: "0" },
  };

  // スクロール位置に基づいてアニメーションの状態を設定します.
  const variants2 = {
    hidden: { opacity: 0 },
    visible: { opacity: scrollY > 100 ? 1 : 0 }, // 100px以上スクロールしたら表示.
  };

  // スクロール位置に基づいてアニメーションの状態を設定します.
  const variants3 = {
    hidden: { opacity: 0 },
    visible: { opacity: scrollY > 1000 ? 1 : 0 }, // 100px以上スクロールしたら表示.
  };

  return (
    <div>
      <a href="#first">TOP</a>
    </div>
  );
}
