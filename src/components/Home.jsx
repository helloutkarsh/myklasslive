import React from 'react';
import  './display.css'
import './home.css'

function Home(){
    return(
        <div>
            
        <h2 className="heading">Dashboard</h2>
        <div className="background_image">
        <div className="greetdisplay">

        <div className="greet">Welcome to  <div className="myklass">   MyKlass</div></div>
        </div>
               
           
       
        <div className="content">
        <div className="myklass">MyKlass</div> is a better way of staying productive at your college.

            Thoda boht acha kuch idhar likh do taaki padhne me premium feel ho! 
            Find your college mate! with <div className="myklass">MyKlass</div>
            I know thoda better ho sakta tha! &#x1F605;
        </div>

        <div className="images">
      

        <div className="thumbnail">
            <img src="https://ik.imagekit.io/783peqtlypv/thumbail/photo_2021-01-21_20-14-14_5CpS6dvl3w.jpg" className="thumbimage"/>
            <h4>“The secret of getting ahead is getting started.” <br/>– Mark Twain</h4>
        </div>
        <div className="thumbnail">
            <img src="https://ik.imagekit.io/783peqtlypv/thumbail/photo_2021-01-21_20-14-10_ny3h7pmpi.jpg" className="thumbimage"/>
            <h4>“The secret of getting ahead is getting started.” <br/>– Mark Twain</h4>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Home;