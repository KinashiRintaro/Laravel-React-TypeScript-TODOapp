import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    return (
        <div className='header'>
          <div>TODOアプリ</div>
          <button onClick={() => {navigate("/")}}>Home</button>
          <button onClick={() => {navigate("/about")}}>About</button>
          <button onClick={() => {navigate("/users")}}>Users</button>
        </div>
    )
}

export default Header;
