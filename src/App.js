import React, { Component } from 'react';
import JsxExpression from './components/JsxExpression'
import Students from './components/Students'
import NavBar from './components/NavBar'
import students from './components/Students';
class App extends Component {
  render() {
    
    return (
      <div>
        <NavBar
          title = 'Students List'
        />
        <Students
          name = 'Budi'
          email = 'budiraharjo@gmail.com'
          phone = '098765456'
        />

        <Students
          name = 'Julid'
          email = 'julidinajah@gmail,com'
          phone = '123456727828728'
        />
      </div>
    );
  }
}

export default App;
