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
          <>
            <Header />
            <main>
              <Intro />
              <Main />
              <Form />
              <Footer />
            </main>
          </>
        }
      />
      <Route
        path="/singers"
        element={
          <>
            <Header />
            <main>
              <Artists />
            </main>
            <Footer />
          </>
        }
      />

      <Route
        path="/services"
        element={
          <>
            <Header />
            <main>
              <Services />
            </main>
            <Footer />
          </>
        }
      />

      <Route
        path="/shop"
        element={
          <>
            <Header />
            <main>
              <Shop />
            </main>
            <Footer />
          </>
        }
      />

      <Route
        path="/music"
        element={
          <>
            <Header />
            <main>
              <Single />
            </main>
            <Footer />
          </>
        }
      />
      <Route
        path="/album"
        element={
          <>
            <Header />
            <main>
              <Album />
            </main>
            <Footer />
          </>
        }
      />
    </Routes>
  );
}
