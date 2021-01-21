import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Clock from 'react-digital-clock';

import Home from './Home'
import Contact from './Contact'
import About from './About'

import Display from './Display'

function Navbar() {

    const [open, setOpen] = React.useState(false);
    return (
        <div>
            <Router>
                <div className="nav">
                    <div className="brand">
                        <a href="/">MyKlass</a>
                        <div className="tagline">

                            your true college mate</div>
                        <div className="version"> v1.0 beta</div>
                        <br />
                    </div>
                    <div className="clock navlinks">
                        <Clock />
                    </div>
                    <div className="navlinks">
                        <Link to='/home'>Dashboard</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/contact'>Contact</Link>


                    </div>
                    <div className="menubtn">
                        <ul>
                            <li><Link to='/home'>Dashboard</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>



                    </div>
                </div>

                <Display />
            </Router>

        </div>
    )
}

export default Navbar;