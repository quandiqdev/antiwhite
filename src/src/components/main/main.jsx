import { Link } from "react-router-dom"
import dateIcon from "../../assets/images/main/calendardate.svg"
import newsImg1 from '../../assets/images/main/blockimage1.jpg'
import newsImg2 from '../../assets/images/main/blockimage2.jpg'
import newsImg3 from '../../assets/images/main/blockimage3.jpg'
export default function Main() {
    return (
        <div className="main">
            <div className="container">
                <div className="main__wrapper">
                    <div className="main__subtitle">
                        Последние новости
                    </div>
                    <div className="main__title">
                        О нас говорят в СМИ.
                        <br /> О наших артистах тоже
                    </div>
                    <ul className="main__news">
                        <li className="main__news-item">
                            <img src={newsImg1} className="main__news-img" alt="" />
                            <Link className="main__news-link">
                                <div className="news__link-title">
                                    Заголовок одной из последних новостей лейбла
                                </div>
                                <div className="news__link-date">
                                    <span><img src={dateIcon} alt="" /></span>
                                    09/07/2023
                                </div>
                            </Link>
                        </li>
                        <li className="main__news-item">
                            <img src={newsImg2} className="main__news-img" alt="" />
                           
                            <Link className="main__news-link ">
                                <div className="news__link-title">
                                    Заголовок одной из последних новостей лейбла
                                </div>
                                <div className="news__link-date">
                                    <span><img src={dateIcon} alt="" /></span>
                                    09/07/2023
                                </div>
                            </Link>
                        </li>
                        <li className="main__news-item">
                            <img src={newsImg3} className="main__news-img" alt="" />
                           
                            <Link className="main__news-link ">
                                <div className="news__link-title">
                                    Заголовок одной из последних новостей лейбла
                                </div>
                                <div className="news__link-date">
                                    <span><img src={dateIcon} alt="" /></span>
                                    09/07/2023
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}