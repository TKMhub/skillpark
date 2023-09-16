"use client";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import EditorComponent from "@/app/conponents/EditorComponent/page";

export default function skils() {
  return (
    <div>
      <h1>スキル一覧ページ</h1>
      <EditorComponent />
    </div>
  );
}
