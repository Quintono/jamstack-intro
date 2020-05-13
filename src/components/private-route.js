import React from "react";
import { navigate } from "gatsby";
import { useIdentityContext } from "react-netlify-identity";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const identity = useIdentityContext();
  const isLoggedIn = identity && identity.isLoggedIn;

  if (!isLoggedIn && location.pathname !== "/dashboard/login") {
    navigate("/dashboard/login", { replace: true });
    return null; // just incase it tries to render something before that redirect finishes
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
