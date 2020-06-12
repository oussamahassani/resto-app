import React, { Component } from 'react'
import { connect } from 'react-redux'
import {AddNewplat} from '../../actions/Plataction'
import '../fichecss.css'
import Navbar from '../nav/Nav'
import axios from 'axios'
import Rotate from 'react-reveal/Rotate';
export class AddPlat extends Component {
  state = {
    name :'' ,
    prix :''  ,
    sup : '' ,
    image : ''
    
}
/*
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
   }*/
   render() {
    const { name,prix,sup,image} = this.state;
    const {AddNewplat} = this.props
    return (
         <>

            <div className="axios-test">
            <Navbar/>
          <h1 className="btncentre">Add new Plat</h1>
            <div className="contenaire centret"><br />
            <div className="ui inverted segment">
 <form className="ui form inverted">
 <div class="field">
   <label>Name</label>
   <p><input ref={(input) => this.name = input} type="text" onChange={(e) => this.setState({name: e.target.value})} placeholder="Name" name="name" required /> </p>
   
 </div>
 <div class="field">
  <label>Prix</label>
  <p>  <input ref={(input) => this.salary = input} type="text" onChange={(e) => this.setState({prix: e.target.value})}  placeholder="Prix" required /></p>
</div>
<div class="field">
    <label>Suplement</label>
    <p> <input ref={(input) => this.age = input} type="text" onChange={(e) => this.setState({sup : e.target.value})}  placeholder="Supliment" required /></p>
  </div>
  <div class="field">
    <label>image</label>
    <p>  <input ref={(input) => this.image = input} type="text"  onChange={(e) => this.setState({image : e.target.value})}  placeholder="URL IMAGE"  /></p>
  </div>
  <div class="field">
    <br></br>
   <p> <button className="ui inverted yellow  button" onClick = {()  =>   AddNewplat (name,prix,sup,image)}>Add New PLat</button></p>
   </div>
 </form>
</div>
</div>
        </div>
        </>
    )
} }

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) =>({
  AddNewplat : (name,prix,sup,image) => dispatch(AddNewplat(name,prix,sup,image))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPlat)
