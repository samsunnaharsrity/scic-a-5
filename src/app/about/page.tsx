import { useState } from "react";
import ToolCardSkeleton from "../components/skeletons/ToolCardSkeleton";
import AboutHero from "./AboutHero";
import CompanyStats from "./CompanyStats";
import CoreValues from "./CoreValues";
import OurStory from "./OurStory";
import PlatformRoles from "./PlatformRoles";
import TeamSection from "./TeamSection";
import WhyChooseUs from "./WhyChooseUs";


export default function AboutPage() {

const [tools,setTools]=useState([]);
const [loading,setLoading]=useState(true);


if (loading) {

  return (

    <section className="bg-slate-50 dark:bg-slate-950 min-h-screen py-10">

      <div className="max-w-6xl mx-auto px-4">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {[...Array(8)].map((_, index) => (

            <ToolCardSkeleton key={index} />

          ))}

        </div>

      </div>

    </section>

  );

}



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