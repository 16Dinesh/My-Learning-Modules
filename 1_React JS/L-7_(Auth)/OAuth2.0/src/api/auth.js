const clientId = import.meta.env.VITE_OAUTH_CLIENT_ID;
const authUrl = import.meta.env.VITE_OAUTH_AUTH_URL;
const tokenUrl = import.meta.env.VITE_OAUTH_TOKEN_URL;
const redirectUri = import.meta.env.VITE_REDIRECT_URI;
const scopes = import.meta.env.VITE_SCOPES;

export const getAuthUrl = () => {
  const url = new URL(authUrl);
  url.searchParams.append("client_id", clientId);
  url.searchParams.append("redirect_uri", redirectUri);
  url.searchParams.append("response_type", "code");
  url.searchParams.append("scope", scopes);
  url.searchParams.append("access_type", "offline");

  return url.toString();
};

export const exchangeCodeForToken = async (code) => {
  const res = await fetch(tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      redirect_uri: redirectUri,
      grant_type: "authorization_code",
    }),
  });

  return res.json();
};
