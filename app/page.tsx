import Hero from "../sections/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-background-primary">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}



