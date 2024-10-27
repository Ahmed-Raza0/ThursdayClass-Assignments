import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Footer from "./componenets/Footer";
import Header from "./componenets/Header";
import  Hero  from "./componenets/Hero";
import Skills from "./componenets/Skills";

export default function Home() {
  return (
      <main className="bg-black">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </main>
  );
}
