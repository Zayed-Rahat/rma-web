import React from 'react';
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-xl navbar-dark bg-light d-inline-block">
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <NavLink class="nav-link" exact to="/">EVENT</NavLink>
                        </li>
                        <li class="nav-item dropdown">
                            <NavLink class="nav-link dropdown-toggle" exact to="/" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                MEMBERS
                            </NavLink>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink class="dropdown-item" exact to="/">ADVISORY COMMITTEE</NavLink>
                                <NavLink class="dropdown-item" exact to="/">ALUMNI MEMBERS</NavLink>
                                <NavLink class="dropdown-item" exact to="/">COMMITTEE MEMBERS</NavLink>
                                <NavLink class="dropdown-item" exact to="/">EXECUTIVE MEMBERS</NavLink>
                            </div>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" exact to="/">BLOG</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" exact to="/">GALLERY</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" exact to="/">TUTORIALS</NavLink>
                        </li>
                    </ul>
                </div>
            </nav> 
    );
};

export default Navbar;