import { useEffect } from "react";
import ServiceCard from "./ServiceCard";

function Services() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-center px-5 md:px-35 pt-10 text-gray-700">
      <h1 className="text-4xl w-full text-left md:text-center font-bold pb-5 md:font-extrabold md:text-5xl">
        Services
      </h1>
      <p className="text-1xl font-light text-left w-full md:text-center md:text-[1.2rem] md:w-[70%]">
        I provide high quality web development services that empower businesses
        to build a strong online presence and reach their digital goals.
      </p>
      <div className="flex flex-col pt-20 md:flex-row md:flex-wrap justify-center gap-10">
        <ServiceCard
          title="Custom Web Application Development"
          icon="fa-solid fa-laptop-code"
          description="Build custom web applications that are tailored to your business needs using the latest technologies to ensure that your application is fast and efficient."
        />
        <ServiceCard
          title="Web Design And Development"
          icon="fa-solid fa-palette"
          description="Design and develop responsive and modern websites that deliver a seamless user experience across all devices."
        />
        <ServiceCard
          title="E-Commerce Solutions"
          icon="fa-solid fa-cart-shopping"
          description="Build custom, scallable and robust online stores with secure payment gateways, inventory management, customer management and user-friendly interfaces."
        />
        <ServiceCard
          title="API Development And Integration"
          icon="fa-solid fa-plug"
          description="Develop custom APIs to extend functionality and integrate APIs to connect your web application with other services and systems."
        />
        <ServiceCard
          title="Database Design And Management"
          icon="fa-solid fa-database"
          description="Design, implement, optimize and manage databases to store and retrieve data efficiently and securely."
        />
        <ServiceCard
          title="Server Management"
          icon="fa-solid fa-server"
          description="Manage and optimize your servers with best-practice configurations to ensure your systems are secure, stable, and high-performing."
        />
        <ServiceCard
          title="Application Deployment"
          icon="fa-solid fa-rocket"
          description="Deploy your applications using reliable, industry-standard workflows to ensure smooth, secure, scalable and high availability releases."
        />
        <ServiceCard
          title="Product Requirement Documentation"
          icon="fa-solid fa-file-alt"
          description="Document the requirements of the product to ensure that the development process is efficient and effective."
        />
      </div>
      <div className="flex flex-col gap-5 items-start py-10">
        <h1
          id="why-choose-me"
          className="text-3xl w-fit border-b-2 border-gray-500 text-left font-bold md:font-bold md:text-5xl"
        >
          Why Choose Me?
        </h1>
        <div className="flex flex-col gap-3 items-start">
          <h2 className="text-xl font-bold">
            <i className="fa-solid fa-wrench"></i> Technical Expertise
          </h2>
          <p>
            With strong skills in both frontend and backend development, I build
            fast, responsive, and scalable websites tailored to your business
            needs.
          </p>
        </div>
        <div className="flex flex-col gap-3 items-start">
          <h2 className="text-xl font-bold">
            <i className="fa-solid fa-bullseye"></i> Goal-Oriented Solutions
          </h2>
          <p>
            I don&apos;t just build websites — I create solutions that help you
            achieve your business goals, whether it&apos;s increasing sales,
            boosting engagement, or streamlining operations.
          </p>
        </div>
        <div className="flex flex-col gap-3 items-start">
          <h2 className="text-xl font-bold">
            <i className="fa-solid fa-user-tie"></i> Professional & Reliable
          </h2>
          <p>
            I&apos;m committed to clear communication, timely delivery, and
            maintaining a high standard of professionalism throughout every
            project.
          </p>
        </div>
        <div className="flex flex-col gap-3 items-start">
          <h2 className="text-xl font-bold">
            <i className="fa-solid fa-rocket"></i> Performance & SEO Focused
          </h2>
          <p>
            I develop with performance and SEO best practices in mind, helping
            your website load faster and rank better on search engines.
          </p>
        </div>
        <div className="flex flex-col gap-3 items-start">
          <h2 className="text-xl font-bold">
            <i className="fa-solid fa-screwdriver-wrench"></i> Custom-Built for
            You
          </h2>
          <p>
            Every project is crafted from scratch to reflect your brand and meet
            your specific needs.
          </p>
        </div>
        <div className="flex flex-col gap-3 items-start">
          <h2 className="text-xl font-bold">
            <i className="fa-solid fa-handshake"></i> Long-Term Partner
          </h2>
          <p>
            I aim to build lasting relationships with clients, offering ongoing
            support and improvements even after the project ends.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
