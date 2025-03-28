import React from 'react'

export function CheckButton(props) {
    return (
        <div className="checkbox-container">
            <input type="checkbox" className="checkbox" />
            <p className="checkbox-text">{props.title}</p>
        </div>
    )
}
