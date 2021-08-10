import React from 'react';
import './TopMenu.css'
import {Link, NavLink} from "react-router-dom";

function TopMenu({logState, toggleLogState}) {
    return (
        <nav>
            <div className="nav-container">
                <ul className="top-menu-list">
                    <li>
                        <NavLink to="/" exact activeClassName="underline">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog-overview" exact activeClassName="underline">Blog Overview</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog-posts/:id" exact activeClassName="underline">Blog Posts</NavLink>
                    </li>
                    <Link to="/blog-overview">
                        <button
                            onClick={()=> toggleLogState(!logState) }
                            type="submit"
                        >{logState ? 'Log in' : 'Log out'}
                        </button>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default TopMenu;