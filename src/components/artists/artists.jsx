import { Link } from "react-router-dom";
import ArtistImg from "../../assets/images/main/artists.jpg";
export default function Artists() {
  return (
    <section className="artists">
      <div className="container">
        <div className="artists__wrapper">
          <p className="artists__subtitle">Артисты</p>
          <h1 className="artists__title">
            Музыканты, состоящие в Invariance Records
          </h1>
          <ul className="artists__list">
            <li className="artists__list-item">
              <Link to="/" className="artists__list-link">
                <div className="artists__list-img">
                  <img src={ArtistImg} alt="artistImg" />
                </div>
                <p className="artists__list-name">
                  Nickname
                </p>
                <p className="artists__list-about">
                  Мы российский лейбл, занимающийся развитием музыкальной
                  индустрии в СНГ Мы российский лейбл, занимающийся
                </p>
              </Link>
            </li>
            <li className="artists__list-item">
              <Link className="artists__list-link">
                <div className="artists__list-img">
                  <img src={ArtistImg} alt="artistImg" />
                </div>
                <p className="artists__list-name">Nickname</p>
                <p className="artists__list-about">
                  Мы российский лейбл, занимающийся развитием музыкальной
                  индустрии в СНГ Мы российский лейбл, занимающийся
                </p>
              </Link>
            </li>
            <li className="artists__list-item">
              <Link className="artists__list-link">
                <div className="artists__list-img">
                  <img src={ArtistImg} alt="artistImg" />
                </div>
                <p className="artists__list-name">Nickname</p>
                <p className="artists__list-about">
                  Мы российский лейбл, занимающийся развитием музыкальной
                  индустрии в СНГ Мы российский лейбл, занимающийся
                </p>
              </Link>
            </li>{" "}
            <li className="artists__list-item">
              <Link className="artists__list-link">
                <div className="artists__list-img">
                  <img src={ArtistImg} alt="artistImg" />
                </div>
                <p className="artists__list-name">Nickname</p>
                <p className="artists__list-about">
                  Мы российский лейбл, занимающийся развитием музыкальной
                  индустрии в СНГ Мы российский лейбл, занимающийся
                </p>
              </Link>
            </li>{" "}
            <li className="artists__list-item">
              <Link className="artists__list-link">
                <div className="artists__list-img">
                  <img src={ArtistImg} alt="artistImg" />
                </div>
                <p className="artists__list-name">Nickname</p>
                <p className="artists__list-about">
                  Мы российский лейбл, занимающийся развитием музыкальной
                  индустрии в СНГ Мы российский лейбл, занимающийся
                </p>
              </Link>
            </li>{" "}
            <li className="artists__list-item">
              <Link className="artists__list-link">
                <div className="artists__list-img">
                  <img src={ArtistImg} alt="artistImg" />
                </div>
                <p className="artists__list-name">Nickname</p>
                <p className="artists__list-about">
                  Мы российский лейбл, занимающийся развитием музыкальной
                  индустрии в СНГ Мы российский лейбл, занимающийся
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
