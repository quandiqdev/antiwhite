import HomePage from "./pages/home-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/style.scss";
import MusicPage from "./pages/music-page";
import AlbumPage from "./pages/album-page";
import SingerPage from "./pages/singer-page";
import ServicePage from "./pages/service-page";
import ShopPage from "./pages/shop-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/music" element={<MusicPage />} />
      <Route path="/album" element={<AlbumPage />} />
      <Route path="/singers" element={<SingerPage />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="/shop" element={<ShopPage />} />
    </Routes>
  );
}

export default App;
