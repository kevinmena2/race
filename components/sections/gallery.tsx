"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { Reveal } from "@/components/reveal"

const slides = [
  {
    image: "/images/carousel-1.jpg",
    alt: "Doctor and nurse working together in a hospital",
    tag: "Medical IT",
    caption: "Healthcare professionals trust us to keep their technology secure and compliant.",
  },
  {
    image: "/images/carousel-2.jpg",
    alt: "Server racks inside a modern data center",
    tag: "Infrastructure",
    caption: "Enterprise-grade data infrastructure, sized right for independent practices.",
  },
  {
    image: "/images/carousel-3.jpg",
    alt: "Doctor reviewing medical imaging on a workstation",
    tag: "Device Security",
    caption: "Clinical workstations and imaging systems secured from day one.",
  },
  {
    image: "/images/carousel-4.jpg",
    alt: "Focused professionals collaborating on laptops in a modern office",
    tag: "Startup IT",
    caption: "Fast-growing DFW startups scale confidently with the right IT foundation.",
  },
  {
    image: "/images/carousel-5.jpg",
    alt: "Healthcare professionals smiling at the camera",
    tag: "Ongoing Support",
    caption: "Your team deserves technology that works every day, without the worry.",
  },
]

export function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanPrev(emblaApi.canScrollPrev())
    setCanNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  useEffect(() => {
    if (!emblaApi) return
    const id = setInterval(() => emblaApi.scrollNext(), 5000)
    return () => clearInterval(id)
  }, [emblaApi])

  return (
    <section className="overflow-hidden bg-secondary py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <span className="pill-label">In the Field</span>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Real work,{" "}
              <span className="text-gradient-brand">real results.</span>
            </h2>
          </Reveal>

          <div className="flex gap-2 shrink-0">
            <button
              onClick={scrollPrev}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-teal/40 hover:bg-teal/5 hover:text-teal disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-teal/40 hover:bg-teal/5 hover:text-teal disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {slides.map((slide, i) => (
              <div key={slide.image} className="relative min-w-0 flex-[0_0_100%]">
                <div className="relative aspect-[16/8] overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out"
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    priority={i === 0}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, hsl(224,62%,8%,0.85) 0%, hsl(224,62%,8%,0.35) 50%, transparent 100%)",
                    }}
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                    <span className="inline-flex items-center rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-teal-light">
                      {slide.tag}
                    </span>
                    <p className="mt-3 max-w-lg font-heading text-lg font-semibold text-white md:text-2xl text-balance leading-snug">
                      {slide.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-1.5" role="tablist" aria-label="Carousel slides">
          {slides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === selectedIndex}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? "w-6 bg-teal"
                  : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
