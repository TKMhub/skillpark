"use client";
import React, { useEffect, useState } from "react";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import PostList from "@/app/components/PostList/page";
import { EditorComponent2 } from "@/app/components/EditorComponent/EditorComponent2";
import AlertDialogSlide from "@/app/components/AlertDialogSlide/AlertDialogSlide";

export default function post() {
  return (
    <div className="flex">
      <AlertDialogSlide alertDetail="特定の機能" />
      <main className="w-1/2">
        <h2 className="font-bold pb-3 ">投稿する</h2>
        <EditorComponent2 />
      </main>
      <aside className="w-1/2 ml-3">
        <h2 className="font-bold pb-3">記事一覧</h2>
        <PostList />
        <PostList />
        <PostList />
        <PostList />
        <PostList />
        <PostList />
        <PostList />
        <PostList />
        <PostList />
        <PostList />
      </aside>
    </div>
  );
}
