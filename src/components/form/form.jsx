import React, { useState } from "react";
import axios from "axios";
import uploadSVG from "../../assets/images/main/upload.svg";
export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileError, setFileError] = useState("");

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const totalSize = files.reduce((total, file) => total + file.size, 0);

    if (totalSize > 250 * 1024 * 1024) {
      setFileError("Selected files exceed the maximum limit of 250 MB.");
      setSelectedFiles([]);
    } else {
      setFileError("");
      setSelectedFiles(files);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Создайте объект FormData и добавьте данные формы
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    // Добавьте каждый выбранный файл к объекту FormData
    selectedFiles.forEach((file, index) => {
      formData.append(`file${index}`, file);
    });

    // Отправьте данные формы и файлы на сервер с помощью axios
    axios
      .post("/send-mail", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="form">
      <div className="container">
        <div className="form__inner">
          <div className="form__info">
            <h1 className="form__subtitle">ЗАЯВКА НА ВСТУПЛЕНИЕ</h1>
            <p className="form__title">Считаете, что готовы стать нашим артистом? Тогда самое время нам написать</p>
            <p className="form__subtitle-bottom">
              Заполните заявку, и наш менеджер свяжется с вами для дальнейшего обсуждения
            </p>
          </div>
          <form className="form__input" onSubmit={handleSubmit}>
            <div className="form__input-name">
              <label htmlFor="name">Ваше имя</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="form__input-mail">
              <label htmlFor="mail">Ваша почта</label>
              <input type="email" id="mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form__input-about">
              <label htmlFor="about">О вас</label>
              <input type="text" id="about" value={message} onChange={(e) => setMessage(e.target.value)} required />
            </div>
            <div className="form__input-file">
              <label htmlFor="file">
                <span>
                  <img src={uploadSVG} alt="" />
                </span>
                <p>Прикрепить файлы</p>
              </label>
              {selectedFiles.length > 0 && <div>Selected files: {selectedFiles.length}</div>}
              {fileError && <div className="error">{fileError}</div>}
              <input
                type="file"
                id="file"
                accept="application/pdf, image/jpeg, image/png"
                onChange={handleFileChange}
                multiple
              />
            </div>
            <button type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </section>
  );
}
