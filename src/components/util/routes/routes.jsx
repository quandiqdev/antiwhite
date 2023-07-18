import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../../header/header";
import Main from "../../main/main";
import Form from "../../form/form";
import Footer from "../../footer/footer";
import Artists from "../../artists/artists";
import HeaderMain from "../../header/header-main";
import Services from "../../services/services";
import Shop from "../../shop/shop";
import Single from "../../single/single";
import Album from "../../album/album";
export default function AppRoute() {
    return (
        <div>
            <Routes>
                <Route path="/" element={
                    <>
                        <Header />
                        <HeaderMain />
                        <Main />
                        <Form />
                        <Footer />
                    </>
                } />
                <Route path="/singers" element={
                    <>
                        <Header />
                        <Artists />
                        <Footer />
                    </>
                } />

                <Route path="/services" element={
                    <>
                        <Header />
                        <Services />
                        <Footer />
                    </>
                } />

                <Route path="/shop" element={
                    <>
                        <Header />
                        <Shop />
                        <Footer />
                    </>
                } />

                <Route path="/single" element={
                    <>
                        <Header />
                        <Single />
                        <Footer />
                    </>
                } /> 
                <Route path="/album" element={
                    <>
                        <Header />
                        <Album />
                        <Footer />
                    </>
                } />
            </Routes>
        </div>
    )
}