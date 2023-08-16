"use client";
import styles from "./Top.module.scss";
import TextEffect from "./conponents/designParts/TextEffect";
import { motion } from "framer-motion";
import CanvasmackbookModel from "./conponents/designParts/Canvas/CanvasmackbookModel";
import CommingSoon from "./conponents/designParts/CommingSoon/CommingSoon";
import React, { useEffect, useState } from "react";
import { Grid, Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#6bbaff",
  backdropFilter: "blur(5px)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: "30px",
  textAlign: "center",
  color: theme.palette.text.secondary,
  // 以下は追加部分
  position: "relative",
  paddingBottom: "60%", // これで正方形になります
  "& > div": {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item>Item</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Item</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Item</Item>
      </Grid>
    </React.Fragment>
  );
}

export default function Home() {
  // スクロール位置の状態を定義します.
  const [scrollY, setScrollY] = useState(0);

  // スクロールイベントを監視します.
  useEffect(() => {
    // スクロール位置を取得する関数.
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // スクロールイベントにリスナーを追加します.
    window.addEventListener("scroll", handleScroll);

    // クリーンアップ関数です. コンポーネントがアンマウントされた時にリスナーを削除します.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //初期表示でアニメーションを実行
  const variantsTop = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: { opacity: 1, x: "0" },
  };

  // スクロール位置に基づいてアニメーションの状態を設定します.
  const variants2 = {
    hidden: { opacity: 0 },
    visible: { opacity: scrollY > 100 ? 1 : 0 }, // 100px以上スクロールしたら表示.
  };

  // スクロール位置に基づいてアニメーションの状態を設定します.
  const variants3 = {
    hidden: { opacity: 0 },
    visible: { opacity: scrollY > 1000 ? 1 : 0 }, // 100px以上スクロールしたら表示.
  };

  console.log(scrollY);

  return (
    <>
      {/* セクション -TOP */}
      <section className={styles.background} id="first">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variantsTop}
          transition={{ type: "spring", stiffness: 7, damping: 6 }}
        >
          <div className="inline">
            <TextEffect
              title="skillPark"
              id="title"
              className={styles.titleCenter}
            />
            <CanvasmackbookModel />
          </div>
        </motion.div>
        <a className={styles.Scroll} href="#second">
          Scroll
        </a>
      </section>

      <main className={styles.mainColor}>
        {/* セクション -2- */}
        <section className={styles.contentsWrapper} id="second">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants2}
            transition={{ type: "spring", stiffness: 7, damping: 6 }}
          >
            <TextEffect title="Menu" className={styles.titleDetail} id="two" />
            <Grid container spacing={1}>
              <Grid container item spacing={3}>
                <FormRow />
              </Grid>
              <Grid container item spacing={3}>
                <FormRow />
              </Grid>
            </Grid>
          </motion.div>
          <a className={styles.Scroll} href="#third">
            Scroll
          </a>
        </section>

        {/* セクション -3- */}
        <section className={styles.contentsWrapper} id="third">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants3}
            transition={{ type: "spring", stiffness: 7, damping: 6 }}
          >
            <TextEffect
              title="Let's start now."
              className={styles.titleDetail}
              id="three"
            />
            <p className={styles.titleContents}>
              始めるには次のボタンを押してください。
            </p>
            <button className={styles.startedButton}>Get Started！</button>
          </motion.div>
          <a className={styles.ScrollEnd} href="#first">
            TOP
          </a>
        </section>
      </main>
    </>
  );
}
