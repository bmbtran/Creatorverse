import { React, useState, useEffect } from 'react';
import { Outlet, Link, useParams } from "react-router-dom";

const Error = () => {
    return(
        <div className="not-found">
            <h2>ERROR 404. Click<Link to="/">here</Link> to go back to home page.</h2>           
        </div>
    )
}

export default Error;