import React, { Component ,useEffect} from 'react'
import { connect } from 'react-redux'
import Useritem from './useritem'
import {getusersFromApi} from '../../actions/userAction'
import Nav from '../nav/Nav'
export class User extends Component  {
    componentDidMount() {
        this.props.getusersFromApi()
    }
       
    render() {
    return (
        <div>
          <>
   <Nav></Nav>
   <div className="contenaire">
       <table class="ui celled striped table">
           <thead>
               <tr><th   className="bagroundcolorred" colspan="7">
                  Liste User
                   </th>
                   </tr>
                   <tr><th>id User</th><th>Name</th><th>Last Name</th><th>Email</th><th>Password</th> <th>Avatar</th><th>Action</th></tr>
               </thead>
           <tbody>
            {  this.props.users.user.map(el => <Useritem  donner={el}/> )  }
           </tbody>
       </table>
   </div>
   </>
        </div>
    )
}
}
const mapStateToProps = (state) => ({
    users : state.users
})

const mapDispatchToProps = (dispatch) => ({
    getusersFromApi: () => dispatch(getusersFromApi()),
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
