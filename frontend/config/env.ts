export const auth0Config = {
  redirectUri: process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI || '',
  domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN || '',
  clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || ''
};
