"use client";
import React, { useEffect, useState } from "react";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { EditorComponent } from "@/app/components/EditorComponent/EditorComponent";
import PostList from "@/app/components/PostList/PostList";

export default function skils() {
  return (
    <div className="flex">
      <main className="w-2/3">
        <h2 className="font-bold pb-3 ">プロジェクト一覧</h2>
        <div></div>
      </main>
      <aside className="w-1/3 ml-3">
        <h2 className="font-bold pb-3">カテゴリ一覧</h2>
      </aside>
    </div>
  );
}
