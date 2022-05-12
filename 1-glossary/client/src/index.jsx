import React from "react";
import { render } from "react-dom";
import axios from "axios";
// const db = require()

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test',
      addWord: '',
      addDef: '',
      entries: [],
      visibleEntries: []
    }
  }

  componentDidMount() {
    this.getEntries();
  }

  //------get entries------

  getEntries() {
    axios.get('/getEntry')
    .then((response) => {
      console.log("what is response??", response);
      this.setState({entries: response.data, visibleEntries: response.data})
    })
    .then((err) => {
      console.log('response err from axios.get:', err);
    })
  }

  //---add words/post-----

  addEntry() {
    axios.post('/addEntry', {
      word: 'howdy', //need to change these into more fluid
      definition: 'another greeting woop'
    })
      .then((response) => {
        console.log('addEntry response data:', response);
      })
      .catch((err) => {
        console.log('resonse err from axios.post:', err);
      })
  }


  //-----search entries------
  // searchEntry() {
  //   axios.get('/searchEntry', )
  // }

  render() {
    console.log('this.state.test for render:', this.state.test);
    return(
      <div>
        <h1>Glossary woohoo</h1>
        <div>
          Add Word??
          {/* <label for="word">
            <input name="word" value="first">Add Word</input>
          </label> */}
          <button>Add</button>
        </div>
      </div>
    )
  }
};

render(<App />,document.getElementById("root"));

export default App;
