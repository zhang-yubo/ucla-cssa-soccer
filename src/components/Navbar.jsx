import React from "react"

function Navbar(props) {
    return (
        <nav className="bg-white border shadow">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-40">
                <img className="object-cover h-32" src={require('../images/Icon.png')} alt={"logo"} />
            </div>
        </nav>
    );
};

export default Navbar;