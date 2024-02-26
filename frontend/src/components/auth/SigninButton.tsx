import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SigninButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="py-14">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => loginWithRedirect()}>Log In
      </button>
    </div>
  )
};

export default SigninButton;
