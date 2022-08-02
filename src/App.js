import React,{Component} from 'react'
import './App.css';
import Counter from './Counter';


class App extends Component{
  constructor(props) {
    super(props)
  this.state = {
    Person : { fullName:"DHIFAOUI MAKREM",
     bio: <p> 26 year old, Je suis FullStack Developer, Dynamique, <br />
      rigoureuse et polyvalente, je tiens à vous assurer de ma motivation</p>,
      imgSrc:'./photo.jpg' ,
       profession:"FullStack JS Developer"},
    show : true
  };
  } 
  render(){
   
    return (
    <div className="App">
      {
        this.state.show?
      <div className='card'>
        <h1 style={{fontFamily:'times new roman', color:'blue',fontSize:"25px"}}>{this.state.Person.fullName}</h1>
        <h3 style={{fontFamily:'times new roman', color:'black',fontSize:"16px"}}>{this.state.Person.bio}</h3>
        <h3 style={{fontFamily:'times new roman', color:'red',fontSize:"20px"}}>{this.state.Person.profession}</h3>
        <div><img className='myimg' src={this.state.Person.imgSrc} alt="img"></img></div>
        <h5 style={{border:''}}>Time interval : <Counter/></h5>
        
      </div>
      :null
      }
      <button onClick={()=>this.setState({...this.state,show:!this.state.show})} id="myButton" >Hide Data</button>
      
    </div>)
  }

}


export default App;
