import React, { useState,useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../fichecss.css'
import { URL } from '../../actions/baseurl'
import swal from 'sweetalert'
export default function Signup() {
    const name = useRef()
    const lastname = useRef()
    const password = useRef()
    const email = useRef()
    const image = useRef()
      const [show, setShow] = useState(false);
    function senddata() {
        console.log(password.current.value)
        axios.post(URL + 'users', {
            "first_name": name.current.value,
            "last_name": lastname.current.value,
            "password": password.current.value,
            "email": email.current.value,
            "image": image.current.value
        })
            .then(response => {
                console.log(response)
                setShow(true)
            })
            .catch(error => {
                console.log(error)
                alert(error)
            })

    }
    function senddatatoserver()
    {   if ( name.current.value !=='' && email.current.value !=='' && password.current.value !=='' && lastname.current.value !=='')
         { //alert("all remplr")
          senddata()
             }
           else
           swal("ouuups !", "fill all input", "error");
           

    }
    return (
        <div className="contenaire margintop" >
         {show ?  <div class="ui positive message">
                <i  onClick ={() => setShow(false)} class="close icon"></i>
                <div class="header">
                    You are eligible for a login
  </div>
                <p>Go to your <b>login page</b> and fill in the fields.</p>
            </div>  : " "}  
            <div className="ui inverted segment">
                <div class="ui message">
                    <div class="header">
                        Changes in Service
  </div>
                    <p>We just updated our privacy policy here to better service our customers. We recommend reviewing the</p>
                </div>
                <div  class="ui form inverted">
                    <h4 class="ui dividing header" style={{ color: "white" }}>Sign in</h4>
                    <div class="field">
                        <div class="two fields">
                            <div class=" eight wide field">
                                <label>First Name</label>
                                <input ref={name } type="text" name="first-name" placeholder="First Name" required />
                            </div>
                            <div class=" eight wide field">
                                <label>Last Name</label>
                                <input ref={ lastname } type="text" name="last-name" placeholder="Last Name" required />
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <div class="two fields">
                            <div class=" eight wide field">
                                <label>Email</label>
                                <input type="email" ref={ email} name="first-name" placeholder="Email" required />
                            </div>
                            <div class=" eight wide field">
                                <label>Password</label>
                                <input type="password" ref={password} name="password" placeholder="Password" required />
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <label>Avatar</label>
                        <input type="text" ref={image } name="avatar" placeholder="avatar" required />
                    </div>
                    <input value="submit" class="ui submit button" type="submit" onClick={senddatatoserver}/> 
                </div>
                <div class="ui floating message">
                    <p>you have acount !! <Link to="login"> you can connect from here </Link> </p>
                </div>
            </div>
        </div>
    )
}