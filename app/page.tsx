import HeroSection from "@/components/pages/herosection";
import Navbar from "@/components/pages/navbar";

export default function Home() {
  return (
    <div className="bg-dark text-white">
      <Navbar />
      <div className="w-full max-w-7xl mx-auto sm:px-16 px-6 space-y-8">
        <HeroSection />
      </div>
    </div>
  );
}
