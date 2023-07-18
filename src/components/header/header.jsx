import { Link } from "react-router-dom";
import { useState } from "react";
import headerLogo from "../../assets/images/main/header-logo.png";
import hMenu from "../../assets/images/main/h-menu.svg";
import timesSVG from "../../assets/images/main/times.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <Link to="/">
            <div className="header__logo">
              <img src={headerLogo} alt="" />
            </div>
          </Link>

          <div className={`header__menu menu ${menuOpen ? "open" : ""}`}>
            <input
              type="checkbox"
              name="menu"
              id="menu_1"
              className="menu__input"
              checked={menuOpen}
              onChange={handleMenuToggle}
            />
            <label htmlFor="menu_1" className="menu__title">
              <img src={hMenu} alt="h-menu" />
              <img src={timesSVG} alt="times" />
            </label>
            <ul className={`header__list`} onClick={handleMenuClose}>
              <li className="header__list-item">
                <Link
                  to="/"
                  className="header__list-link"
                  onClick={handleMenuClose}
                >
                  Главная
                </Link>
              </li>
              <li className="header__list-item">
                <Link
                  to="/single"
                  className="header__list-link"
                  onClick={handleMenuClose}
                >
                  Релизы
                </Link>
              </li>
              <li className="header__list-item">
                <Link
                  to="/singers"
                  className="header__list-link"
                  onClick={handleMenuClose}
                >
                  Артисты
                </Link>
              </li>
              <li className="header__list-item">
                <Link
                  to="/services"
                  className="header__list-link"
                  onClick={handleMenuClose}
                >
                  Услуги
                </Link>
              </li>
              <li className="header__list-item">
                <Link
                  to="/shop"
                  className="header__list-link"
                  onClick={handleMenuClose}
                >
                  Мерч
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
