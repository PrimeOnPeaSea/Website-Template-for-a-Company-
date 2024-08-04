import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";

const ServiceData = [
  {
    id: 1,
    title: "Service 1",
    description: "Description for service 1",
    image: "/hero/hero1.jpeg",
  },
  {
    id: 2,
    title: "Service 2",
    description: "Description for service 2",
    image: "/hero/hero2.jpg",
  },
  {
    id: 3,
    title: "Service 3",
    description: "Description for service 3",
    image: "/hero/hero3.webp",
  },
];

const ServicePage = ({ params }: { params: { id: string } }) => {
  const serviceId = parseInt(params.id, 10);
  const service = ServiceData.find((service) => service.id === serviceId);
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 w-full p-3 bg-secondary-foreground">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-white text-sm">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white text-sm" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white text-sm">
                Services
              </BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white text-sm" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white text-sm">
                Service {params.id}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="w-full">
        <h1 className="text-4xl font-bold">{service?.title}</h1>
        <p className="text-lg">{service?.description}</p>
        <div className="w-full h-64 relative mt-5">
          <Image
            src={service?.image || ""}
            layout="fill"
            objectFit="cover"
            alt={service?.title || ""}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
