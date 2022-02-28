import { Redirect, Route } from "react-router-dom";
import {useState, useEffect} from "react"

function RequireAuth({ component: Component, path, authed}) {
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("authorization")) {
      setHasAccess(true);
    }
  }, []);

  return ( hasAccess === true ? <Route path={path} component={Component}/> : <Redirect to="/unauthorized"/>)

}

export default RequireAuth;
