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
      <section>
        <h1>データベースからの取得テスト</h1>
        <br />
        {posts.map((post) => (
          <div key={post.title}>
            <br />
            <h2>{post.title}</h2>
            <br />
            <p>{post.text}</p>
          </div>
        ))}
      </section>
      <br />
      <br />
      <br />
      <section>
        <h1>ファイルサーバーからのJPEGファイル取得テスト</h1>
        <h1>①ファイヤーストア連携</h1>
        <br />
        <h1>グローバル状態管理</h1>
        <h1>②Recoilによる状態管理</h1>
        <br />
        {posts.map((post) => (
          <></>
        ))}
      </section>
      <section>
        <h1>ファイルサーバーからのJPEGファイル取得テスト</h1>
        <h1>①ファイヤーストア連携</h1>
        <br />
        <h1>グローバル状態管理</h1>
        <h1>②Recoilによる状態管理</h1>
        <br />
        {posts.map((post) => (
          <></>
        ))}
      </section>
      <section>
        <h1>ファイルサーバーからのJPEGファイル取得テスト</h1>
        <h1>①ファイヤーストア連携</h1>
        <br />
        <h1>グローバル状態管理</h1>
        <h1>②Recoilによる状態管理</h1>
        <br />
        {posts.map((post) => (
          <></>
        ))}
      </section>
      <section>
        <h1>ファイルサーバーからのJPEGファイル取得テスト</h1>
        <h1>①ファイヤーストア連携</h1>
        <br />
        <h1>グローバル状態管理</h1>
        <h1>②Recoilによる状態管理</h1>
        <br />
        {posts.map((post) => (
          <></>
        ))}
      </section>
      <section>
        <h1>ファイルサーバーからのJPEGファイル取得テスト</h1>
        <h1>①ファイヤーストア連携</h1>
        <br />
        <h1>グローバル状態管理</h1>
        <h1>②Recoilによる状態管理</h1>
        <br />
        {posts.map((post) => (
          <></>
        ))}
      </section>
      <section>
        <h1>ファイルサーバーからのJPEGファイル取得テスト</h1>
        <h1>①ファイヤーストア連携</h1>
        <br />
        <h1>グローバル状態管理</h1>
        <h1>②Recoilによる状態管理</h1>
        <br />
        {posts.map((post) => (
          <></>
        ))}
      </section>
      <section>
        <h1>ファイルサーバーからのJPEGファイル取得テスト</h1>
        <h1>①ファイヤーストア連携</h1>
        <br />
        <h1>グローバル状態管理</h1>
        <h1>②Recoilによる状態管理</h1>
        <br />
        {posts.map((post) => (
          <></>
        ))}
      </section>
    </div>
  );
}
