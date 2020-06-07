import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Getallorderfromapi} from '../../actions/Plataction'
import Orderchild from './Orderchild'
import Nav from '../nav/Nav'
export class Order extends Component {
    componentDidMount(){
          this.props.Getallorderfromapi()
    }
    render() {
        return (
            <>
            <Nav></Nav>
            <div className="contenaire">
                <table class="ui celled striped table">
                    <thead>
                        <tr><th   className="bagroundcolorred" colspan="4">
                           Liste d'order 
                            </th>
                            </tr>
                            <tr><th>Order number</th><th>Total sum</th><th>Quantity</th><th>Date</th></tr>
                        </thead>
                    <tbody>
                     {  this.props.card.order.map(el => <Orderchild  order={el}/> )  }
                    </tbody>
                </table>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    card: state.card,
})

const mapDispatchToProps = (dispatch) => ({
    Getallorderfromapi : () => dispatch(Getallorderfromapi())
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)
