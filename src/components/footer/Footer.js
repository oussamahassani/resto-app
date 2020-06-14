import React from 'react'
import logo from '../../image/logo.png'
import Tchat from '../Tchat/Tchat'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
export default function Footer() {
 
 
 
    return (
      <Zoom>
      <div className="footer">
        <div className="ui  inverted
        vertical  segment " style={{paddingTop:'30px'}}>
    <div className="ui center aligned container">
      <div className="ui stackable inverted divided grid">
        <div className="">
          <h4 className="ui inverted header">SOCIAL NETWORK</h4>
          <div className="ui inverted link list widh250">
          <p> Facebook : &emsp;&emsp;<a href="#" className="item">Reso app FANS</a></p> 
            <p>Twitter &emsp;&emsp;<a href="#" className="item">Twiit Resto app</a></p>
            <p>Instagrame &emsp;&emsp;<a href="#" className="item"> aour plat in instagram</a></p>
          </div>
        </div>
        <div className="three wide column">
          <h4 className="ui inverted header"> join us, we will wait for you</h4>
          <div className="ui inverted link list">
            <a target='blank' href="rating-user" className="item">CUSTOMER REVIEWS</a>
            <a target='blank' href="Abonement" className="item">Abonement</a>
          </div>
        </div>
        <div className="seven wide column">
          <h4 className="ui inverted header">RESTO APP</h4>
          <p>your best partner for all Occasions and holidays</p>
          <div style={{color:"blue"}}> <Tchat color = "red"/> </div>
          
        </div>
      </div>
      <div className="ui inverted section divider"></div>
      <img src={logo} className="ui centered mini image"/>
      <div className="ui horizontal inverted small divided link list">
        <a className="item" href="#">Contact Us</a>
        <a className="item" href="#">Terms and Conditions</a>
        <a className="item" href="#">Privacy Policy</a>
      </div>
    </div>
  </div>
  </div>
  </Zoom>
    )
}
