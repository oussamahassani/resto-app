import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getplatFromApi } from '../../actions/Plataction';
import Nav from '../nav/Nav'
import Axios from 'axios'
export class ModifierPlat extends Component {
        id  = React.createRef()
        form = React.createRef()
       state = {
        disabled : false
       } 
       componentDidMount() {
        this.props.getAllPlat();
         let x = this.props.card.plat
         console.log( this.props.users)
         console.log(this.props.card)
          var id = this.props.card.idupdateplat
          if ( id !== 0 && x.length > 0)
          {
            console.log("mon propors plat " , this.props.card.plat)
            console.log(id)
          let add= id - 1;
          this.id.current.value=add
         let name =  x[add].name;
         let prix =  x[add].prix;
         let sup =   x[add].sup;
         let image = x[add].image;
         this.nom.value= name
         this.prix.value = prix
         this.sup.value = sup
         this.image.value = image}
          
          else {
          console.log(this.form.current)  
          this.form.current.innerHTML='<h1>Your data has been recorded</h1>'
          }
        
   }
   senddat() {
       let id = this.id.current.value +1
       console.log(id)
  Axios.put(`http://localhost:8080/plat/${id}` , {
   "name": this.nom.value,
   "prix": this.prix.value,
   "sup": this.sup.value,
   "image":this.image.value
   })
   .then (res => alert("succes"),
           window.location.reload())
         
   .catch( error => alert(error))

   }

    render() {
     
        return (
            <div>
                  <div>
      <Nav></Nav>
      <div className="contenaire">
      <div className="ui inverted segment">
<form  ref = {this.form} class="ui success form inverted">
    <p>Plat numero <span ref={this.id}></span></p> 
    <h4 class="ui dividing header" style={{color:"white"}}>Modifier palt</h4>
    <div class="field">
   <label>Nom</label>
    <input ref = {(input) => this.nom =input}   type="text" name="name" placeholder="name"  />
   </div>
   <div class="field">
  <label>prix</label>
   <input ref = {(input) => this.prix =input}   type="text" name="prix" placeholder="prix" />
  </div>
  <div class="field">
       <label>sup</label>
      <input ref = {(input) => this.sup =input}   type="text" name="sup" placeholder="prix"  />
        </div>
        <div class="field">
     <label>image</label>
    <input ref = {(input) => this.image =input}   type="text" name="image" placeholder="prix" disabled />
      </div>
        <div  class="ui submit button" onClick = {() =>this.senddat()}  >Submit</div>
    </form>
  </div>
  </div>
  </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
  users : state.users  ,
  card : state.card
})
const mapDispatchToProps = (dispatch) => ({
  getAllPlat: () => dispatch(getplatFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifierPlat)

/*
import React, { useEffect, Component } from 'react'
import { getusersFromApi, updatedate } from '../../actions/userAction'
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
class ModifierPlat extends Component {
  state = {
    first_name: '',
    last_name: '',
    password: '',
    email: '',
    image: '',
    id: ''
  }
  componentDidMount() {
     // this.props.getusersFromApi()
   console.log(this.props.users , this.props.card)
    let id = this.props.users.iduser;
    let x = this.props.users.user
    console.log("mon id " , id)
    let user = x.filter(el => el.id == id)
    if (user.length > 0) {
      this.setState(({ first_name: user[0].first_name, last_name: user[0].last_name, email: user[0].email, password: user[0].password, image: user[0].image, id: id }))
      console.log(user, this.state.first_name)
    }

  }
  changename(e) {
    this.setState({ first_name: e.target.value })
  }
  changelast_name(e) {
    this.setState({ last_name: e.target.value })
  }
  changeemail(e) {
    this.setState({ email: e.target.value })
  }
  changepassword(e) {
    this.setState({ password: e.target.value })
  }
  render() {
    const { update } = this.props;
    const { first_name, last_name, email, password, image, id } = this.state;
    console.log(id)
    return (
        <>
      <h3 className="centre-item"> update user with id {this.state.id}</h3>
      <div className="contenaire  bagroundgray">

        <div class="fields">
          <label class="field">Name</label>
          <input style={{ marginLeft: '30px' }} class="field" type="text" value={this.state.first_name} onChange={(e) => this.changename(e)}>
          </input> <br /><br /> </div>
        <div class="fields">
          <label class="field">Last Name  </label>
          <input class="field" type="text" value={this.state.last_name} onChange={(e) => this.changelast_name(e)}></input><br /><br />
        </div>
        <div class="fields">
          <label class="field">Email</label>
          <input style={{ marginLeft: '30px' }} class="field" type="text" value={this.state.email} onChange={(e) => this.changeemail(e)}></input><br /><br />
        </div>
        <div class="fields">
          <label class="field" style={{ marginLeft: '5px' }}>Password</label>
          <input class="field" type="text" value={this.state.password} onChange={(e) => this.changepassword(e)}></input><br /><br />
        </div>
        <div class="fields">
          <label class="field">Avatar</label>
          <input class="field" style={{ marginLeft: '30px' }} type="text" value={this.state.image} ></input>
          <NavLink to="/gestion-user" ><p> <button style={{ marginTop: '30px', marginLeft: '350px' }} className="ui inverted yellow  button centre-item " onClick={() => update(first_name, last_name, email, password, image, id)}>Update USER</button></p></NavLink>

        </div>
        </div>
</>
    )
}

}
  const mapStateToProps = (state) => ({
          users : state.users ,
          card : state.card
})
  const mapDispatchToProps =  (dispatch) => ({
          getusersFromApi : () => dispatch(getusersFromApi()),
    update : (first_name,last_name,email,password,image,id) => dispatch(updatedate(first_name,last_name,email,password,image,id))
   });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ModifierPlat);*/