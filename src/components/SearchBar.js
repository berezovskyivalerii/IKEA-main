import React from 'react'
import './style.css'

export function SearchBar(props) {
    return (
        <div className="search-bar">
            <img src="searchIC.png" alt="search-icon" />
            <input type="text" placeholder="Пошук" class="input-search" />
        </div>
    )
}