import React, { Component,useState } from 'react';
import { connect } from 'react-redux';
import { delatcartcarte } from '../../actions/Plataction'
export const usersItem = ({ cardData, delet }) => {

  return (
    <div className="users-item">
          <div class="ui cards">
            <div class="card">
              <div class="content">
              <p>
  id : <span className="colored">{cardData.id}</span>{' '}
  </p><br/>
                <div class="meta">
                  Plat:  {cardData.name}
                </div>
                <div class="description">
                  Prix  : {cardData.prix} DT <br />
                 Suplement :{cardData.sup}
                </div>
              </div>
              <div class="extra content">
               <div class="ui two buttons">
              <button onClick={() => delet(cardData.id)}>delate plat </button>
            </div>  </div>  </div></div></div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
              delet: (userId) => dispatch(delatcartcarte(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(usersItem);




/*import React, {Component} from 'react'
import {connect} from 'react-redux'
import {delatecart} from '../../actions/usersAction'

export class Cardchild extends Component {
              render({ userData, delatecart }) {
        return (
            <div>
              <div>
                <div class="ui cards">
                  <div class="card">
                    <div class="content">
                      <div class="meta">
                        Plat:  {userData.name}
                      </div>
                      <div class="description">
                        Prix  : {userData.prix} DT <br />
  Suplement :{userData.sup}
                      </div>
                    </div>
                    <div class="extra content">
                      <div class="ui two buttons">
                        <div class="ui basic red button" onClick={() => delatecart(userData.id)}>Delate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

            })

const mapDispatchToProps = (dispatch) => ({
              delatecart : (el) => dispatch(delatecart(el))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cardchild)

*/