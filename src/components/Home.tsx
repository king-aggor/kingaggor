import Welcome from "./Welcome";
import Section from "./Section";
import ServicesSection from "./ServicesSection";
import ProjectSection from "./ProjectSection";

function Home() {
  return (
    <div className="w-full">
      <Welcome />
      <Section title="Technical Expertise" />
      <ServicesSection title="Services" />
      <ProjectSection />
      {/* <Section title="Contact" /> */}
    </div>
  );
}

export default Home;
