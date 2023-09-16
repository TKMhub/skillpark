"use client";
import React, { useEffect, useState } from "react";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";

export default function manual() {
  return (
    <div>
      <section>
        <h1>マニュアル ページ</h1>
      </section>
    </div>
  );
}
