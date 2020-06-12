import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getplatFromApi } from '../../actions/Plataction';
import PlatItem from './platItem'
import Nav from '../nav/Nav'
import {Footer} from '../index'
export class PlatContainer extends Component {
  componentDidMount() {
    this.props.getAllPlat();
  }
  render() {
    const { card } = this.props;
    return (
      <div>
        <Nav></Nav>
        <div className="flexcart"> 
        {card.plat.map((el, i) => (
          <PlatItem key={i} el={el} />
        ))}
      </div>
      <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  card: state.card,
});

const mapDispatchToProps = (dispatch) => ({
  getAllPlat: () => dispatch(getplatFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlatContainer);
