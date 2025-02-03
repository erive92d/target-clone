import Link from "next/link";
import React from "react";

const UserSection = () => {
  return (
    <div className="navbar-end gap-6 lg:gap-2 font-light text-sm w-1/3 lg:w-96 ">
      <button className="lg:flex gap-2 items-center dropdown">
        <div className=" navbar-start drawer drawer-end w-1/3 ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer-2" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6 opacity-70 dropdown-toggle"
                id="my-drawer"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
            </label>
          </div>
          <div className="drawer-side z-2">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 ">
              {/* Sidebar content here */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <span className="hidden lg:block">Sign in</span>
      </button>
      <Link href="/cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </Link>
    </div>
  );
};

const InputSearchBar = () => {
  return (
    <div className=" flex-1 w-full order-4 lg:order-none lg:w-auto">
      <div className=" bg-gray-100 rounded-full w-full lg:w-auto py-2 px-4 flex justify-between">
        <input
          type="text"
          className=" bg-transparent focus:outline-none"
          placeholder="What can we help you find?"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default function Main() {
  return (
    <nav className="navbar lg:gap-10  flex-wrap lg:flex-nowrap  lg:px-14">
      {/* Mobile Displays */}
      <div className="lg:hidden navbar-start drawer w-1/3 lg:w-auto">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
        </div>
        <div className="drawer-side z-2">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 ">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Large displays */}
      <div className="lg:navbar-start gap-8 navbar-center w-1/3 lg:w-auto ">
        <button className="text-red-600 font-bold text-xl">FakeTarget</button>
        <ul className="hidden lg:flex gap-4 font-bold ">
          <li>
            <Link className="" href="/">
              Categories
            </Link>
          </li>
          <li>
            <Link href="/">Deals</Link>
          </li>
          <li>
            <Link href="/">New & featured</Link>
          </li>
          <li>
            <Link href="/">Pickup & delivery</Link>
          </li>
        </ul>
      </div>
      {/* input search bar */}
      <InputSearchBar />
      {/* User */}
      <UserSection />
    </nav>
  );
}
