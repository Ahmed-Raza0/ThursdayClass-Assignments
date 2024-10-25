import Footer from "./componenets/Footer";
import Header from "./componenets/Header";
import  Hero  from "./componenets/Hero";

export default function Home() {
  return (
      <main className="bg-black">
        <Header />
        <Hero />
        <Footer />
      </main>
  );
}
