import { connect } from "react-redux";
import React, { useEffect ,useState} from 'react'
import logo from '../../image/logo512.png'
import { NavLink} from 'react-router-dom';
import '../fichecss.css'
import swal from 'sweetalert'
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
  function clearlocalsotreg(){
    window.location.reload()
    swal("goodbye!  " + localStorage.getItem("name") + " " + localStorage.getItem("lastname"), {
      className: "red-bg",
    });
    localStorage.clear()
   
  }
  
    return (
        
  <div className="ui inverted segment">
  <div className="ui inverted secondary pointing menu">
     
  <em  class="item"><img  className="imagleft"src={logo} width="100px"></img></em>  
  <div className=" padding-left flex">
    <p className="item">
    <em><h4>Resto app</h4></em>     </p>
    <em class="item"><NavLink exact activeClassName="active" to="/">Home</NavLink></em>
  {login ?  <em class="item"><NavLink exact activeClassName="active" to="/card">Card {card.cardt.length}</NavLink></em> :"" }
  {! login ?  <em class="item"><NavLink exact activeClassName="active" to="/login">login</NavLink></em> : "" } 
 {localStorage.getItem("name") == "admin"  && localStorage.getItem("lastname") == "admin"?    <em class="item"><NavLink exact activeClassName="active" to="/cards">Add carte </NavLink></em> :""}
 {localStorage.getItem("name") == "admin"  && localStorage.getItem("lastname") == "admin"?   <em class="item"><NavLink exact activeClassName="active" to="/order">order</NavLink></em> : ""}
    </div>
   
  </div>   
  { login ? <p className="item  flex-bettwen pading"  >  <span > Hello {localStorage.getItem("name") + " " + localStorage.getItem("lastname")} </span> <div className="ui submit  violet button" onClick={clearlocalsotreg}>Log out</div></p> : ""}
     
        <br/> </div>
    )
}
const mapStateToProps = (state) => ({
  card: state.card,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
     
    
