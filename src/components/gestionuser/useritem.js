import React, { Component } from 'react'
import {connect} from 'react-redux'
import {updatestate,deleteUser} from '../../actions/userAction'
import { NavLink} from 'react-router-dom';
 class Useritem extends Component  {
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
      <td >  {donner.password}</td>
      <td > ✉  {donner.email}</td>
      <td > <img src = {donner.image}   width="50px"/></td>
      <td > <span className="flex-bettwen">
      <NavLink to='/update-user'> <button onClick={()=> delet(donner.id)} class="ui inverted red button"><i class="trash icon"></i></button> {"  "}<button onClick={() => update(donner.id)} class="ui inverted yellow button" ><i class="edit icon">
</i></button> </NavLink> </span> </td>
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