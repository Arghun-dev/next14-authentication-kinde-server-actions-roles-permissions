"use client";

import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs";

export default function Home() {
  return (
    <div className="p-8 flex flex-col space-y-4">
      <h1>Welcome to Kinde Authentication App</h1>
      <div className="flex justify-center space-x-4">
        <RegisterLink>Sign up</RegisterLink>
        <LoginLink>Sign in</LoginLink>
        <LogoutLink>Sign out</LogoutLink>
      </div>
    </div>
  );
}
