import { Link } from "react-router-dom";
import { useState } from "react";
import headerLogo from "../../assets/images/main/header-logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(true);

  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleMenuClose = () => {
    setMenuOpen(true);
  };
  if (!menuOpen) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <Link to="/" className="header__logo">
            <img
              className="header__logo-img"
              src={headerLogo}
              alt="headerLogo"
            />
          </Link>

          <div className={`header__menu menu`}>
            <div
              className={
                menuOpen
                  ? ` menu__logo menu__logo-open`
                  : `menu__logo menu__logo-closed`
              }
              onClick={handleMenuToggle}
            ></div>

            <ul
              className={
                menuOpen
                  ? ` header__list header__list-open`
                  : `header__list header__list-closed`
              }
              onClick={handleMenuClose}
            >
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
                  to="/music"
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
