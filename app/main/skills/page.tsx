"use client";
import React, { useEffect, useState } from "react";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { EditorComponent } from "@/app/components/EditorComponent/EditorComponent";
import PostList from "@/app/components/PostList/page";

export default function skils() {
  return (
    <div className="flex">
      <main className="w-1/2">
        <h2 className="font-bold pb-3 ">自分のスキルを投稿する</h2>
        <EditorComponent />
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
