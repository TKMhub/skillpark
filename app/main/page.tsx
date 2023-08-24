"use client";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";

export default function Main() {
  const [posts, setPosts] = useState<{ [x: string]: any }[]>([]);

  useEffect(() => {
    // データベースからデータを取得する処理
    const postData = collection(db, "posts");

    // 値を取得
    getDocs(postData).then((snapshot) => {
      // console.log(snapshot.docs.map((doc) => ({ ...doc.data() })));
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data() })));
    });

    //リアルタイムで値を取得
    onSnapshot(postData, (post) => {
      setPosts(post.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);

  return (
    <div>
      <h1>データベースからの取得内容</h1>
      {posts.map((post) => (
        <div key={post.title}>
          <h2>{post.title}</h2>
          <p>{post.text}</p>
        </div>
      ))}
    </div>
  );
}
