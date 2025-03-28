import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Buttons(props) {
    return (
        <div className="buttons-container">
            <Link to="register" className="button-content">
                СТВОРИТИ АКАУНТ ТА ПОЧАТИ!
            </Link>
            <div className="catalog-container">
                <p>КАТАЛОГ</p>
                <img src="vector (3).png" alt="" />
            </div>
        </div>
    )
}

function Photo(props) {
    return (
        <div>
            <div className="product-image-container">
                <a href="">
                    <img src={props.url} alt="product" />
                </a>
            </div>
            <a href="">
                <div className="product-container">
                    <p className="product-name">{props.Name}</p>
                    <p className="product-description">{props.Description}</p>
                    <p className="product-price">{props.Price}</p>
                </div>
            </a>
        </div>
    )
}

export function Content(props) {
    return (
        <div className="content-container">
            <Buttons />
            <div className="products-container">
                <Photo
                    url="rectangle 26 (1).png"
                    Name="ПОДУШКИ"
                    Description="спальна кімната..."
                    Price="12$"
                />
                <Photo
                    url="rectangle 26 (2).png"
                    Name="КОВДРА"
                    Description="спальна кімната..."
                    Price="30$"
                />
                <Photo
                    url="rectangle 26 (3).png"
                    Name="ЛІЖКО"
                    Description="спальна кімната..."
                    Price="414$"
                />
            </div>
            <div className="text-container">
                <p className="text-under-photos">
                    ЛОВИ МОМЕНТ | Знижки до <b>60%</b> на вибрані категорії
                    товарів!
                </p>
            </div>
        </div>
    )
}
