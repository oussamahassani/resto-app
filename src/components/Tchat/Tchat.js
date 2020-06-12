import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../../actions/actionchat'
import logo from '../../image/logo.png'
import user from '../../image/user.png'

export class Tchat extends Component {
   hide = React.createRef();
  state = {
    show : false
  }

  componentDidMount(){
    console.log("bonjour")
  }
  render() {
  //  console.log("bonjour")
    const { feed, sendMessage } = this.props;
    return (
      <div className="tachtfooter">
      <div className="bootm">
      <div className="ui card" ref = {this.hide}>
        <div className="hader">
          <h4 className="tchat-title">Hello at my RESTO APP</h4>
        </div>
        <div className="floirright" >
          <div className="dispalyflexbutton">
            <button onClick = {() => this.setState({show : ! this.state.show})} >{this.state.show ? <>➖</> : <>≡ </>} </button>
            <button onClick = {() => this.hide.current.style.display ='none'} className="padingleft10px">❌</button>
          </div>
        </div>
        { this.state.show ? <> <div className="content hight" style = {{color : this.props.color }}>
          <ul>
            {
            feed.map((entry, i) =>
              <><p  className={entry.sender == "user" ? "bleu" : "noir"}> <img src={entry.sender == "bot" ? logo : entry.sender == "user" ?user : null}  width="30px"/> {entry.text} <br/> {entry.x}</p></>
            )
            }
          </ul>
        </div>


  

        {this.props.children}
        <div class="extra content">
          <input type="text" onKeyDown={(e) => e.keyCode === 13 ? sendMessage(e.target.value) : null}></input>
        </div> </> : " " }

           
      </div >
      </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  feed: state.tchat
})

const mapDispatchToProps = {
  sendMessage: (e) => sendMessage(e)
}

export default connect(mapStateToProps, { sendMessage })(Tchat)
