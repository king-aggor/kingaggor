import Welcome from "./Welcome";
import Section from "./Section";
import ServicesSection from "./ServicesSection";
import ProjectSection from "./ProjectSection";
import GetInTouch from "./GetInTouch";

function Home() {
  return (
    <div className="w-full">
      <Welcome />
      <Section title="Technical Expertise" />
      <ServicesSection title="Services" />
      <ProjectSection />
      <GetInTouch />
    </div>
  );
}

export default Home;
