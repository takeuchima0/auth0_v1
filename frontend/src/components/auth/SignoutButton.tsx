import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div className="py-14">
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        SignOut
      </button>
    </div>
  );
};

export default SignoutButton;
