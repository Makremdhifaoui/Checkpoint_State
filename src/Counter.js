import React, {Component} from 'react'

export class counter extends Component {

constructor(){
  super();
  this.state={
   timer : 0
  }
}
componentDidMount(){

  this.setState({
    intervall: setInterval(()=>this.setState({timer: this.state.timer + 1}), 1000 )
  });
}
   render() {
     return (
       <div className="counter">
           <p>{this.state.timer}</p>
        </div>
     )
   }
   }

export default counter
