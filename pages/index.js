//Components
import Design from "../components/Design";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

//Sections
import Hero from "../sections/Hero";

export default function Home() {
  return (
    <div className="flex w-full h-full overflow-hidden">
      <Design />
      <div className="flex flex-col w-full">
        <Navbar />
        <main className="flex flex-col w-full h-full overflow-hidden">
          <Hero />
        </main>
        <Footer />
      </div>
      <Design />
    </div>
  );
}
