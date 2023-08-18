"use client";
import React, { useState, useRef, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Link from "next/link";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../firebase";
import { useRouter } from "next/navigation";

/************
CSS in JS
************/
const LoginContainer = styled(Box)`
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
  background-color: #ffffff;
  flex-direction: column;
  width: 100%;
  max-width: 420px;
  padding: 5rem;
  border-radius: 10px;
  border: 1px solid #1876d2;
  margin-bottom: 2rem;
  backdrop-filter: blur(50px);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 30px;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("login action");
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("login success");
        router.push("/main");
      })
      .catch((error) => {
        console.log("login failed");
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <LoginContainer>
        <FormBox>
          <Typography variant="subtitle1" align="center" gutterBottom>
            ユーザーログインをしてください。
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
            <StyledTextField
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </form>
        </FormBox>
        <Typography variant="body2" align="center">
          <Link href="/auth/signup">新規登録はこちら</Link>
        </Typography>
        <br />
        <Typography variant="body2" align="center">
          <Link href="/open/auth/password">パスワードをお忘れですか？</Link>
        </Typography>
      </LoginContainer>
    </>
  );
};

export default Login;
