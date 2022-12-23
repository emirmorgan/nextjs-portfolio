//Components
import Design from "../components/Design";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex w-full h-full overflow-hidden">
      <Design />
      <div className="flex flex-col w-full">
        <Navbar />
        <main></main>
        <footer></footer>
      </div>
      <Design />
    </div>
  );
}
