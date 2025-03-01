"use client";

import Link from "next/link";
import { Logo } from "./Utils";
import { MdArrowRightAlt } from "react-icons/md";
import { FC, FormEvent, useRef } from "react";

interface AuthType {
  title?: string;
  buttonTitle?: string;
  showRemembered?: boolean;
  loading: boolean;
  accountInfoText?: {
    initialText: string;
    actionText: string;
    actionLink: string;
  };
  onSubmit: (
    e: FormEvent<HTMLFormElement>,
    formRef: React.RefObject<HTMLFormElement>
  ) => void;
}

const Auth: FC<AuthType> = ({
  title = "Log In",
  buttonTitle = "Login",
  showRemembered,
  accountInfoText,
  loading,
  onSubmit,
}) => {
  const form = useRef<HTMLFormElement>(
    null
  ) as React.RefObject<HTMLFormElement>;

  return (
    <div className="auth">
      <div className="rollout">
        <div className="content">
          <Logo />
          <h1>
            Say goodbye to financial stress with <br />
            the help of FinGreat
          </h1>
          <p>
            Take control of your finance with FinGreat, the fastest and simplest
            way
          </p>
          <div className="scroller" />
        </div>
      </div>
      <div className="controller">
        <div className="content">
          <h1>{title}</h1>
          <form ref={form} onSubmit={(e) => onSubmit(e, form)}>
            <div className="formGroup">
              <label htmlFor="username">Username</label>
              <input type="username" id="username" name="username" required />
            </div>
            <div className="formGroup noSpacing">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>

            {showRemembered && (
              <div className="flex align-center justify-between">
                <div className="formGroup check noSpacing">
                  <input type="checkbox" id="rememberMe" name="rememberMe" />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
                <Link href="/">Forgot Password?</Link>
              </div>
            )}
            <button type="submit" disabled={loading} className="authButton">
              {buttonTitle} {loading && "..."}
              <MdArrowRightAlt size={20} />
            </button>
            <div className="accountInfo">
              <span>
                {accountInfoText?.initialText || "Don't have an account?"}
              </span>
              &nbsp;
              <Link href={accountInfoText?.actionLink || "/sign-up"}>
                {accountInfoText?.actionText || "Sign up"}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
