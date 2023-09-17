"use client";
import React, { useEffect, useState } from "react";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";

export default function roadmap() {
  return (
    <div className="flex">
      <main className="w-2/3">
        <h2 className="font-bold pb-3 ">ロードマップ</h2>
        <div></div>
      </main>
      <aside className="w-1/3 ml-3">
        <h2 className="font-bold pb-3">テスト</h2>
      </aside>
    </div>
  );
}
