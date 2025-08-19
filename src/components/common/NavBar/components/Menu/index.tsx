import { Link, useLocation } from "react-router-dom";

export const Menu = () => {
  const { pathname } = useLocation();

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
      isActive
        ? "bg-fuchsia-800 text-white"
        : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
    }`;
  };

  return (
    <nav className=" p-2 rounded-lg">
      <ul className="space-y-2 flex ">
        <li className="m-2">
          <Link to="/" className={getLinkClass("/")}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="font-semibold text-lg">Home</span>
          </Link>
        </li>
        <li className="m-2">
          <Link to="/search" className={getLinkClass("/search")}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="font-semibold text-lg">Search</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
