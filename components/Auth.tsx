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
  buttonTitle = "Login",
  showRemembered,
  loading,
  onSubmit,
}) => {
  const form = useRef<HTMLFormElement>(
    null
  ) as React.RefObject<HTMLFormElement>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 p-4 sm:p-6 md:p-8 auth">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <Logo />
          </div>
          <h1 className="text-2xl font-semibold text-slate-800 mb-1">
            Sistem Informasi Pengelolaan Pendapatan Daerah
          </h1>
          <p className="text-slate-500 text-sm">Silakan masuk ke akun Anda</p>
        </div>

        <form ref={form} onSubmit={(e) => onSubmit(e, form)}>
          <div className="formGroup">
            <label htmlFor="username">Username</label>
            <input
              type="username"
              id="username"
              name="username"
              required
              autoComplete="off"
            />
          </div>
          <div className="formGroup noSpacing">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              autoComplete="off"
            />
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
        </form>

        <div className="mt-8 text-center text-sm text-slate-500">
          <p>Belum mempunyai akun?</p>
          <Link
            href="#"
            className="font-medium text-slate-700 hover:text-slate-900 transition-colors"
          >
            Silakan hubungi Administrator
          </Link>
        </div>
      </div>

      <footer className="mt-8 text-center text-xs text-slate-400">
        <p>© 2025 Wibawa Karta Raharja. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Auth;
