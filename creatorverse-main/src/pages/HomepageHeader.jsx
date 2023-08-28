import { Outlet, Link } from "react-router-dom";
import { React, useState, useEffect } from 'react'

const HomepageHeader = () => {

    return (
        <div className="homepage">
            <header className="homepage-header flex-cont-col">
                <h1 className="homepage-title">CREATORVERSE</h1>
                <div className="homepage-btn-cont flex-cont-row">
                    <Link to="/"><button className="homepage-btn">VIEW ALL CREATORS</button></Link>
                    <Link to="/new"><button className="homepage-btn">ADD A CREATOR</button></Link>
                </div>
            </header>
            <main className="homepage-main">
                <Outlet />
            </main>
        </div>
    );
};

export default HomepageHeader;