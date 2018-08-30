import React from 'react';

const Page1 = ({ match }) => {
    return (
        <div className="content">
            <h1>Heinrich Heine</h1>
            <p>{(match.params.name)?`Hi there, ${match.params.name}`:'Hello there!'}</p>         
            <p>Ich weiß nicht, was soll es bedeuten, 
                dass ich so traurig bin; ein Märchen aus alten Zeiten, 
                das kommt mir nicht aus dem Sinn.
            </p>
        </div>
    )
}

export default Page1;