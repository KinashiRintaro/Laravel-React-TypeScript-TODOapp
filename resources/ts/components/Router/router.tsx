import React from "react";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Header from "../Header/DefaultHeader";

const Router: React.FC = () => {
    return (
        <>
        <BrowserRouter>
            <Header />
            <Routes>
              <Route path={"/about"} element={<About />} />
              <Route path={"/users"} element={<Users />} />
              <Route path={"/"} element={<Home />} />
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default Router;

function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }