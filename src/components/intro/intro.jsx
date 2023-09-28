import mainLogo from "../../assets/images/main/header-main-logo.png";
import "./style.scss";

export default function Intro() {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__inner">
          <div className="intro-logo anim logo__anim">
            <img className="intro-logo__img" src={mainLogo} alt="" />
          </div>
          <h1 className="intro-title anim title__anim">Invariance Records</h1>
          <p className="intro-subtitle anim subtitle__anim">
            Мы российский лейбл, занимающийся развитием музыкальной индустрии в
            СНГ
          </p>
        </div>
      </div>
    </section>
  );
}
