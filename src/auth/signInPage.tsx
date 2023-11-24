const SignInPage = () => {
  return (
    <div className="h-screen grid grid-cols-2">
      <div className="bg-[url('./public/bgauth.jpg')] bg-center bg-cover flex flex-col items-start justify-between p-6">
        <CreatorPill />
        <p className="text-white ">2023 Apprentice. | All rights reserved.</p>
      </div>
      <div className="right"></div>
    </div>
  );
};

const CreatorPill = () => {
  return (
    <div className="bg-white  rounded-full py-2 px-5 flex items-center justify-center">
      <p className="font-semibold text-sm text-black">Leenard Zarate</p>
    </div>
  );
};

export default SignInPage;
