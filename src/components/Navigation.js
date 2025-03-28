import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export function Nav(props) {
  return (
    <nav className="nav-container">
      <div className="nav-left-side">
        <div>
          <Link to="/products">Товари</Link>
        </div>
        <div>
          <Link to="/rooms">Кімнати</Link>
        </div>
        <div>
          <Link to="/design">Дизайн</Link>
        </div>
      </div>
      <div className="nav-right-side">
        <div className="nav-item">
          <Link to="">
            <img src="city-nav.png" alt="icon" />
          </Link>
          <Link to="">Київ</Link>
        </div>
        <div className="nav-item">
          <img src="vector.png" alt="icon" />
          <p>Привіт! Увійдіть В Систему</p>
        </div>
        <div>
          <Link to="">
            <img src="vector (1).png" alt="icon" />
          </Link>
        </div>
        <div>
          <Link to="">
            <img src="vector (2).png" alt="icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
