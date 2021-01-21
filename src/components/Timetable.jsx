import React, {useState}from 'react'
import './timetable.css'
import TimeMenu from './functions/section'


function Timetable() {
    const [fileName, setFilename] = useState('');


    return (
       <>
            <div className="heading"><h2>Time Table</h2></div>
                       <TimeMenu/>
            <p className="para">SOME DATA MAY NOT BE AVAILABLE !</p>
       </>
           
       
    )
}

export default Timetable;