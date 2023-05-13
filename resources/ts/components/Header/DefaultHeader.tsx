import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    return (
        <div className="global-head">
            <div>TODOアプリ</div>
            <button
                onClick={() => {
                    navigate("/");
                }}
            >
                Home
            </button>
            <button
                onClick={() => {
                    navigate("/help");
                }}
            >
                Help
            </button>
            <button
                onClick={() => {
                    navigate("/login");
                }}
            >
                Login
            </button>
        </div>
    );
}

export default Header;
