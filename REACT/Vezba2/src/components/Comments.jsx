import React from 'react';
                   //props => hasComments :uslovno renderiranje
export const Comments = ({hasComments,longComment}) => {
    return(
        <div id="comments">
            { hasComments === true ? <h1>Comments:</h1>
            : <h2>No Comments here</h2>}
            { longComment === false && 
            <h4>We have a long comment present in this fil {props}</h4>}
        </div>
    )
}

// if (uslov){//izvrsi ako e tocno} else{//izvrsi ako e netocno}
// uslov ? izvrsi tocno : izvrsi netocno < -- ternry operator
// && <-- logicko i (samo koga dvete starni se tocni)