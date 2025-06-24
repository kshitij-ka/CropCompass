import React from "react";
import Navbar2 from "../../components/Navbar2.jsx";
import { Outlet, useOutletContext } from "react-router-dom";
import Container from "../../components/Container.jsx";

const MainLoginPage = ({ language = "en" }) => {
  return (
    <>
      <Container>
        {/* Pass language to Outlet context for nested routes */}
        <Outlet context={{ language }} />
      </Container>
    </>
  );
};

export default MainLoginPage;
