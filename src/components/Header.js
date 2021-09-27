import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <ul className="panel">
    <li>
      <Link to="/" className="bookstore">
        Bookstore-CMS
      </Link>
    </li>
    <li>
      <Link to="/" className="books">
        Books
      </Link>
    </li>
    <li>
      <Link to="/categories" className="categories">
        Categories
      </Link>
    </li>
  </ul>
);

export default Header;
