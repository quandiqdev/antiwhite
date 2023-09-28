import { Link } from "react-router-dom";
import dateIcon from "../../assets/images/main/calendardate.svg";
import newsImg1 from "../../assets/images/main/blockimage1.jpg";
import newsImg2 from "../../assets/images/main/blockimage2.jpg";
import newsImg3 from "../../assets/images/main/blockimage3.jpg";
import "./style.scss";

export default function Main() {
  return (
    <section className="main">
      <div className="container">
        <div className="main__wrapper">
          <div className="main__subtitle">Последние новости</div>
          <h2 className="main__title">
            О нас говорят в СМИ.
            <br />О наших артистах тоже
          </h2>
          <ul className="main__news">
            <li className="main__news-item">
              <div className="main__news-img">
                <img src={newsImg1} alt="" />
              </div>
              <Link className="main__news-link">
                <h3 className="news__link-title">
                  Заголовок одной из последних новостей лейбла
                </h3>
                <p className="news__link-date">
                  <span>
                    <img src={dateIcon} alt="dateIcon" />
                  </span>
                  09/07/2023
                </p>
              </Link>
            </li>

            <li className="main__news-item">
              <div className="main__news-img">
                <img src={newsImg2} alt="" />
              </div>
              <Link className="main__news-link">
                <h3 className="news__link-title">
                  Заголовок одной из последних новостей лейбла
                </h3>
                <p className="news__link-date">
                  <span>
                    <img src={dateIcon} alt="dateIcon" />
                  </span>
                  09/07/2023
                </p>
              </Link>
            </li>

            <li className="main__news-item">
              <div className="main__news-img">
                <img src={newsImg3} alt="" />
              </div>
              <Link className="main__news-link">
                <h3 className="news__link-title">
                  Заголовок одной из последних новостей лейбла
                </h3>
                <p className="news__link-date">
                  <span>
                    <img src={dateIcon} alt="dateIcon" />
                  </span>
                  09/07/2023
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
