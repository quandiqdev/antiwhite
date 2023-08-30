import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Footer() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <p className="footer__info">
            Все запросы должны отправляться на почту
            kelatto@invariancerecords.com
          </p>
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
