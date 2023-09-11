"use client";
import React, { useEffect, useState } from "react";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { EditorComponent } from "@/app/conponents/EditorComponent/page";

export default function skils() {
  return (
    <div>
      <h1>スキル一覧ページ</h1>
      <EditorComponent />
    </div>
  );
}
