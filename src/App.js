import { RouterProvider } from "react-router-dom";
import routeDefnition from './rooteroute/RouteDefnition'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import authContext from "./HRMSContext/AuthContext";
import { useState } from "react";


function App() {

  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
      },
      mode: 'light'
    },
  });

  const [authenticated, setAuthenticated] = useState(false)

  return (
    <authContext.Provider value={{ authenticated, setAuthenticated }}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <RouterProvider router={routeDefnition} />
      </ThemeProvider >
    </authContext.Provider>
  )
}

export default App;
