import Album from "../components/album/album";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

export default function AlbumPage() {
  return (
    <>
      <Header />
      <main>
        <Album />
      </main>
      <Footer />
    </>
  );
}
