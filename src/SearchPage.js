import React from 'react'

import TuneIcon from '@material-ui/icons/Tune';

import './SearchPage.css'

function SearchPage() {
    return (
        <div className = "searchPage">
            <div className="searchPage__filter">
                <TuneIcon />
                <h1>FILTER</h1>
            </div>
            <hr />
        </div>
    )
}

export default SearchPage
