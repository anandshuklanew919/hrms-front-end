import { RouterProvider } from "react-router-dom";
import routeDefnition from './rooteroute/RouteDefnition'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {AuthProvider} from "./HRMSContext/AuthContext";


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
    <AuthProvider>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <RouterProvider router={routeDefnition} />
      </ThemeProvider >
    </AuthProvider>
  )
}

export default App;
