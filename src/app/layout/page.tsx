"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useSearchParams } from "next/navigation";
import { redirect } from "next/navigation";

const Login = () => {
  const searchParams = useSearchParams();

  const origin = searchParams.get("origin");
  if (origin) {
    redirect(origin);
  }

  return <div>LOGIN</div>;
};

export default withAuthenticator(Login);
