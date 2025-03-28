import React from "react";

export class UpperNav extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="upper-nav-container">
                <div class="string">
                    <span>#вседлядому</span> <span>#швидкозручно</span>{' '}
                    <span>#buy now</span>
                    <span>#вседлядому</span> <span>#швидкозручно</span>{' '}
                    <span>#buy now</span>
                    <span>#вседлядому</span> <span>#швидкозручно</span>{' '}
                    <span>#buy now</span>
                    <span>#вседлядому</span>
                </div>
            </div>
        )
    }
}