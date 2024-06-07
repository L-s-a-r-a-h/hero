import { Link, Outlet, history } from "umi";
import "./index.less";
import React, { useEffect, useState } from "react";

export default function Layout() {
  const [pathname, setPathname] = useState<string>(history.location.pathname);

  useEffect(() => {
    const unlisten = history.listen((currentHistory) => {
      const { pathname: currentPathname } = currentHistory.location;
      setPathname(currentPathname);
    });

    return function cleanup() {
      unlisten();
    };
  }, []);

  console.log("fd", pathname);

  return (
    <div className="navs">
      <header>
        <p className="logo">王者荣耀资料库</p>
        <ul>
          <li className={"/" === pathname ? "active navItem" : "navItem"}>
            <Link to="/">英雄</Link>
          </li>
          <li className={"/items" === pathname ? "active navItem" : "navItem"}>
            <Link to="/items">局内道具</Link>
          </li>
          <li
            className={"/summoners" === pathname ? "active navItem" : "navItem"}
          >
            <Link to="/summoners">召唤师技能</Link>
          </li>
        </ul>
      </header>
      <Outlet />
    </div>
  );
}
