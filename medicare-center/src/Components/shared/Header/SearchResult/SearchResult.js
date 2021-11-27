import React from 'react';
import { Link } from 'react-router-dom';

const SearchResult = ({ result }) => {
    const { _id, title } = result || {};

    return (
        <div className="bg-white col-md-3 mx-auto shadow p-0">
            <Link to={`/single-service-details/${_id}`}><p>{title}</p></Link>
        </div >
    );
};

export default SearchResult;