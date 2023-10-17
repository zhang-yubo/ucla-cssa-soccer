import React from "react"

function Navbar(props) {
    return (
        <nav className="bg-white shadow">
            <div className="w-screen">
                <div className="bg-black flex items-center justify-center w-40 h-40">
                    <img className="h-36" src={require('../images/icon-bw.png')} alt={"logo"} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;