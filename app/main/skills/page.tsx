"use client";
import React, { useEffect, useState } from "react";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { EditorComponent } from "@/app/components/EditorComponent/EditorComponent";

export default function skils() {
  return (
    <div>
      <h1>スキル一覧ページ</h1>
      <EditorComponent />
    </div>
  );
}
