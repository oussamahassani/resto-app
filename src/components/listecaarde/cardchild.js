import React, { Component,useState } from 'react';
import { connect } from 'react-redux';
import { delatcartcarte , quantiterchange } from '../../actions/Plataction'
export const usersItem = (props) => {

  return (
    <div className="users-item">
          <div class="ui cards">
            <div class="card">
              <div class="content">
              <p>
  id : <span className="colored">{props.cardData.id}</span>{' '}
  </p><br/>
                <div class="meta">
                  Plat:  {props.cardData.name}
                </div>
                <div class="description">
                 <p className="margin-bottom"> Prix  : {props.cardData.prix} DT </p>
                 <p className="margin-bottom"> Suplement :{props.cardData.sup}</p>
                 <p className="margin-bottom"> Quantiter :{props.cardData.quantiter}</p>
                </div>
              </div>
              <div class="extra content">
               <div > <input type="number" onChange={(e) => props.quantiterchange(e , props.cardData)}  placeholder="Quantite" min="1" style={{width:'100px'}}></input>  </div> 
               <div class="ui two buttons">
              <button onClick={() => props.delet(props.cardData.id)}>delate plat </button>
            </div>  </div>  </div></div></div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({

              delet: (userId) => dispatch(delatcartcarte(userId)),
              quantiterchange: (e , id) => dispatch(quantiterchange(e ,id )),
});

export default connect(mapStateToProps, mapDispatchToProps)(usersItem);
