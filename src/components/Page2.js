import React from 'react';

const Page2 = ({ match }) => {
    return (
        <div className="content">
            <h1>Page2 Page</h1>
            <p> Page 2 content blah blah </p>
            <p> Hi there, { decodeURIComponent(match.params.name1) } and {decodeURIComponent(match.params.name2)}</p>
        </div>
    )
}

export default Page2;