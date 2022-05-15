import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import Form1 from "./components/form1.jsx"
import Form2 from "./components/form2.jsx"
import Form3 from "./components/form3.jsx"
import Summary from "./components/form4.jsx"
import axios from "axios";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      summary: [],
      sumbitButton: 0,
      name: '',
      email: '',
      pw: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      addressZip: '',
      phone: '',
      credit: '',
      exp: '',
      cvv: '',
      zip: ''

    };

    //----add this bindings!!----
    this.handleClick = this.handleClick.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleClick(e) {
    event.preventDefault(e);
    console.log('clicks', this.state.sumbitButton)
    this.setState({sumbitButton: this.state.sumbitButton += 1})
  }


  // ---post function-----

  handleForm(event) {
    console.log('name??', event.target.name)
    console.log('value??', event.target.value)
    var value = event.target.value;
    var name = event.target.name;
    this.setState({[name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    var data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.pw
    }
    axios.post('/theGoods', data)
      .then((response) => {
        console.log('post success')
      })
  }




  render() {
    let button;
    if(this.state.sumbitButton === 0) {
      button = <button onClick={this.handleClick}>whadduupp</button>

    } else if (this.state.sumbitButton === 1) {
      button = <Form1 state={this.state} form1={this.handleClick} handleForm={this.handleForm}/>

    } else if (this.state.sumbitButton === 2) {
      button = <Form2 state={this.state} form2={this.handleClick} handleForm={this.handleForm}/>

    } else if (this.state.sumbitButton === 3) {
      button = <Form3 state={this.state} form3={this.handleClick} handleForm={this.handleForm}/>

    } else if (this.state.sumbitButton === 4) {
      button = <Summary/>

    }

    return(
      <div>
        <p>Hello, World!</p>
        {button}
        <p>
          <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
        </p>
      </div>
      // document.getElementById("root")
    );
  }

}



ReactDOM.render(<App/>, document.getElementById('root'));