import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Getallorderfromapi } from '../../actions/Plataction'
import Orderchild from './Orderchild'
import Pagination from './Pagination'
import Nav from '../nav/Nav'
export class Order extends Component {
    state = {
        totalRecords: "",
        totalPages: "",
        pageLimit: "",
        currentPage: "",
        startIndex: "",
        endIndex: ""
    }
    componentDidMount() {
        this.props.Getallorderfromapi()
        this.setState({
            totalRecords:this.props.card.order.length
        });
        console.log("total page " , this.props.card.order.length)
        console.log("total page " , this.props.card)
    }
    showOrder = order => {
        var result = null;
        if (order.length > 0) {
            result = order.map((el, i) => {
                return <Orderchild order={el}  key={i}/>;
            });
        }
        return result;
    };
    onChangePage = data => {
        this.setState({
            pageLimit: data.pageLimit,
            totalPages: data.totalPages,
            currentPage: data.page,
            startIndex: data.startIndex,
            endIndex: data.endIndex
        });
    };
    render() {
        let { order } = this.props.card;
        var {
            totalPages,
            currentPage,
            pageLimit,
            startIndex,
            endIndex
        } = this.state;
        var rowsPerPage = [];
        rowsPerPage = order.slice(startIndex, endIndex + 1);
        return (
            <>
                <Nav></Nav>
                <div className="contenaire">
                    <div className="row">
                        <div className="col-xs-12 box_change_pagelimit">
                            select filter
                                <select
                                className="form-control"
                                value={pageLimit}
                                onChange={e =>
                                    this.setState({ pageLimit: parseInt(e.target.value) })
                                }
                            >
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                                <option value={100}>100</option>
                            </select>
                             
                          </div>
                    </div>
                    <table class="ui celled striped table">
                        <thead>
                            <tr><th className="bagroundcolorred" colspan="5">
                                Liste d'order
                            </th>
                            </tr>
                            <tr><th>Order number</th><th>order owner</th><th>Total sum</th><th>Quantity</th><th>Date</th></tr>
                        </thead>
                        <tbody>
                       {this.showOrder(rowsPerPage)}
            {/*this.props.card.order.map(el => <Orderchild order={el} />)*/}
                        </tbody>
                    </table>
                    <div className="box_pagination">
    <div className="row">
      <div className="col-xs-12 box_pagination_info text-right">
        <p>
          {order.length}  page  actuelle : {currentPage}/{totalPages}
        </p>
      </div>
      <div className="col-xs-12 text-center">
        <Pagination
          totalRecords={order.length}
          pageLimit={pageLimit || 5}
          initialPage={1}
          pagesToShow={5}
          onChangePage={this.onChangePage}
        />
      </div>
    </div>
  </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    card: state.card,
})

const mapDispatchToProps = (dispatch) => ({
    Getallorderfromapi: () => dispatch(Getallorderfromapi())
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)
