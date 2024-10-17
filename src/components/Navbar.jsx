import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isDimTheme, setIsDimTheme] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isDimTheme) {
      document.documentElement.setAttribute("data-theme", "dim");
    } else {
      document.documentElement.setAttribute("data-theme", "cmyk");
    }
  }, [isDimTheme]);

  const handleThemeToggle = () => {
    setIsDimTheme(!isDimTheme);
  };

  const getPageTitle = (path) => {
    if (path.startsWith("/recipes/")) {
      return "Recipe";
    }
    switch (path) {
      case "/favorites":
        return "Favorites";
      case "/inspiration":
        return "Inspiration";
      case "/creator":
        return "Creator";
      case "/random-recipe-picker":
        return "Random Recipe Picker";
      default:
        return "Home";
    }
  };

  const currentPage = getPageTitle(router.pathname);

  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/favorites">Favorites</Link>
            </li>
            <li>
              <Link href="/inspiration">Inspiration</Link>
            </li>
            <li>
              <Link href="/creator">Creator</Link>
            </li>
            <li>
              <Link href="/random-recipe-picker">Random Recipe Picker</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">{currentPage}</a>
      </div>
      <div className="navbar-end flex items-center space-x-4">
        <button onClick={handleThemeToggle} className="btn btn-ghost">
          {isDimTheme ? "Light Mode" : "Dark mode"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
