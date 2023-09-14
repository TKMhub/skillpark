"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Image from "next/image";
import ICON from "../../../public/image/skillPark.png";

export default function PostList() {
  return (
    <Paper
      sx={{
        p: 2,
        marginBottom: "10px",
        maxWidth: 1000,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Image
              alt="complex"
              src={ICON}
              style={{
                margin: "auto",
                display: "block",
                maxWidth: "50%",
                maxHeight: "50%",
              }}
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                リストのタイトル
              </Typography>
              <Typography variant="body2" gutterBottom>
                説明文
              </Typography>
              <Typography variant="body2" color="text.secondary">
                投稿者
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                おすすめ / 難易度
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              投稿日時
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
