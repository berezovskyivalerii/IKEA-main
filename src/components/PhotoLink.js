import React from 'react'

export function PhotoLink(props) {
    return (
        <div className={props.classspecific}>
            <img src={props.url} alt="Коллекция" />
            <div class="card-overlay">
                <span class="card-text">{props.text}</span>
                <div class="card-button">
                    <img src="./blackarrow.png" alt="arrow" />
                </div>
            </div>
        </div>
    )
}
