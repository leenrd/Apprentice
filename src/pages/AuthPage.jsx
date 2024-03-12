import { useState } from "react";
import FormLogIn from "@components/(auth)/FormLogIn";
import FormSignUp from "@components/(auth)/FormSignUp";

const AuthPage = () => {
  const [isLogin, setIsLogIn] = useState(true);

  return (
    <div className="h-screen grid grid-cols-2">
      <div className="bg-[url('/auth_assets/sp_bg.png')] bg-center bg-cover flex flex-col items-start justify-between p-6">
        <CreatorPill />
        <p className="text-white ">2023 Apprentice. | All rights reserved.</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        {isLogin ? (
          <FormLogIn setIsLogIn={setIsLogIn} />
        ) : (
          <FormSignUp setIsLogIn={setIsLogIn} />
        )}
      </div>
    </div>
  );
};

const CreatorPill = () => {
  return (
    <div className="bg-white/30 rounded-full py-2 px-5 flex items-center justify-center">
      <p className="text-sm text-white font-semibold">By Leenard Zarate</p>
    </div>
  );
};

export default AuthPage;
