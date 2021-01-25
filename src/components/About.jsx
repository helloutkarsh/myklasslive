import React, { useState } from 'react'
import { Select, MenuItem, FormControl, InputLabel, makeStyles } from '@material-ui/core'
import './timetable.css'
import Brand from './Brand'



function About() {



    return (
        <>
              <div className="heading"><h2>About</h2></div>

            
              <div className="content">
                  My Klass is an idea which aims at giving proper information and opportunities to college students. We believe in the principal "Equal opportunities for all". also this is just a sample text.
              </div>


              <Brand/>
        </>
)
}

export default About;