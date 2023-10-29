import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/baselayout/Header";

function BaseLayout() {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  }
  export default BaseLayout;