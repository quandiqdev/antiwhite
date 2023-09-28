import Footer from "../components/footer/footer";
import Form from "../components/form/form";
import Header from "../components/header/header";
import Intro from "../components/intro/intro";
import Main from "../components/main/main";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Main />
        <Form />
      </main>
      <Footer />
    </>
  );
}
