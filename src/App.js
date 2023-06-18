import React from "react";
import { RouterProvider } from "react-router-dom";
import routeDefnition from './rooteroute/RouteDefnition'


function App() {
  return (
    <RouterProvider router={routeDefnition} />
  );
}

export default App;
