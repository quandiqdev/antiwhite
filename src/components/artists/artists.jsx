import { Link } from "react-router-dom"
import ArtistImg from "../../assets/images/main/artists.jpg";
export default function Artists() {
    return (
        <div className="artists">
            <div className="container">
                <div className="artists__wrapper">
                    <div className="artists__subtitle">
                        Артисты
                    </div>
                    <div className="artists__title">
                        Музыканты, состоящие в Invariance Records
                    </div>
                    <ul className="artists__list">
                        <li className="artists__list-item">
                            <Link className="artists__list-link">
                                <div className="artists__list-img">
                                    <img src={ArtistImg} alt="" />
                                </div>
                                <div className="artists__list-name">
                                    Nickname
                                </div>
                                <div className="artists__list-about">
                                    Мы российский лейбл, занимающийся развитием музыкальной индустрии в СНГ Мы российский лейбл, занимающийся
                                </div>
                            </Link>
                        </li>
                        <li className="artists__list-item">
                            <Link className="artists__list-link">
                                <div className="artists__list-img">
                                    <img src={ArtistImg} alt="" />
                                </div>
                                <div className="artists__list-name">
                                    Nickname
                                </div>
                                <div className="artists__list-about">
                                    Мы российский лейбл, занимающийся развитием музыкальной индустрии в СНГ Мы российский лейбл, занимающийся
                                </div>
                            </Link>
                        </li>
                        <li className="artists__list-item">
                            <Link className="artists__list-link">
                                <div className="artists__list-img">
                                    <img src={ArtistImg} alt="" />
                                </div>
                                <div className="artists__list-name">
                                    Nickname
                                </div>
                                <div className="artists__list-about">
                                    Мы российский лейбл, занимающийся развитием музыкальной индустрии в СНГ Мы российский лейбл, занимающийся
                                </div>
                            </Link>
                        </li>
                        <li className="artists__list-item">
                            <Link className="artists__list-link">
                                <div className="artists__list-img">
                                    <img src={ArtistImg} alt="" />
                                </div>
                                <div className="artists__list-name">
                                    Nickname
                                </div>
                                <div className="artists__list-about">
                                    Мы российский лейбл, занимающийся развитием музыкальной индустрии в СНГ Мы российский лейбл, занимающийся
                                </div>
                            </Link>
                        </li>
                        <li className="artists__list-item">
                            <Link className="artists__list-link">
                                <div className="artists__list-img">
                                    <img src={ArtistImg} alt="" />
                                </div>
                                <div className="artists__list-name">
                                    Nickname
                                </div>
                                <div className="artists__list-about">
                                    Мы российский лейбл, занимающийся развитием музыкальной индустрии в СНГ Мы российский лейбл, занимающийся
                                </div>
                            </Link>
                        </li>
                        <li className="artists__list-item">
                            <Link className="artists__list-link">
                                <div className="artists__list-img">
                                    <img src={ArtistImg} alt="" />
                                </div>
                                <div className="artists__list-name">
                                    Nickname
                                </div>
                                <div className="artists__list-about">
                                    Мы российский лейбл, занимающийся развитием музыкальной индустрии в СНГ Мы российский лейбл, занимающийся
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}