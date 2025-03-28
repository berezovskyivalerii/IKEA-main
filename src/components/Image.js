import React from 'react'

export function Image(props) {
    return (
        <img src={props.url} alt={props.alt} className={props.className} />
    )
}
