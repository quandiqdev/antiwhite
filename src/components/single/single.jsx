import { Link } from "react-router-dom"
import singleImg from "../../assets/images/main/single.jpg"
export default function Single() {
    return (
        <div className="single">
            <div className="container">
                <div className="single__wrapper">
                    <div className="single__subtitle">
                        Релизы
                    </div>
                    <div className="single__title">
                        Последние опубликованные треки артистов
                    </div>
                    <div className="single__btn">
                        <button className="single__btn-active">
                            Синглы
                        </button>
                        <Link to="/album">
                            <button className="single__btn-inactive">
                                Альбомы
                            </button>
                        </Link>
                    </div>
                    <ul className="single__list">
                        <li className="single__list-item">
                            <Link className="single__list-link">
                                <div className="single__list-img">
                                    <img src={singleImg} alt="" />
                                </div>
                                <div className="single__list-title">
                                    Сингл
                                </div>
                                <div className="single__list-name">
                                    Название трека
                                </div>
                                <div className="single__list-singer">
                                    Nickname
                                </div>
                            </Link>
                        </li>
                        <li className="single__list-item">
                            <Link className="single__list-link">
                                <div className="single__list-img">
                                    <img src={singleImg} alt="" />
                                </div>
                                <div className="single__list-title">
                                    Сингл
                                </div>
                                <div className="single__list-name">
                                    Название трека
                                </div>
                                <div className="single__list-singer">
                                    Nickname
                                </div>
                            </Link>
                        </li>
                        <li className="single__list-item">
                            <Link className="single__list-link">
                                <div className="single__list-img">
                                    <img src={singleImg} alt="" />
                                </div>
                                <div className="single__list-title">
                                    Сингл
                                </div>
                                <div className="single__list-name">
                                    Название трека
                                </div>
                                <div className="single__list-singer">
                                    Nickname
                                </div>
                            </Link>
                        </li>
                        <li className="single__list-item">
                            <Link className="single__list-link">
                                <div className="single__list-img">
                                    <img src={singleImg} alt="" />
                                </div>
                                <div className="single__list-title">
                                    Сингл
                                </div>
                                <div className="single__list-name">
                                    Название трека
                                </div>
                                <div className="single__list-singer">
                                    Nickname
                                </div>
                            </Link>
                        </li>
                        <li className="single__list-item">
                            <Link className="single__list-link">
                                <div className="single__list-img">
                                    <img src={singleImg} alt="" />
                                </div>
                                <div className="single__list-title">
                                    Сингл
                                </div>
                                <div className="single__list-name">
                                    Название трека
                                </div>
                                <div className="single__list-singer">
                                    Nickname
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}