import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const Gallery = () => {
  return (
    <main className="mx-auto max-w-[1960px] p-4">
      <div className="gap-4 columns-2 sm:columns-3 lg:columns-4 2xl:columns-5">
        <div className="after:content relative mb-5 flex h-[359px] flex-col items-center justify-end gap-4 overflow-hidden   bg-white/10 px-6 pb-16 pt-64 text-center shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:  after:shadow-highlight lg:pt-0 text-black border-black border-2">
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-red-500 to-blue-800"></span>
          </div>
          <Image
            src="/next.svg"
            alt="Next.js Conf"
            width={150}
            height={100}
            className="w-24 h-16"
          />
          <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
            Our Gallery
          </h1>
          <p className="max-w-[40ch] sm:max-w-[32ch]">
            Check out the photos and see what we have been up to.
          </p>
        </div>
        {Array.from({ length: 53 }).map((_, index) => (
          <Dialog key={index}>
            <DialogTrigger className="relative mb-5 block w-full cursor-zoom-in group z-10 md:hover:z-[100]">
              <Image
                alt={`Image ${index + 1}`}
                className="group-hover:lg:scale-125 transition-transform duration-200 object-cover rounded"
                src={`/PhotosAnues/folder1/Images (${index + 1}).jpeg`}
                width={720}
                height={480}
              />
            </DialogTrigger>
            <DialogContent className="rounded text-white bg-transparent p-0 m-auto max-w-[80vw] max-h-[90dvh] border-none flex justify-center items-center">
               <Image
                  alt={`Image ${index + 1}`}
                  src={`/PhotosAnues/folder1/Images (${index + 1}).jpeg`}
                  className="rounded w-fit max-h-[90dvh]"
                  width={1920}
                  height={1080}
                />
            </DialogContent>
          </Dialog>
        ))}
        {Array.from({ length: 27 }).map((_, index) => (
          <Dialog key={index}>
            <DialogTrigger className="relative mb-5 block w-full cursor-zoom-in group z-10 md:hover:z-[100]">
              <Image
                alt={`Image ${index + 1}`}
                className="group-hover:lg:scale-125 transition-transform duration-200 object-cover rounded"
                src={`/PhotosAnues/folder2/Images (${index + 1}).jpeg`}
                width={720}
                height={480}
              />
            </DialogTrigger>
            <DialogContent className="rounded text-white bg-transparent p-0 m-auto max-w-[80vw] max-h-[90dvh] border-none flex justify-center items-center">
               <Image
                  alt={`Image ${index + 1}`}
                  src={`/PhotosAnues/folder2/Images (${index + 1}).jpeg`}
                  className="rounded w-fit max-h-[90dvh]"
                  width={1920}
                  height={1080}
                />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </main>
  );
};

export default Gallery;
