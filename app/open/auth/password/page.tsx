"use client";
import React, { useState, useRef, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Link from "next/link";

const PasswordContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: #edf6ff;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 10rem;
  color: #1876d2;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 2rem;
    height: 95vh;
  }
`;

const FormBox = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 100%;
  max-width: 420px;
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  backdrop-filter: blur(50px);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  border: 1px solid #1876d2;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const StyledTextField = styled(TextField)`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Password = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ログイン録処理
    console.log("Email: ", email);
    console.log("Password: ", password);
  };

  return (
    <PasswordContainer>
      <FormBox>
        <Typography variant="subtitle2" align="center" gutterBottom>
          ※ 現在、こちらの機能は利用できません。
        </Typography>
        <br />
        <Typography variant="subtitle1" align="center" gutterBottom>
          パスワード変更メールを送信します。
        </Typography>
        <form onSubmit={handleSubmit}>
          <StyledTextField
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            fullWidth
            inputProps={{
              ref: emailRef,
            }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Password
          </Button>
        </form>
      </FormBox>
      <Typography variant="body2" align="center">
        <Link href="/open/auth/signup">新規登録はこちら</Link>
      </Typography>
      <br />
      <Typography variant="body2" align="center">
        <Link href="/open/auth/login">ログインはこちら</Link>
      </Typography>
    </PasswordContainer>
  );
};

export default Password;
