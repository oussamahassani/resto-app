import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Addnewplat} from '../../actions/Plataction'
import '../fichecss.css'
import Navbar from '../nav/Nav'
import axios from 'axios'
export class AddPlat extends Component {
  postdate(e) {

let imag  ='https://media.istockphoto.com/photos/empty-plate-on-white-picture-id184276935'
  if   ( this.image.value ==="" ) 
  {
    axios.post('http://localhost:8080/plat',{
      "name": this.name.value,
      "prix": this.salary.value,
      "sup": this.age.value,
      "image": imag
    })
        .then(response => {
          console.log(response)
          alert('succes')
          window.location.reload(); 
        })
        .catch(error => {
          console.log(error)
          alert(error)
        })
      }
      else if (this.image.value !=='') {
        axios.post('http://localhost:8080/plat',{
          "name": this.name.value,
          "prix": this.salary.value,
          "sup": this.age.value,
          "image": this.image.value
        })
            .then(response => {
              console.log(response)
              alert('succes')
              window.location.reload(); 
            })
            .catch(error => {
              console.log(error)
              alert(error)
            })
      }

  e.preventDefault();
   }
   render() {
    return (
         
         
            <div className="axios-test">
            <Navbar/>
          <h1>Add new Plat</h1>
            <div className="contenaire centret"><br />
            <div className="ui inverted segment">
 <form className="ui form inverted" onSubmit={(e) => this.postdate(e)}>
 <div class="field">
   <label>Name</label>
   <p><input ref={(input) => this.name = input} type="text" placeholder="Name" name="name" required /> </p>
   
 </div>
 <div class="field">
  <label>Prix</label>
  <p>  <input ref={(input) => this.salary = input} type="text" placeholder="Prix" required /></p>
</div>
<div class="field">
    <label>Suplement</label>
    <p> <input ref={(input) => this.age = input} type="text" placeholder="Supliment" required /></p>
  </div>
  <div class="field">
    <label>image</label>
    <p>  <input ref={(input) => this.image = input} type="text" placeholder="URL IMAGE"  /></p>
  </div>
  <div class="field">
    <br></br>
   <p> <button className="ui inverted yellow  button" type="submit" >ADD EMPLOY</button></p>
   </div>
 </form>
</div>
</div>
        </div>
    )
} }

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) =>({
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPlat)
