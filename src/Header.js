import React from 'react'
import'./Header.css'
function Header() {
    return (
        <div className='header'>
            <nav className="top-bar topbar-responsive">
                <div className="top-bar-title">
                    <span data-responsive-toggle="topbar-responsive" data-hide-for="medium">
                        <button className="menu-icon" type="button" data-toggle></button>
                    </span>
                    <a className="topbar-responsive-logo" href="#"><strong>Site Title</strong></a>
                </div>
                <div id="topbar-responsive" className="topbar-responsive-links">
                    <div className="top-bar-right">
                        <ul className="menu simple vertical medium-horizontal">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Works</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Contact</a></li>
                            <li>
                                <button type="button" className="button hollow topbar-responsive-button">Categories</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Header