import SigninButton from "@/components/auth/SigninButton";
import SignoutButton from "@/components/auth/SignoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Inter } from "next/font/google";
import { useCallback, useEffect, useState } from "react";
import { apiUrl } from "../../config/env";

const inter = Inter({ subsets: ["latin"] });

/**
 * カスタムフック: Auth0からアクセストークンを取得
 * @returns {string} アクセストークンを返却
 */
const useAuth0Token = (): string => {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState("");

  const fetchToken = useCallback(async () => {
    const token = await getAccessTokenSilently();
    setAccessToken(token)
  }, [getAccessTokenSilently]);

  useEffect(() => {
    if (isAuthenticated) fetchToken();
  }, [isAuthenticated, user?.sub, fetchToken]);

  return accessToken;
};

// カスタムフック: ユーザ情報を取得
const useFetchMe = (token: any) => {
  const [me, setMe] = useState(null);
  const [error, setError] = useState<Error | null>(null);
  const fetchMe = useCallback(async () => {
    try {
      const res = await fetch(`${apiUrl}/api/v1/users/me`, {
        method: "GET",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      const me = await res.json();
      setMe(me);
      setError(null);

    } catch (e: any) {
      setError(e);
    }
  }, [token]);

  return { me, error, fetchMe };
};

/**
 * ホームコンポーネント
 * @returns {JSX.Element} ホームコンポーネントを返却。
 */
export default function Home(): JSX.Element {
  const { isAuthenticated } = useAuth0();
  const token = useAuth0Token();
  const { me, error, fetchMe } = useFetchMe(token);

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div className="text-center my-10 mx-5 ">
        <h1 className="text-4xl font-bold">Next.js + Tailwind CSS</h1>
        <p className="text-xl mt-5">A starter template for Next.js + Tailwind CSS</p>

        {!isAuthenticated ? (
          <>
            <p className="text-xl mt-5">You are not logged in!</p>
            <SigninButton/>
          </>
        ) : (
          <>
            <p className="text-xl mt-5">You are logged in!</p>
            <SignoutButton/>
          </>
        )}

        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-5"
          onClick={fetchMe}>
          ユーザ情報を取得
        </button>
        {me && <p>ユーザ: {JSON.stringify(me)}</p>}
        {error && <p>エラー: {error.toString()}</p>}
      </div>
    </main>
  );
}
