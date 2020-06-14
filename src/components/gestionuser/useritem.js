import React, { Component } from 'react'
import {connect} from 'react-redux'
import {updatestate,deleteUser} from '../../actions/userAction'
import { NavLink} from 'react-router-dom';
 class Useritem extends Component  {
       state = {changetype: true}
    render(){

       const {donner,delet,update} = this.props ;
       
    return (
    
                        <>
      <tr>
      <td> 👱 id- {donner.id} </td>
      <td class="collapsing">
        {donner.first_name}
      </td>
      <td>{donner.last_name}</td>
      <td > ✉  {donner.email}</td>
      <td ><input className="gestionuser-password" type={this.state.changetype ? "password" : "text"} value= {donner.password}></input>
      <div  className =" ui submit button miniwidthbtn" onClick={() => this.setState({changetype : !this.state.changetype})}>{this.state.changetype ? "👁" :"🧐"} </div>
      </td>
      <td > <img src = {donner.image}   width="50px"/></td>
      <td > <div className="flex-bettwen"><button onClick={()=> delet(donner.id)} class="ui inverted red button"><i class="trash icon"></i></button>{" "}
      <NavLink to='/update-user'> <button onClick={() => update(donner.id)} class="ui inverted yellow button" ><i class="edit icon">
</i></button> </NavLink> </div> </td>
      </tr>


            </>
       
    )
}}



const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
delet: (iduser) => dispatch(deleteUser(iduser)),
update : (updateuser) => dispatch(updatestate(updateuser))
})

export default connect(mapStateToProps ,mapDispatchToProps)(Useritem)