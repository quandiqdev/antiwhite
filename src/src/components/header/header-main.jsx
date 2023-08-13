import mainLogo from "../../assets/images/main/header-main-logo.png"
export default function HeaderMain() {
    return (
        <div className="header__main">

            <div className="header__main-logo anim logo__anim">
                <img src={mainLogo} alt="" />
            </div>
            <div className="header__main-title anim title__anim">
                Invariance Records
            </div>
            <div className="header__main-subtitle anim subtitle__anim">
                Мы российский лейбл, занимающийся развитием музыкальной индустрии в СНГ
            </div>
        </div>
    )
}