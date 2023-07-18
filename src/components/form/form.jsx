export default function Form() {
    return (
        <div className="form">
            <div className="container">
                <div className="form__wrapper">
                    <div className="form__info">

                        <div className="form__subtitle">
                            ЗАЯВКА НА ВСТУПЛЕНИЕ
                        </div>
                        <div className="form__title">
                            Считаете, что готовы стать нашим артистом? Тогда самое время нам написать
                        </div>
                        <div className="form__subtitle-bottom">
                            Заполните заявку, и наш менеджер свяжется с вами для дальнейшего обсуждения
                        </div>
                    </div>
                    <div className="form__input">
                        <div className="form__input-name">
                            <label htmlFor="name">Ваше имя</label>
                            <input type="text" id="name" placeholder="Никита" className="form__input-name" />
                        </div>
                        <div className="form__input-about">
                            <label htmlFor="about">О вас</label>
                            <input type="text" id="about" className="form__input-about" />
                        </div>
                        <div className="form__input-number">
                            <label htmlFor="number">Ваш телефон</label>
                            <input type="number" id="number" placeholder="+7(999)999 9999" className="form__input-number" />
                        </div>
                        <div className="form__input-social">
                            <label htmlFor="social">Ваш телеграм</label>
                            <input type="text" placeholder="@username" id="social" className="form__input-social" />
                        </div>
                        <button type="submit" className="form__input-button">Отправить заявку</button>
                        <div className="form__input-text">
                            Отправляя заявку, вы даете своё согласие на обработку ваших персональных данных
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}