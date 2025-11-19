import ServiceCard from "./ServiceCard";

interface ServicesSectionProps {
  title: string;
}

function ServicesSection(props: ServicesSectionProps) {
  return (
    <div className="flex flex-col text-gray-700 px-5 flex-col gap-10 pt-10 pb-10 md:px-35">
      <div className="flex flex-row items-center justify-center">
        <h1 className="text-2xl font-medium border-b-2 border-gray-700 w-fit text-center md:text-left md:text-3xl">
          {props.title}
        </h1>
      </div>
      <div className="flex flex-row justify-center flex-wrap gap-5">
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
    </div>
  );
}

export default ServicesSection;
