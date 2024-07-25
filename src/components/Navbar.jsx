import React from "react";

export default function Navbar() {
  return (
    <div>
      <header className="text-gray-600 body-font shadow-lg p-3 mb-5 bg-body rounded">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl">หลักสูตรภาษาอังกฤษ</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900" href="/">
              หน้าหลัก
            </a>
            <a className="mr-5 hover:text-gray-900" href="/about">
              เกี่ยวกับ
            </a>
            <a className="mr-5 hover:text-gray-900" href="/ai">
              Ai ตรวจวินิจฉัยโรค
            </a>
            <a className="mr-5 hover:text-gray-900" href="/chatgpt">
              ChatGPT
            </a>
            <a className="mr-5 hover:text-gray-900" href="/contact">
              ติดต่อ
            </a>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            LogIn
          </button>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            SignUp
          </button>
        </div>
      </header>
    </div>
  );
}
