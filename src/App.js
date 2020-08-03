import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from "./components/Customer";

const customers = [{
  'id': 1,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '김진규',
  'birthday' : '021210',
  'gender' : '여자',
  'job' : '회사원'
},
  {
    'id': 2,
    'image' : 'https://placeimg.com/64/64/any',
    'name' : '김진규',
    'birthday' : '021210',
    'gender' : '여자',
    'job' : '회사원'
  },
  {
    'id': 3,
    'image' : 'https://placeimg.com/64/64/any',
    'name' : '김진규',
    'birthday' : '021210',
    'gender' : '여자',
    'job' : '회사원'
  }
  ]

class App extends Component{
  render() {
    return(
        <div>
          {customers.map(c=>{return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>);})}
        </div>
    );
  }
}

export default App;
