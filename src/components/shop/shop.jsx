import { Link } from "react-router-dom";
import shopImg from "../../assets/images/main/shopImg.jpg";
import cartIcon from "../../assets/images/main/basket.svg";
import "./style.scss";

export default function Shop() {
  return (
    <section className="shop">
      <div className="container">
        <div className="shop__wrapper">
          <p className="shop__subtitle">Мерч</p>
          <h1 className="shop__title">Товары, посвященные артистам Invariance Records</h1>
          <p className="soon">SOON...</p>

          <ul className="shop__list">
            {/* <li className="shop__list-item">
              <Link className="shop__list-link">
                <div className="shop__list-img">
                  <img src={shopImg} alt="merchImg" />
                </div>
                <p className="shop__list-name">Название товара</p>
                <p className="shop__list-price">От 10 000₽</p>
              </Link>
              <p className="shop__list-btn">
                <span>
                  <img src={cartIcon} alt="" />
                </span>
                Купить
              </p>
            </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
}
