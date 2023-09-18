// "use client"; // "use client";
import React from "react";
import { Button, TextField, Typography } from "@mui/material";

export default function Gamensenni() {
  const styles = {
    root: {
      display: "flex",
      flexDirection: "column" as "column",
      height: "70vh",
      alignItems: "center",
      justifyContent: "center",
    },
    form: {
      padding: "10px",
      width: "100%",
    },
    textField: {
      marginBottom: "50px",
    },
    button: {
      textAlign: "center",
      width: "30%",
    },
    section: {
      backgroundColor: "white", // 背景色を白に設定
      borderRadius: "15px", // 角を丸くする
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // 若干のシャドウを追加
      padding: "20px", // パディングを追加
    },
  };

  return (
    <div className="flex">
      <main className="w-1/2">
        <h2 className="font-bold pb-3 ">お問い合わせ</h2>
        <section style={styles.section}>
          <form style={styles.form}>
            <TextField
              style={styles.textField}
              fullWidth
              label="名前"
              variant="outlined"
            />
            <TextField
              style={styles.textField}
              fullWidth
              label="メールアドレス"
              variant="outlined"
            />
            <TextField
              style={styles.textField}
              fullWidth
              label="メッセージ"
              variant="outlined"
              multiline
              rows={4}
            />
            <Button variant="contained" color="primary">
              送信
            </Button>
          </form>
        </section>
      </main>
      <aside className="w-1/2 ml-3">
        <h2 className="font-bold pb-3">アンケート</h2>
      </aside>
    </div>
    // <div style={styles.root}>
    //   <section>
    //     <Typography variant="h4" component="h1">
    //       コンタクト ページ
    //     </Typography>
    //     <form style={styles.form}>
    //       <TextField
    //         style={styles.textField}
    //         fullWidth
    //         label="名前"
    //         variant="outlined"
    //       />
    //       <TextField
    //         style={styles.textField}
    //         fullWidth
    //         label="メールアドレス"
    //         variant="outlined"
    //       />
    //       <TextField
    //         style={styles.textField}
    //         fullWidth
    //         label="メッセージ"
    //         variant="outlined"
    //         multiline
    //         rows={4}
    //       />
    //       <Button variant="contained" color="primary" style={styles.button}>
    //         送信
    //       </Button>
    //     </form>
    //   </section>
    // </div>
  );
}
