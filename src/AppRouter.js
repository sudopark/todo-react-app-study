
import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Signup from "./SignUp";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright "}
            sudopark, {new Date().getFullYear()}
            {"."}
        </Typography>
    )
}


class AppRouter extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Routes>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/" element={<App/>}/>
                            <Route path="/signup" element={<Signup/>}/>
                        </Routes>
                    </div>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </Router>
            </div>
        );
    }
}


export default AppRouter;