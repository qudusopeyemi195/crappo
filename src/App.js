import { Calculate, Footer, Hero, Market, Navbar, Newsletter, Why } from "./components";

function App() {
  return (
    <div className="text-[#FFFFFF] tracking-wide w-full h-full overflow-hidden">
      <Navbar />
      <Hero />
      <Why />
      <Calculate />
      <Market />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
