import React,{useEffect, Component} from 'react'
import {getusersFromApi , updatedate} from '../../actions/userAction'
import { connect } from "react-redux";
import { NavLink} from 'react-router-dom';
class  Updateuser  extends Component{
    state = {
        first_name : 'oussama' ,
        last_name:''  ,
        password :'' ,
        email :''  ,
        image : 'https://semantic-ui.com/images/avatar/large/steve.jpg' ,
        id : '1'
    }
        componentDidMount() {
              //  this.props.getusersFromApi()
                           
            let id = this.props.users.iduser;
            let x = this.props.users.user
            let user = x.filter( el => el.id==id)
              if (user.length > 0)
              {
            this.setState(({ first_name :user[0].first_name, last_name:user[0].last_name, email : user[0].email ,password :user[0].password,  image : user[0].image , id : id}))
            console.log(user , this.state.first_name)
              }
       
    }
        changename(e){
            this.setState({first_name : e.target.value})
        }
        changelast_name(e){
            this.setState({last_name : e.target.value})
        }
        changeemail(e){
            this.setState({email : e.target.value})
        }
        changepassword(e){
            this.setState({password : e.target.value})
        }
        render()      {
            const {update} = this.props ;
            const { first_name,last_name,email,password,image,id} = this.state;
            console.log(id)
    return (
        <>
        <h3 className="centre-item"> update user with id {this.state.id}</h3>
    <div className="contenaire  bagroundgray"> 
   
        <div class="fields">
       <label class="field">Name</label>
     <input style ={{marginLeft:'30px'}} class="field" type="text" value={this.state.first_name} onChange={(e) => this.changename(e)}></input> <br/><br/>
     </div>
     <div class="fields">
     <label class="field">Last Name  </label>
     <input class="field" type="text" value={this.state.last_name} onChange={(e) => this.changelast_name(e)}></input><br/><br/>
    </div>
    <div class="fields">
     <label class="field">Email</label>
     <input style ={{marginLeft:'30px'}} class="field"type="text" value={this.state.email} onChange={(e) => this.changeemail(e)}></input><br/><br/>
     </div>
     <div class="fields">
     <label class="field" style ={{marginLeft:'5px'}}>Password</label>
      <input class="field"  type="text" value={this.state.password} onChange={(e) => this.changepassword(e)}></input><br/><br/>
     </div>
     <div class="fields">
      <label class="field">Avatar</label>
      <input class="field" style ={{marginLeft:'30px'}} type="text" value={this.state.image} ></input>
      </div>
     <NavLink to ="/gestion-user" ><p> <button style={{marginTop:'30px',marginLeft:'350px'}} className="ui inverted yellow  button centre-item " onClick={()=> update(first_name,last_name,email,password,image,id)}>Update USER</button></p></NavLink>
   
        </div>
        </>
    )
}

}
  const mapStateToProps = (state) => ({
    users : state.users
})
  const mapDispatchToProps =  (dispatch) => ({ 
    getusersFromApi : () => dispatch(getusersFromApi()),
    update : (first_name,last_name,email,password,image,id) => dispatch(updatedate(first_name,last_name,email,password,image,id))
   });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Updateuser);