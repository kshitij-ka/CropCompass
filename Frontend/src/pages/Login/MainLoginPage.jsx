import React from "react";
import Navbar from "../../components/Navbar.jsx";
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
