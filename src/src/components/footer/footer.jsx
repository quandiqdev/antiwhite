import { Link } from "react-router-dom";
import { useEffect } from "react";
import footerLogo from "../../assets/images/main/header-logo.png";

export default function Footer() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          {/* <div className="footer__logo">
            <img src={footerLogo} alt="" />
          </div> */}
          <div className="footer__info">
            Все запросы должны отправляться на почту kelatto@invariancerecords.com
          </div>
          <ul className="footer__list">
            <li className="footer__list-item">
              <Link
                to="/"
                className="footer__list-link"
                onClick={handleLinkClick}
              >
                Главная
              </Link>
            </li>
            <li className="footer__list-item">
              <Link
                to="/single"
                className="footer__list-link"
                onClick={handleLinkClick}
              >
                Релизы
              </Link>
            </li>
            <li className="footer__list-item">
              <Link
                to="/singers"
                className="footer__list-link"
                onClick={handleLinkClick}
              >
                Артисты
              </Link>
            </li>
            <li className="footer__list-item">
              <Link
                to="/services"
                className="footer__list-link"
                onClick={handleLinkClick}
              >
                Услуги
              </Link>
            </li>
            <li className="footer__list-item">
              <Link
                to="/shop"
                className="footer__list-link"
                onClick={handleLinkClick}
              >
                Мерч
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
