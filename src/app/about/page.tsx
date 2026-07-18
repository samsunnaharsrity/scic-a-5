import AboutHero from "./AboutHero";
import CompanyStats from "./CompanyStats";
import CoreValues from "./CoreValues";
import OurStory from "./OurStory";
import PlatformRoles from "./PlatformRoles";
import TeamSection from "./TeamSection";
import WhyChooseUs from "./WhyChooseUs";


export default function AboutPage() {
  return (
    <main className="bg-background">
      <AboutHero />
      <OurStory />
      <CoreValues />
      <WhyChooseUs />
      <PlatformRoles></PlatformRoles>
      <TeamSection />
      <CompanyStats />
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
      <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
        Get in Touch
      </button>
    </section>
     </main>
  );
}