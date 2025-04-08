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
              className="bg-card/90 flex h-full flex-1 flex-col rounded p-4 shadow-2xl backdrop-blur-3xl md:p-6"
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
      "I enjoy designing products that are not just functional, but also thoughtful and easy to use. It's all about solving real problems for real people.",
  },
  {
    icon: <UiUx className="text-primary size-12" />,
    name: "UI/UX Design",
    description:
      "Clean layouts, smooth flows, and a focus on the user — I take pride in creating interfaces that just make sense.",
  },
  {
    icon: <WebDev className="text-primary size-12" />,
    name: "Web Development",
    description:
      "I build fast, responsive websites and web apps that look great and work even better. From frontend to backend, I've got it covered.",
  },
  {
    icon: <ProjectMgt className="text-primary size-12" />,
    name: "Project Management",
    description:
      "I keep things organized, communicate clearly, and make sure projects stay on track — from idea to launch.",
  },
];
