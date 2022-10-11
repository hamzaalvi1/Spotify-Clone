import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi, { LOGIN_URL } from "../../../lib/spotify";

const refreshAccessToken = async (token) => {
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const refreshedToken = await spotifyApi.refreshAccessToken();
    return {
      ...token,
      accessToken: refreshedToken.body.access_token,
      accessTokenExpires: Date.now() + refreshedToken.body.expires_in * 1000,
      refreshToken: refreshedToken.body.refresh_token ?? token.refreshToken,
    };
  } catch (err) {
    console.error(err);
    return {
      ...token,
      error: "REFRESH ACCESS TOKEN ERROR ",
    };
  }
};

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: `/login`,
  },
  callbacks: {
    async jwt({ token, user, account }) {
      // Initial sign in
      if (account && user) {
        return {
          accessToken: account.access_token,
          accessTokenExpires: Date.now() + account.expires_at * 1000,
          refreshToken: account.refresh_token,
          user,
        };
      }

      // Return previous token if the access token has not expired yet
      if (Date.now() < token.accessTokenExpires) {
        return token;
      }

      // Access token has expired, try to update it
      return await refreshAccessToken(token);
    },

    async session({ session, token }) {
        console.log("token",token)
        session.user = token.user
        session.accessToken = token.accessToken
        session.error = token.error
        return session
      },
  },
};
export default NextAuth(authOptions);
