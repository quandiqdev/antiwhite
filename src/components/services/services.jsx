import { Link } from "react-router-dom";
import "./style.scss";

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <div className="services__wrapper">
          <p className="services__subtitle">Услуги</p>
          <h1 className="services__title">Услуги музыкантам и организаторам событий</h1>
          <p className="soon">SOON...</p>

          <ul className="services__list">
            {/* <li className="services__list-item">
              <Link className="services__list-link">
                <p className="services__list-title">Концертные туры</p>
                <p className="services__list-subtitle">
                  Мы российский лейбл, занимающийся развитием музыкальной индустрии в СНГ Мы российский лейбл,
                  занимающийся
                </p>
                <p className="services__list-price">От 10 000₽</p>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
}
