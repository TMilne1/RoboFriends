import React from 'react';



const Card = ({name, email, id}) =>{
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow tc bw2 shadow-5">
            <img src= {`https://robohash.org/${id}?set=set2`} alt ="friend" width='260px' height ='230px'/>
            <div>
                <h2>{name} </h2>
                <h3>{email}</h3>
            </div>
        </div>
 
    )
}

export default Card;
