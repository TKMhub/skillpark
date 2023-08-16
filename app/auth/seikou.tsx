"use client";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const seikou = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // クライアントサイドで認証をチェック
    if (typeof window !== "undefined") {
      const auth = getAuth();

      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.push("/login");
        }
      });

      return () => unsubscribe();
    }
  }, []);
  return <div>seikou</div>;
};

export default seikou;
