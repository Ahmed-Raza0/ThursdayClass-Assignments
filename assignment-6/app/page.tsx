import Achivements from "./components/Achivements";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Logo from "./components/Logo";
import MinHeader from "./components/MinHeader";
import Team from "./components/Team";
import Team2 from "./components/Team2";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <MinHeader />
      <Header />
      <Hero />
      <Logo />
      <Team />
      <Achivements />
      <Blog />
      <Team2 />
      <Testimonial />
      <Footer />
    </>
  );
}
