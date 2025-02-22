import React from "react";
import Navbar2 from "../../components/Navbar2.jsx";
import { Outlet } from "react-router-dom";
import Container from "../../components/Container.jsx";

const MainLoginPage = () => {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default MainLoginPage;
