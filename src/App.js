import React from "react";
import { RouterProvider } from "react-router-dom";
import routeDefnition from './rooteroute/RouteDefnition'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';





function App() {

  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
      },
      mode: 'light'
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <RouterProvider router={routeDefnition} />
    </ThemeProvider >
  );
}

export default App;
