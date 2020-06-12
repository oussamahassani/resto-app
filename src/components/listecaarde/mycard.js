import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getcarteFromApi } from '../../actions/Plataction';
import axios from 'axios'
import Cardchild from './cardchild';
import Nav from '../nav/Nav'
import { URL } from '../../actions/baseurl'
import Main  from '../buttonpaypal/Paypal'
import {Link} from 'react-router-dom'
import {Footer} from '../../components'
let somme = ""
let nombreaticle = ""
export class Mycard extends Component {
  form = React.createRef()
  btn = React.createRef()
  alert = React.createRef()
  unmount = React.createRef()
  unmountt = React.createRef()
  textunmout = React.createRef()
  state = {
    somme: "0",
    show : false
  }
  
  componentDidMount() {
    this.props.getcarteFromApi()
    console.log(this.btn.current.style = 'visibility: hidden;') 
    this.unmountt.current.style = 'visibility: hidden';
   this.textunmout.current.style='display:none'
  
  }


  
  somme() {
    let a = []
    nombreaticle = this.props.card.cardt.length;
    a = this.props.card.cardt.map(el =>  (Number(el.prix) * Number(el.quantiter )))
  //somme=  a.map(el => el * this.state.quanti)
    somme = a.reduce((a, b) => +a + (+b))
    this.setState({somme : somme})
    console.log(somme)
    this.form.current.innerHTML = `
    <div class="ui info message transition" >
  <i class="close icon" ></i> $
  <div class="header"> $
    Was this what you wanted?
      </div>
  <ul class="list">
    <li> La somme de votre panier est ${somme} DT </li>
    <li>Number of item : ${nombreaticle} </li>
  </ul>
</div>
    `
    this.form.current.style.color = "red"
    this.form.current.style.width = "1200px"
    console.log(this.btn.current.style = 'visibility: visible;')

  }
  componentWillUnmount = () => {
    this.unmount.current.innerHTML = ""
      this.unmountt.current.style='visibility: visible;'
      this.textunmout.current.style='visibility: visible;'
  }
  delateallcarte = () => {
    let tabid = [];
    tabid = this.props.card.cardt.map(el => el.id)
    for (let i = 0; i < nombreaticle; i++) {
      axios.delete(URL + `ListeCarte/${tabid[i]}`)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }

  }
  orderbutton() {
    let date = Date(Date.now()).toString().substring(0, 25)
    axios.post(URL + 'Order', ({
      "username": localStorage.getItem('name'),
      "somme": somme,
      "nombrearticle": nombreaticle,
      "date": date
    }))
      .then((res) => alert(res), this.delateallcarte(), this.componentWillUnmount() )
                
      .catch((error) => alert(error))


  }
  render() {
    const { card } = this.props;
    return (
      <div>
        <Nav></Nav>
       <h1 ref={this.textunmout } >Hey thanks for your order!"+
   "now you only have to pay your order !! We’ll let you know when it’s on its way. In the meantime, check out what othernew cus
    <Link  to='rating-user'> view this page or even the views of other visitors</Link>  </h1>
        <div ref={this.unmount}>
          <br />
          {card.cardt.length ? <p> <div ref={this.form} className="positionleft">
          </div><button className="Positionright ui inverted green button" onClick={() => this.somme()}>Calculate sum</button></p> : ""}

          <br /><br/><br/>
          <div className="flexcart">
            {card.cardt.map((el, i) => (
              <Cardchild key={i} cardData={el} />
            ))}
          
          </div>
          <div><p className="centre-item" ref={this.btn}><button className="ui inverted green button" onClick={() => this.orderbutton()}>Order Now </button>
          
          </p>
          </div>
        </div>
        <br></br>
        <div className="centre-item" ref={this.unmountt }  width="80px"><Main   somme={this.state.somme}/> </div> 
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  card: state.card,
});

const mapDispatchToProps = (dispatch) => ({
  getcarteFromApi: () => dispatch(getcarteFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mycard);
