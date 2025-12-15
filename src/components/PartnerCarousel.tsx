import { useMemo, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const logoModules = import.meta.glob(
  "../../clients/*.{png,jpg,jpeg,svg,webp}",
  { eager: true, import: "default" },
) as Record<string, string>;

const PartnerCarousel = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const logos = useMemo(
    () =>
      Object.entries(logoModules).map(([path, src]) => ({
        src,
        alt: path.split("/").pop()?.replace(/[-_]/g, " ") ?? "Partner logo",
      })),
    [],
  );

  const hasLogos = logos.length > 0;

  return (
    <section className="container relative py-12 md:py-16">
      <div className="glass rounded-2xl p-6 md:p-8 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <p className="text-sm uppercase tracking-wide text-foreground-subtle">Partners</p>
            <h3 className="text-2xl font-bold text-foreground">Trusted by industry leaders</h3>
            <p className="text-foreground-muted text-sm md:text-base">A rotating reel of our partner network. Drop logos into /clients to populate automatically.</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-foreground-subtle">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span>Auto-rotating, responsive carousel</span>
          </div>
        </div>

        {hasLogos ? (
          <Carousel 
            opts={{ align: "start", loop: true }} 
            plugins={[autoplayPlugin.current]}
            className="relative"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {logos.map((logo, idx) => (
                <CarouselItem key={logo.src + idx} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 pl-2 md:pl-4">
                  <div className={cn("flex items-center justify-center h-20 rounded-lg bg-muted/40 border border-border hover-tilt")}> 
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-12 object-contain opacity-90 hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 hidden sm:flex" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 hidden sm:flex" />
          </Carousel>
        ) : (
          <div className="flex flex-col items-start gap-3 rounded-lg border border-dashed border-border/80 bg-muted/30 p-4 text-sm text-foreground-muted">
            <span className="font-semibold text-foreground">No partner logos yet</span>
            <span>Add logo files (png/jpg/svg/webp) into the /clients folder and the carousel will auto-populate on next build.</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default PartnerCarousel;
