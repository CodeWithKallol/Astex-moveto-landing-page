// app/page.js

import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Header from "./components/Header";

// A simple placeholder footer component
const Footer = () => {
  return (
    <footer className="bg-gray-500 text-black py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Moveto. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="p-4 w-full">
      <Header />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Footer />
    </main>
  );
}