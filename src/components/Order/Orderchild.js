import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Orderchild extends Component {
    render( ) {
      const { order } = this.props;
        return (
            <>
      <tr>
      <td> <i class="folder icon"></i> Devi- {Math.floor(Math.random() * 20 +  Number(order.id))} </td>
      <td class="collapsing">{order.username}</td>
      <td class="collapsing">
      <i class="money bill alternate outline icon"></i>   {order.somme}
      </td>
      <td>{order.nombrearticle}</td>
      <td > <i class="calendar alternate outline icon"></i> {order.date}</td>
      </tr>


            </>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Orderchild)
