


import { HeroCards } from "./HeroCards";
import { DialogDemo } from "./Form/FormComponent";

export const Hero = () => {
  return (
    <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-center py-10 md:py-20 lg:py-32 gap-10 px-4">
      {/* Text Section */}
      <div className="text-center lg:text-start space-y-6">
        <main className="text-4xl md:text-5xl lg:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              iOS Customer Support
            </span>{" "}
            We’re Here to Help!
          </h1>
        </main>

        <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
          Get answers and expert support for all your iOS devices and services.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
          <DialogDemo />
          <a
            href="#"
            rel="noreferrer noopener"
            className="w-full md:w-auto px-6 py-3 text-center border border-transparent rounded-lg text-primary bg-secondary hover:bg-secondary/80"
          >
            Chat with us
          </a>
        </div>
      </div>

      {/* Hero Cards Section */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow Effect */}
      <div className="shadow"></div>
    </section>
  );
};
