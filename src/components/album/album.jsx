import { Link } from "react-router-dom";
import albumImg from "../../assets/images/main/single.jpg";
import warningIcon from "../../assets/images/main/warning.svg";
export default function Album() {
  return (
    <section className="album">
      <div className="container">
        <div className="album__wrapper">
          <p className="album__subtitle">Релизы</p>
          <h1 className="album__title">
            Последние опубликованные треки артистов
          </h1>
          <div className="album__btn">
            <Link to="/music">
              <button className="album__btn-inactive">Синглы</button>
            </Link>
            <button className="album__btn-active">Альбомы</button>
          </div>
            <p className="soon">SOON...</p>
          <ul className="album__list">
            
            {/* <li className="album__list-item">
              <div className="album__list-img">
                <img src={albumImg} alt="albumImg" />
              </div>
              <div className="album__list-wrapper">
                <p className="album__list-title">Альбом</p>
                <div className="album__list-name">
                  <p>Название альбома</p>
                  <span>
                    <img src={warningIcon} alt="warningIcon" />
                  </span>
                </div>
                <p className="album__list-singer">Nickname</p>
                <ul className="album__list-tracks tracks__list">
                  <li className="tracks__list-item">
                    <Link to="#">Название песни</Link>
                  </li>
                  <li className="tracks__list-item">
                    <Link to="#">Название песни</Link>
                  </li>
                  <li className="tracks__list-item">
                    <Link to="#">Название песни</Link>
                  </li>
                  <li className="tracks__list-item">
                    <Link to="#">Название песни</Link>
                  </li>
                  <li className="tracks__list-item">
                    <Link to="#">Название песни</Link>
                  </li>
                </ul>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
}
