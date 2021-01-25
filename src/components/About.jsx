import React, { useState } from 'react'
import { Select, MenuItem, FormControl, InputLabel, makeStyles } from '@material-ui/core'
import './timetable.css'
import Brand from './Brand'



function About() {



    return (
        <>
              <div className="heading"><h2>About</h2></div>
                <h2>GH Pages</h2>

              <div className="content">
                  An effort to provide better and more reliable 'single source of truth' platform to college students for exposure to better opportunities in the immediate future
                  
              </div>


              <Brand/>
        </>
)
}

export default About;