import { useEffect } from "react";
import Welcome from "./Welcome";
import Section from "./Section";
import ServicesSection from "./ServicesSection";
import ProjectSection from "./ProjectSection";
import GetInTouch from "./GetInTouch";

function Home() {
  useEffect(() => {
    document.title = "King Aggor - Software Engineer | Portfolio";

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Software Engineer passionate about building modern, user-friendly web applications. Explore my portfolio and services."
    );
  }, []);

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
