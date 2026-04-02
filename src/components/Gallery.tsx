import { useEffect, useRef, useState } from "react"

const photos = [
  {
    src: "https://cdn.poehali.dev/projects/21761104-a408-4f0e-9e4b-1e3dfd6173f1/files/68953859-62f6-49b8-a7ef-1fe745684111.jpg",
    alt: "Групповая практика йоги",
    span: "md:col-span-2",
  },
  {
    src: "https://cdn.poehali.dev/projects/21761104-a408-4f0e-9e4b-1e3dfd6173f1/files/d550a57e-ed38-47a5-adec-8d2a89460374.jpg",
    alt: "Поющие чаши и гонг",
    span: "md:col-span-1",
  },
  {
    src: "https://cdn.poehali.dev/projects/21761104-a408-4f0e-9e4b-1e3dfd6173f1/files/4b33aa0d-e8fc-499c-a86e-f17d6374d238.jpg",
    alt: "Практика пилатеса",
    span: "md:col-span-1",
  },
  {
    src: "https://cdn.poehali.dev/projects/21761104-a408-4f0e-9e4b-1e3dfd6173f1/files/983f8a38-146d-4c87-8928-920343d5ca88.jpg",
    alt: "Зал студии",
    span: "md:col-span-2",
  },
]

export function Gallery() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="gallery" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p
            className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Атмосфера
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Жизнь студии
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`${photo.span} relative aspect-[4/3] overflow-hidden bg-sand transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
