"use client";
import React, { useEffect, useState } from "react";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import PostList from "@/app/components/PostList/PostList";
import EnhancedTableHead from "@/app/components/PostList/EnhancedTableHead";
import { EditorComponent2 } from "@/app/components/EditorComponent/EditorComponent2";

export default function post() {
  return (
    <div className="flex">
      <main className="w-1/2">
        <h2 className="font-bold pb-3 ">投稿する</h2>
        <EditorComponent2 />
      </main>
      <aside className="w-1/2 ml-3">
        <h2 className="font-bold pb-3">おすすめ記事</h2>
        <PostList />
        <h2 className="font-bold pb-3">記事一覧</h2>
        <EnhancedTableHead />
      </aside>
    </div>
  );
}
