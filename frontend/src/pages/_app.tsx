import "@/styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";
import type { AppProps } from "next/app";
import { auth0Config } from "../../config/env";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      authorizationParams={{
        redirect_uri: auth0Config.redirectUri,
        audience: auth0Config.audience,
        scope: auth0Config.scope,
      }}>
      <Component {...pageProps} />
    </Auth0Provider>
  )
}
