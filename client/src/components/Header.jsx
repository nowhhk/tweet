import React from 'react';

const Header = () => {
  return (
    <header className="w-full h-28 bg-boxgrey flex flex-col items-center justify-center gap-y-3">
      <div className="flex items-end">
        <img src="./img/logo.png" alt="Logo" class="w-8" />
        <h1 className="text-2xl font-bold mx-1">트윗</h1>
        <span className="">@username</span>
      </div>

      <nav className="flex gap-x-3 text-sm ">
        <button className="border-b-2 border-blue">모든 트윗</button>
        <button>내 트윗</button>
        <button className="">로그아웃</button>
      </nav>
    </header>
  );
};

export default Header;
