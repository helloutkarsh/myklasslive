import React from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Timetable from './Timetable'
import Calender from './calender'
import './display.css'
import Sidebox from './sidebox'

function Display(){
    
    return(

        <div className="display">
            <Sidebox/>
    <div className="maindisplay">

    <Switch>    
                <Route path="/home" component={Home} exact />
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/timetable" component={Timetable} />
                <Route path="/calender" component={Calender} />
            </Switch></div>
    </div>
        )
}
export default Display;