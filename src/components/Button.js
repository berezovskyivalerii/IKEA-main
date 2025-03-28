import React from 'react'

export function Button(props) {
    return (
        <div className="button-container">
            <button className={props.buttonStyle}>{props.title}</button>
        </div>
    )
}
