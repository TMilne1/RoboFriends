import React from 'react';

const Scroll = (props) => {

    return (
        <div style={{ overflowY: 'scroll', height: `${window.screen.height * .625}px`, border: '5px solid black'}}>
            {console.log()}
           {props.children}
        </div>

    )
}

export default Scroll;