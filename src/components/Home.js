import React from 'react';
import { Link } from 'react-router-dom';

const names = [ 'Weiß/Schule#Me漢字', 'Märchen Erlkönig']

const Home = () => {
    return (
        <div className="content">
            <h1>Home Page</h1>
            <Link to={`/page2/${encodeURIComponent(names[0])}/${encodeURIComponent(names[1])}`}>Page 2 with "Weiß/Schule#Me漢字" and "Märchen Erlkönig"</Link>
        </div>
    )
}

export default Home;
