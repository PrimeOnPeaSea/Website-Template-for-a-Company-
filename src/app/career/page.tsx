import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Form from "@/components/pages/career/form";

const Career = () => {
  return (
    <section className="container mx-auto p-4">
      <div className="mb-10 w-full p-3 bg-secondary-foreground">
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
                Career
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold">Career</h1>
        <hr className="w-16 h-[2px] bg-secondary-foreground mb-4" />
        <h2 className="text-2xl font-bold mt-6">
          Fill the form to apply for a job opportunity with us.
        </h2>
        <Form />
      </div>
    </section>
  );
};

export default Career;
