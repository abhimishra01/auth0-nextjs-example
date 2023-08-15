"use client";

import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <Auth0Provider
        domain={process.env.NEXT_PUBLIC_AUTH_DOMAIN!}
        clientId={process.env.NEXT_PUBLIC_CLIENT_ID!}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        {children}
      </Auth0Provider>
    </>
  );
}
