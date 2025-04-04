import ProductDesign from "@/icons/ProductDesign";
import ProjectMgt from "@/icons/ProjectMgt";
import UiUx from "@/icons/UiUx";
import WebDev from "@/icons/WebDev";
import SectionHeader from "./SectionHeader";
import Sparkles from "./Sparkles";

const Services = () => {
  return (
    <section className="container">
      <SectionHeader number={1} heading="What I Do" />

      <div className="relative grid gap-8 pt-12 sm:grid-cols-2">
        {SERVICES.map((service, index) => (
          <div data-id="border-card" key={index} className="h-full shadow-2xl">
            <div
              data-id="border-card-inner"
              className="bg-card/80 flex h-full flex-1 flex-col rounded p-4 shadow-2xl backdrop-blur-3xl md:p-6"
            >
              {service.icon}
                <h3 className="py-4 text-xl w-fit font-bold">
                <Sparkles text={service.name} />
                  </h3>
              <p className="text-muted">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

const SERVICES = [
  {
    icon: <ProductDesign className="text-primary size-12" />,
    name: "Product Design",
    description:
      "I create well-researched, user-centered product designs that prioritize functionality and aesthetics.",
  },
  {
    icon: <UiUx className="text-primary size-12" />,
    name: "UI/UX Design",
    description:
      "I specialize in crafting intuitive and visually appealing user interfaces that enhance user experience. ",
  },
  {
    icon: <WebDev className="text-primary size-12" />,
    name: "Web Development",
    description:
      "I build responsive, fast, and reliable web applications tailored to meet client objectives.",
  },
  {
    icon: <ProjectMgt className="text-primary size-12" />,
    name: "Project Management",
    description:
      "With a strategic approach to project management, I guide projects from inception to completion.",
  },
];
