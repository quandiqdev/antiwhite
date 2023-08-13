import { Link } from "react-router-dom";
import albumImg from "../../assets/images/main/single.jpg"
import warningIcon from "../../assets/images/main/warning.svg"
export default function Album() {
    return (
        <div className="album">
            <div className="container">
                <div className="album__wrapper">
                    <div className="album__subtitle">
                        Релизы
                    </div>
                    <div className="album__title">
                        Последние опубликованные треки артистов
                    </div>
                    <div className="album__btn">
                        <Link to="/single">
                            <button className="album__btn-inactive">
                                Синглы
                            </button>
                        </Link>
                        <button className="album__btn-active">
                            Альбомы
                        </button>
                    </div>
                    <ul className="album__list">
                        <li className="album__list-item">
                            <div className="album__list-img">
                                <img src={albumImg} alt="" />
                            </div>
                            <div className="album__list-wrapper">
                                <div className="album__list-title">
                                    Альбом
                                </div>
                                <div className="album__list-name">
                                    <div >
                                        Название альбома
                                    </div>
                                    <span>
                                        <img src={warningIcon} alt="" />
                                    </span>
                                </div>
                                <div className="album__list-singer">
                                    Nickname
                                </div>
                                <ul className="album__list-tracks tracks__list">
                                    <li className="tracks__list-item">
                                        Название песни
                                    </li>
                                    <li className="tracks__list-item">
                                        Название песни
                                    </li>
                                    <li className="tracks__list-item">
                                        Название песни
                                    </li>
                                    <li className="tracks__list-item">
                                        Название песни
                                    </li>
                                    <li className="tracks__list-item">
                                        Название песни
                                    </li>
                                </ul>
                            </div>

                        </li>

                        <li className="album__list-item">
                            <div className="album__list-img">
                                <img src={albumImg} alt="" />
                            </div>
                            <div className="album__list-wrapper">
                                <div className="album__list-title">
                                    Альбом
                                </div>
                                <div className="album__list-name">
                                    <div >
                                        Название альбома
                                    </div>
                                    <span>
                                        <img src={warningIcon} alt="" />
                                    </span>
                                </div>
                                <div className="album__list-singer">
                                    Nickname
                                </div>
                                <ul className="album__list-tracks tracks__list">
                                    <li className="tracks__list-item">
                                        Название песни
                                    </li>
                                    <li className="tracks__list-item">
                                        Название песни
                                    </li>
                                    <li className="tracks__list-item">
                                        Название песни
                                    </li>
                                    <li className="tracks__list-item">
                                        Название песни
                                    </li>
                                    <li className="tracks__list-item">
                                        Название песни
                                    </li>
                                </ul>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}