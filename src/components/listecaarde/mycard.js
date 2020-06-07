import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getcarteFromApi } from '../../actions/Plataction';
import axios from 'axios'
import Cardchild from './cardchild';
import Nav from '../nav/Nav'
import { URL } from '../../actions/baseurl'
let somme = ""
let nombreaticle = ""
export class Mycard extends Component {
  form = React.createRef()
  btn = React.createRef()
  alert = React.createRef()
  unmount = React.createRef()
  componentDidMount() {
    this.props.getcarteFromApi()
    console.log(this.btn.current.style = 'visibility: hidden;')
  }
  hidealert = () => {
   //this.alert.current.style = "visibility: hidden;"
   console.log("hh")
  }
  somme() {
    let a = []
    nombreaticle = this.props.card.cardt.length;
    a = this.props.card.cardt.map(el => el.prix)
    somme = a.reduce((a, b) => +a + (+b))
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
    this.unmount.current.innerHTML = "<h1>Hey thanks for your order!".concat(
      "We’ll let you know when it’s on its way. In the meantime, check out what othernew customers are saying about their experience so far <<link to testimonials page>>.  </h1>")

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
      "somme": somme,
      "nombrearticle": nombreaticle,
      "date": date
    }))
      .then((res) => alert(res), this.delateallcarte(), this.componentWillUnmount())

      .catch((error) => alert(error))


  }
  render() {
    const { card } = this.props;
    return (
      <div>
        <Nav></Nav>
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
          <p className="centre-item" ref={this.btn}><button className="ui inverted green button" onClick={() => this.orderbutton()}>Order Now </button></p>
        </div>
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
