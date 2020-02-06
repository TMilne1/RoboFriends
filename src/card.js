import React from 'react';



const Card = ({name, email, id}) =>{
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow tc bw2 shadow-5">
            <img src= {`https://robohash.org/${id}?set=set2`} alt ="friend" width='225px' height ='225px'/>
            <div>
                <h4>{name} </h4>
                <p>{email}</p>
            </div>
        </div>
 
    )
}

export default Card;
