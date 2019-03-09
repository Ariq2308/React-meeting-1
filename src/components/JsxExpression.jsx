import React, { Component } from 'react';



class JsxExpression extends Component {
  render() {

    const name = 'Ariq'
    const showHello = true
    const showMath = true 
    const num1 = 25
    const num2 = 28

    let math; 
    if (showMath) {
     math = <h2>{num1}+{num2}={num1+num2}</h2>
    }
    else {
      math = null
    }
    return (
      <div>
          <h1>Ini Belajar Makan</h1>
          {showHello ? (<h2>My Name Is {name.toUpperCase()}</h2>) : null}
          {math}

      </div>
    );
  }
}

export default JsxExpression;