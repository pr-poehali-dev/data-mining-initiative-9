import { useEffect, useRef, useState } from "react"

const team = [
  {
    name: "Мастер студии",
    role: "Йога · Медитации · Гонг",
    photo: "https://cdn.poehali.dev/projects/21761104-a408-4f0e-9e4b-1e3dfd6173f1/files/8d0d8de8-2f35-4ec8-b5f3-98fd8895bdb6.jpg",
  },
  {
    name: "Мастер студии",
    role: "Пилатес · МФР · Суставная гимнастика",
    photo: "https://cdn.poehali.dev/projects/21761104-a408-4f0e-9e4b-1e3dfd6173f1/files/8439a3dd-e354-4cd7-83ac-d41e532a970a.jpg",
  },
  {
    name: "Мастер студии",
    role: "Психология · Триггерный массаж",
    photo: "https://cdn.poehali.dev/projects/21761104-a408-4f0e-9e4b-1e3dfd6173f1/files/4b33aa0d-e8fc-499c-a86e-f17d6374d238.jpg",
  },
]

export function Team() {
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
    <section ref={sectionRef} id="team" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p
            className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Наши мастера
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Команда студии
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {team.map((member, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-sand mb-6">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-muted-foreground tracking-wide">{member.role}</p>
            </div>
          ))}
        </div>

        <p className={`text-center text-sm text-muted-foreground mt-12 transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          Замените фото на реальные снимки ваших мастеров
        </p>
      </div>
    </section>
  )
}
