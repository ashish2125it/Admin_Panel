import React from "react";
import moment from "moment/moment";
import { BiSearch } from "react-icons/bi";
import css from "./Layout.module.css";
import Sidebar from "./Sidebar/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
const Layout = () => {
  const { pathname } = useLocation();
  return (
    <div className={css.container}>
      <Sidebar />

      {pathname === "/" && <Navigate to="/dashboard" />}

      <div className={css.dashboard}>
        <div className={css.topBaseGradient}>
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>

          <div className="gradient-blue"></div>
        </div>

        <div className={css.header}>
          <span>{moment().format("dddd, do MMM YYYY")}</span>
          <div className={css.searchBar}>
            <BiSearch size={20} />
            <input type="text" placeholder="Enter here" />
          </div>
          <div className={css.profile}>
          // <img src="https://media.licdn.com/dms/image/D4D03AQEcq_Wt-RNUOQ/profile-displayphoto-shrink_400_400/0/1692991772451?e=1723075200&v=beta&t=J0QjBaD70dZ2q3SHBCfvjn8byN8bRKFm_yA5GJkYybU" alt="" />

            <div className={css.details}>
              <span>Ashish Khurana</span>
              <span className="id">khuranaashish816@gmail.com</span>
            </div>
          </div>
        </div>
        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
