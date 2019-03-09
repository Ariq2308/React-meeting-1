import React from 'react';

const NavBar = (props) => {
    const {title} = props
    return ( 
        <div>
            <h1>{title}</h1>
        </div>
     );
}
 
export default NavBar;