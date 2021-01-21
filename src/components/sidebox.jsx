import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import './display.css'
import { ExternalLink } from 'react-external-link';
import { FaUniversity } from 'react-icons/fa';
import { AiFillSchedule } from 'react-icons/ai';
import { GiPayMoney } from 'react-icons/gi';
import { GoCalendar } from 'react-icons/go';
import Brand from './Brand'

function Sidebox() {
    return (
        <div className="sidebox">
            <div className="sidelinksbox">
                <ul>
                    <ExternalLink href='https://evarsity.srmist.edu.in/srmsip/'>
                        <li className="sidelinks"><div className="icon"><FaUniversity />  </div><div className="title"> Portal</div></li>
                    </ExternalLink>
                    <Link to='/timetable'>
                        <li className="sidelinks"><div className="icon"><AiFillSchedule />  </div><div className="title">TimeTable</div></li>
                    </Link>
                    <Link to='/calender'>
                        <li className="sidelinks"><div className="icon"><GoCalendar />  </div><div className="title">Calender</div></li>
                    </Link>
                    <ExternalLink href='https://feekart.srmist.edu.in/srmopp/'>
                        <li className="sidelinks"><div className="icon"><GiPayMoney />  </div><div className="title">Feekart</div></li>
                    </ExternalLink>
                    <div className="more">
                        <li className="sidelinks"><Link to='/home'>Dashboard</Link></li>
                        <li className="sidelinks"><Link to='/about'>About</Link></li>
                        <li className="sidelinks" ><Link to='/contact'>Contact</Link></li>
                    </div>
                </ul>

            </div>

        </div>
    )
}
export default Sidebox;