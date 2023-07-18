import { Link } from "react-router-dom"
import shopImg from "../../assets/images/main/shopImg.jpg"
import cartIcon from "../../assets/images/main/basket.svg"
export default function Shop() {
    return (
        <div className="shop">
            <div className="container">
                <div className="shop__wrapper">
                    <div className="shop__subtitle">
                        Мерч
                    </div>
                    <div className="shop__title">
                        Товары, посвященные артистам Invariance Records
                    </div>
                    <ul className="shop__list">
                        <li className="shop__list-item">
                            <Link className="shop__list-link">
                                <div className="shop__list-img">
                                    <img src={shopImg} alt="" />
                                </div>
                                <div className="shop__list-name">
                                    Название товара
                                </div>
                                <div className="shop__list-price">
                                    От 10 000₽
                                </div>
                            </Link>
                            <div className="shop__list-btn">
                                <span>
                                    <img src={cartIcon} alt="" />
                                </span>
                                Купить
                            </div>
                        </li>
                        <li className="shop__list-item">
                            <Link className="shop__list-link">
                                <div className="shop__list-img">
                                    <img src={shopImg} alt="" />
                                </div>
                                <div className="shop__list-name">
                                    Название товара
                                </div>
                                <div className="shop__list-price">
                                    От 10 000₽
                                </div>
                            </Link>
                            <div className="shop__list-btn">
                                <span>
                                    <img src={cartIcon} alt="" />
                                </span>
                                Купить
                            </div>
                        </li>
                        <li className="shop__list-item">
                            <Link className="shop__list-link">
                                <div className="shop__list-img">
                                    <img src={shopImg} alt="" />
                                </div>
                                <div className="shop__list-name">
                                    Название товара
                                </div>
                                <div className="shop__list-price">
                                    От 10 000₽
                                </div>
                            </Link>
                            <div className="shop__list-btn">
                                <span>
                                    <img src={cartIcon} alt="" />
                                </span>
                                Купить
                            </div>
                        </li>
                        <li className="shop__list-item">
                            <Link className="shop__list-link">
                                <div className="shop__list-img">
                                    <img src={shopImg} alt="" />
                                </div>
                                <div className="shop__list-name">
                                    Название товара
                                </div>
                                <div className="shop__list-price">
                                    От 10 000₽
                                </div>
                            </Link>
                            <div className="shop__list-btn">
                                <span>
                                    <img src={cartIcon} alt="" />
                                </span>
                                Купить
                            </div>
                        </li>
                        <li className="shop__list-item">
                            <Link className="shop__list-link">
                                <div className="shop__list-img">
                                    <img src={shopImg} alt="" />
                                </div>
                                <div className="shop__list-name">
                                    Название товара
                                </div>
                                <div className="shop__list-price">
                                    От 10 000₽
                                </div>
                            </Link>
                            <div className="shop__list-btn">
                                <span>
                                    <img src={cartIcon} alt="" />
                                </span>
                                Купить
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}