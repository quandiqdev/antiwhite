import mainLogo from "../../assets/images/main/header-main-logo.png"
export default function HeaderMain() {
    return (
        <div className="header__main">
            <div className="header__main-logo">
                <img src={mainLogo} alt="" />
            </div>
            <div className="header__main-title">
                Invariance Records
            </div>
            <div className="header__main-subtitle">
                Мы российский лейбл, занимающийся развитием музыкальной индустрии в СНГ
            </div>
        </div>
    )
}