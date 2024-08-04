import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="h-[75dvh] w-full container mx-auto flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg">Page Not Found</p>
      <Link href="/">
        <Button className="mt-4 rounded-none border-2 border-secondary-foreground bg-secondary-foreground text-secondary hover:text-secondary-foreground hover:bg-secondary">
          Go Back Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
