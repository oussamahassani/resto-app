import React, { Component ,useState,useEffect} from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2'
import {Link, withRouter} from 'react-router-dom'
import { deleteUser,Addplattocart,updateplattocart } from '../../actions/Plataction';
import '../index.css';
import Flip from 'react-reveal/Flip';
let name ="" ; let Lastname =""
export const PlatItem = ({ el, delet,add,update }) => {
  const [login, setlogin] = useState(false)
  useEffect(() => {
    name = localStorage.getItem("name")
    Lastname = localStorage.getItem("lastname")
    if (name!=="" && Lastname !==""  && name !== null && Lastname !==null)
    { console.log(name) 
      setlogin(true)
    }
  })
 
 
  function popup() {
    console.log(name,Lastname)
    Swal.fire({
      title: 'You are not abel to do this action',
      html: 'plz login for keep on going your process.',
      width: 800,
      padding: '3em',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://media.giphy.com/media/5kzB8SARBWCmQ/giphy.gif")
        left top
        no-repeat
      `
    })
  }
  return (
    <Flip duration="2500">
    <div className="users-item">
 
  <div class="ui card">
    <div className="flex">
      <h6 style={{ float: "left" }}>plant NUm {el.id}</h6>
    </div>
   
    <div class="image" height="50px">
      <img src={el.image} />
    </div>
 
    <div class="content">
      <div class="name">
        <h5> <em className="colorgray">Name :</em> {el.name}</h5>
      </div>
      <div class="prix">
        <h5><em className="colorgray">Price :</em>{el.prix} DT</h5>
      </div>
      <div class="supliment">
        <h5><em className="colorgray">Extra cost :</em>{el.sup}</h5>
      </div>
    </div>
    <div class="extra content">
      <a>
        <i class="smile outline icon"></i>
      </a>
      <div className="flexcart">
{login ? <button className="ui inverted yellow  button" onClick={() => add (el)}><i class="shopping basket icon"></i></button> :<button onClick={popup}> <i class="shopping basket icon"></i></button>}
  {name == "admin"  && Lastname == "admin"?   <button className="ui inverted red  button" onClick={() => delet (el.id)}><i class="trash icon"></i> </button> :""  }
{name == "admin"  && Lastname == "admin"?  <button className="ui inverted red  button" onClick={() =>update(el.id)}>  <Link to="modifier"> 🛠</Link> </button> :"" }
      </div>
    </div>
  </div>
</div>
</Flip>
  );
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  delet: (cardid) => dispatch(deleteUser(cardid)),
  add : (card) => dispatch(Addplattocart(card)),
  update : (card) => dispatch(updateplattocart(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlatItem);
