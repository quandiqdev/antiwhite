import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../../header/header";
import Main from "../../main/main";
import Form from "../../form/form";
import Footer from "../../footer/footer";
import Artists from "../../artists/artists";
import Services from "../../services/services";
import Shop from "../../shop/shop";
import Single from "../../single/single";
import Album from "../../album/album";
import Intro from "../../intro/intro";
export default function AppRoute() {
  return (
      <Routes>
        <Route
          path="/"
          element={
            <div className="body-wrapper">
              <Header />
              <Intro />
              <Main />
              <Form />
              <Footer />
            </div>
          }
        />
        <Route
          path="/singers"
          element={
            <div className="body-wrapper">
              <Header />
              <Artists />
              <Footer />
            </div>
          }
        />

        <Route
          path="/services"
          element={
            <div className="body-wrapper">
              <Header />
              <Services />
              <Footer />
            </div>
          }
        />

        <Route
          path="/shop"
          element={
            <div className="body-wrapper">
              <Header />
              <Shop />
              <Footer />
            </div>
          }
        />

        <Route
          path="/single"
          element={
            <div className="body-wrapper">
              <Header />
              <Single />
              <Footer />
            </div>
          }
        />
        <Route
          path="/album"
          element={
            <div className="body-wrapper">
              <Header />
              <Album />
              <Footer />
            </div>
          }
        />
      </Routes>
  );
}
