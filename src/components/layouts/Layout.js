import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { BellIcon, Bars3BottomLeftIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const Layout = ({ children }) => {
  const router = useRouter();
  const [menuList, setMenuList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const username = localStorage.getItem("username");
      setIsLoggedIn(!!username);
      const isAdminUser = username === "admin";
      setIsAdmin(isAdminUser);
      setMenuList(isAdminUser ? ADMIN_MENU_LIST : MENU_LIST);
    }
  }, []);

  useEffect(() => {
    const activedMenu = menuList.find((menu) => menu.path === router.pathname);
    if (activedMenu) {
      setActiveMenu(activedMenu.name);
    } else {
      setActiveMenu("");
    }
  }, [menuList, router.pathname]);

  const handleChangePage = (path) => {
    router.push(path);
  };

  const handleLogin = () => {
    if (isLoggedIn) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
      }
      setIsLoggedIn(false);
      router.push("/login");
    } else {
      router.push("/login");
    }
  };

  const logoutHandler = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }
    setIsLoggedIn(false);
    router.push("/login");
  };

  const toProfile = () => {
    router.push("/profile");
  };

  const data = { name: (typeof window !== "undefined" && localStorage.getItem("username")) || "User" };
  const avatarPlaceholder = data.name.charAt(0).toUpperCase();

  return (
    <main className="flex flex-col min-h-screen">
      {isAdmin ? (
        <div className="flex-1 flex-row flex">
          <button
            data-drawer-target="beresin-sidebar"
            data-drawer-toggle="beresin-sidebar"
            aria-controls="beresin-sidebar"
            type="button"
            className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3BottomLeftIcon className="w-8 h-8" />
          </button>
          <aside
            id="beresin-sidebar"
            className={`fixed top-0 left-0 z-40 w-60 h-full transition-transform ${
              isOpen ? "" : "-translate-x-full"
            } sm:translate-x-0 bg-primary text-white`}
            aria-label="Sidebar"
          >
            <div className="flex items-center justify-center py-10">
              <h2 className="font-bold">Tracer Study</h2>
            </div>
            <div className="h-full px-6 py-4 overflow-y-auto">
              <ul className='sidemenu'>
                {menuList.map((menu, index) => (
                  <li
                    key={index}
                    className={
                      router.pathname === menu.path
                        ? "flex flex-row items-center px-3 py-1 rounded-md active mb-4"
                        : "flex flex-row items-center px-3 py-1 rounded-md mb-4"
                    }
                    onClick={() => handleChangePage(menu.path)}
                    style={{ cursor: "pointer" }}
                  >
                    {menu.name}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="p-5 sm:ml-64 flex-1">
            <header className="flex flex-row items-center justify-between">
              <h1 className="font-bold text-3xl text-gray-600">
                {activeMenu ? activeMenu : ""}
              </h1>
              <div className="flex flex-row items-center">
                <BellIcon className="w-8 h-8 mr-3" />
                <div className="avatar placeholder">
                  <div className="bg-primary text-white rounded-full w-10">
                    <span className="text-xl">{avatarPlaceholder}</span>
                  </div>
                </div>
                <details className="dropdown">
                  <summary className="btn ml-3 btn-primary">
                    {data.name}
                    <ChevronDownIcon className="w-4 h-4" />
                  </summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li>
                      <a onClick={toProfile}>Profile</a>
                    </li>
                    <li>
                      <a className="text-red-500" onClick={handleLogin}>
                        Logout
                      </a>
                    </li>
                  </ul>
                </details>
              </div>
            </header>
            <div className="flex-1">{children}</div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col">
          <aside>
            <div className="navbar bg-primary">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                  </div>
                  <ul className="resmenu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary text-white rounded-box w-52">
                    {menuList.map((menu, index) => (
                      <li
                        key={index}
                        className={router.pathname === menu.path ? "list-menu py-4" : "list-menu active py-4"}
                        onClick={() => handleChangePage(menu.path)}
                      >
                        {menu.name}
                      </li>
                    ))}
                    <button className="btn z-[1] btn-secondary text-white" onClick={handleLogin}>
                      {isLoggedIn ? "Logout" : "Login"}
                    </button>
                  </ul>
                </div>
                <a className="btn btn-ghost text-white text-xl">Tracer Study</a>
              </div>
              <div className="navbar-end hidden lg:flex">
                <ul className="navmenu menu-horizontal mr-8">
                  {menuList.map((menu, index) => (
                    <li
                      key={index}
                      className={router.pathname === menu.path ? "active" : ""}
                      onClick={() => handleChangePage(menu.path)}
                    >
                      {menu.name}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-secondary text-white" onClick={handleLogin}>
                  {isLoggedIn ? "Logout" : "Login"}
                </button>
              </div>
            </div>
          </aside>
          <section className="flex-1">{children}</section>
          <footer className="footer footer-center p-4 mt-12 bg-primary text-white">
            <aside>
              <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
            </aside>
          </footer>
        </div>
      )}
    </main>
  );
};

export const MENU_LIST = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Panduan',
    path: '/panduan'
  },
  {
    name: 'Form Survey',
    path: '/form-survey'
  },
  {
    name: 'Lowongan Pekerjaan',
    path: '/lowongan-pekerjaan'
  },
];

export const ADMIN_MENU_LIST = [
  {
    name: 'Dashboard',
    path: '/'
  },
  {
    name: 'Data Panduan',
    path: '/data-panduan'
  },
  {
    name: 'Data Alumni',
    path: '/data-alumni'
  },
  {
    name: 'Data DUDI',
    path: '/data-dudi'
  },
  {
    name: 'Data Survey Alumni',
    path: '/data-survey-alumni'
  },
  {
    name: 'Data Survey Dudi',
    path: '/data-survey-dudi'
  },
  {
    name: 'Data Lowongan Pekerjaan',
    path: '/data-lowongan-pekerjaan'
  },
];

export default Layout;
