import React from 'react'
import './style.css'

export function Title(props) {
    return (
        <div className="heading-container">
            <h1 className="heading">{props.heading}</h1>
        </div>
    )
}