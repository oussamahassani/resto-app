import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from '../nav/Nav'
import Axios from 'axios'
export class ModifierPlat extends Component {
        id  = React.createRef()
        form = React.createRef()
       state = {
        disabled : false
       } 
    componentDidMount(){
          console.log(this.props.card.plat)
          var x = this.props.card.plat
          var id = this.props.card.idupdateplat
          if ( id !== undefined && x.length > 0)
          {
            console.log(id , x)
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
    <input ref = {(input) => this.nom =input}   type="text" name="name" placeholder="name" />
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
  
    card: state.card,

});

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ModifierPlat)
