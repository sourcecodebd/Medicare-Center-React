import React from 'react';
import MarqueeOff from './MarqueeOff';
import './Header.css';
import Navigation from './Navigation/Navigation';
import useAuth from '../../../hooks/useAuth';
import SearchResult from './SearchResult/SearchResult';

const Header = () => {
    const { medicals } = useAuth();
    const { services, search, setSearch } = medicals;

    const handleSearch = (e) => {
        const searchText = e.target.value;
        const found = services?.filter(service => service.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
        if (searchText) {
            setSearch(found);
        }
        else {
            setSearch([]);
        }
    }

    return (
        <>
            <div className="header">
                <div className="marquee p-2 containers" id="short-msg">
                    <div className="d-flex">
                        <marquee width="100%" direction="left">
                            Summer discount up to 60% OFF for appointments
                        </marquee>
                        <i onClick={MarqueeOff} className="fas fa-times mx-4 mt-1"></i>
                    </div>
                </div>
                <hr className="my-0 containers" />
                <div className="info-bar">
                    <div className="header-img-text">
                        <img src="./medicare-logo.png" width="45px" alt="" />
                        <a href="/"><img src="./medicare.png" width="150px" alt="" /></a>
                    </div>
                    <div className="search-bar">
                        <input onChange={handleSearch} className="search-input" type="text" placeholder="Search" />
                        <span className="search-logo"><i className="fas fa-search"></i></span>
                    </div>
                </div>
                <div className="search-result">
                    {
                        search?.map(sc => <SearchResult result={sc} key={sc._id} />)
                    }
                </div>
            </div >
            <Navigation />
        </>
    );
};

export default Header;