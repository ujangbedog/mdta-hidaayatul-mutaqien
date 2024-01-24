import Footer from "@/src/layout/Footer";
import HeadElement from "@/src/layout/Head";
import Header from "@/src/layout/Header";
import Main from "@/src/layout/Main";
import Widgets from "@/src/layout/Widgets";
import React from "react";

import { LayoutBox } from "./styles";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutBox>
      <HeadElement />
      <Header />
      <Main>{children}</Main>
      <Widgets />
      <Footer />
    </LayoutBox>
  );
};

export default Layout;
