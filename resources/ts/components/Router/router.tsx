import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Header/DefaultHeader";
import Tasks from "../page/tasks";
import Login from "../page/login";
import Help from "../page/help";

const Router: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path={"/help"} element={<Help />} />
                    <Route path={"/login"} element={<Login />} />
                    <Route path={"/"} element={<Tasks />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;
