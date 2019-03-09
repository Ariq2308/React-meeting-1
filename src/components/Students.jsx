import React, { Component } from 'react';

class students extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {name, email, phone} = this.props
        return ( 
            <div>
                <h4>{name}</h4>
                <ul>
                    <li>
                        Email : {email}
                    </li>
                    <li>
                        Phone : {phone}
                    </li>
                </ul>
            </div>
         );
    }
}
 
export default students;