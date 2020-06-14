import { connect } from "react-redux";
import React, { useEffect ,useState} from 'react'
import logo from '../../image/logo.png'
import { NavLink} from 'react-router-dom';
import '../fichecss.css'
import swal from 'sweetalert'
import {URL} from '../../actions/baseurl'
import axios from 'axios'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
 function Nav({card}) {
  const [login ,setlogin] = useState(true)
useEffect(() => {
  setTimeout( () => {   
   let  name = localStorage.getItem("name")
   let  Lastname = localStorage.getItem("lastname")
 if (name==="" && Lastname ===""  || name === null && Lastname ===null)
 { console.log("name " , name) 
   setlogin(false)
 }
},200)
})
const  delateallcarte = () => {
  let tabid = [];
  let nombreaticle = card.cardt.length;
  tabid = card.cardt.map(el => el.id)
  for (let i = 0; i < nombreaticle; i++) {
    axios.delete(URL + `ListeCarte/${tabid[i]}`)
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }
}
  function clearlocalsotreg(){
    delateallcarte()
    window.location.reload()
    swal("goodbye!  " + localStorage.getItem("name") + " " + localStorage.getItem("lastname"), {
      className: "red-bg",
    });
    localStorage.clear()
  
   
  }
  
    return (
      <Zoom>{/*Using Zoom Effect*/}
      <>
  <div className="ui inverted segment">
  <div className="ui inverted secondary pointing menu">
  <em><img  className="imageleft"src={logo} ></img></em>  
  <div className=" padding-left flex">
    <p className="item">
    <em><h4>Resto app</h4></em>     </p>
 <em    class="item"><NavLink exact activeClassName="active" to="/">Home</NavLink></em>
  {login ?  <em class="item"><NavLink exact activeClassName="active" to="/card">Card {card.cardt.length}</NavLink></em> :"" }
  {! login ?  <em class="item"><NavLink exact activeClassName="active" to="/login">login</NavLink></em> : "" } 
 {localStorage.getItem("name") == "admin"  && localStorage.getItem("lastname") == "admin"?    <em class="item"><NavLink exact activeClassName="active" to="/cards">Add Plat </NavLink></em> :""}
 {localStorage.getItem("name") == "admin"  && localStorage.getItem("lastname") == "admin"?   <em class="item"><NavLink exact activeClassName="active" to="/order">Order</NavLink></em> : ""}
 {localStorage.getItem("name") == "admin"  && localStorage.getItem("lastname") == "admin"?   <em class="item"><NavLink exact activeClassName="active" to="/gestion-user">Gestion-user</NavLink></em> : ""}
    </div>
  </div>   
  { login ? <p className="item  flex-bettwen pading "  >  <span className="couleurnoir" > Hello {localStorage.getItem("name") + " " + localStorage.getItem("lastname")} </span> <div className="ui submit  violet button widht-btn" onClick={clearlocalsotreg}><NavLink to ="/">Logout</NavLink> </div></p> : ""}
     
      <br/> </div> 
        </>
        </Zoom>
    )
}
const mapStateToProps = (state) => ({
  card: state.card,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
     
    
