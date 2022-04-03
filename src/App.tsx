import React, {useEffect} from 'react';
import AppRouter from "./router/AppRouter";
import "./assets/styles/app.scss"
import CssBaseline from "@mui/material/CssBaseline";
import useUserActions from "./hooks/actions/useUserActions";

function App() {
    const {checkoutAuthToken} = useUserActions()

    useEffect(() => {
        checkoutAuthToken()
    }, [checkoutAuthToken])

  return (
    <div className="App">
        <CssBaseline />
        <AppRouter/>
    </div>
  );
}

export default App;
