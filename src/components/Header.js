import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';

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
    <li>
      <FiUser size={34} color="blue" />
    </li>
  </ul>
);

export default Header;
