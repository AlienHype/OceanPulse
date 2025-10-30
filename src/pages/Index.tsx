import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/HeroSection";
import SpeciesIdentification from "@/components/SpeciesIdentification";
import MarineDatabaseSearch from "@/components/MarineDatabaseSearch";
import OceanExplorer from "@/components/OceanExplorer";
import ImpactCalculator from "@/components/ImpactCalculator";
import ConservationActions from "@/components/ConservationActions";
import Team from "@/components/team";
import ReportSection from "@/components/ReportSection";



const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Particle background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <SpeciesIdentification />
        {/* <MarineDatabaseSearch /> */}
        <OceanExplorer />
          <div id="report">
          <ReportSection />
        </div>
        {/* <ImpactCalculator /> */}
        <ConservationActions />
         <div id="team">
          <Team />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-12 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient-coral">
              🌊 Together, We Protect Our Oceans 🌊
            </h3>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Join us in our mission to safeguard marine life and preserve the
              health of our oceans for future generations.
            </p>
            <div className="flex justify-center gap-8 text-sm text-primary-foreground/60">
              <span>🐢 Marine Life Protection</span>
              <span>🌿 Ecosystem Conservation</span>
              <span>💙 Ocean Health</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
