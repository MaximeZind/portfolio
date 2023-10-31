import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/baselayout/Header";

function BaseLayout() {

  const [scrollValue, setScrollValue] = useState(0);
    return (
      <>
        <Header scrollValue={scrollValue} />
        <Outlet context={[scrollValue, setScrollValue]} />
      </>
    );
  }
  export default BaseLayout;