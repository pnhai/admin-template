import React from "react";
import { Router as ReachRouter } from "@reach/router";

import NotFoundPage from "./components/NotFoundPage";
import Test from "./container/Test";
import Dashboard from "./container/Dashboard";
import Auths from "./container/Auths";
import Login from "./container/Auths/Login";

const ScrollToTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location.pathname]);
  return children;
};
export default function Router() {
  return (
    <ReachRouter primary={false}>
      <ScrollToTop path="/">
        <Login path="/login" />
        <Auths path="/">
          <Dashboard path="/" />

          <Test path="/test" />
          <NotFoundPage path="*" />
        </Auths>

        <NotFoundPage path="*" />
      </ScrollToTop>
    </ReachRouter>
  );
}
