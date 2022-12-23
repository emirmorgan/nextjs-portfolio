//Components
import Design from "../components/Design";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex w-full h-full overflow-hidden">
      <Design />
      <div className="flex flex-col justify-between w-full">
        <Navbar />
        <main></main>
        <Footer />
      </div>
      <Design />
    </div>
  );
}
