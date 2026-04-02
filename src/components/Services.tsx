import { useEffect, useRef, useState } from "react"

const services = [
  {
    title: "Йога и пилатес",
    description: "Групповые и индивидуальные занятия для развития гибкости, силы и осознанности тела. Подходит для любого уровня подготовки.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5c0 1.5-1 3-2.5 3.5M12 4.5c0 1.5 1 3 2.5 3.5M12 4.5V8m0 0c-2 .5-4 2-4 4v4h8v-4c0-2-2-3.5-4-4zm-4 8v3m8-3v3" />
      </svg>
    ),
  },
  {
    title: "МФР и суставная гимнастика",
    description: "Миофасциальный релиз и мягкая работа с суставами — снимаем зажимы, восстанавливаем подвижность и убираем хроническое напряжение.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    ),
  },
  {
    title: "Медитации, гонг и чаши",
    description: "Практики глубокого расслабления через звук, дыхание и присутствие. Индивидуально и в группе — для перезагрузки и внутренней тишины.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: "Психология и мастер-классы",
    description: "Работа с психологом, триггерный массаж и авторские мастер-классы — для тех, кто хочет глубже разобраться в себе и своём теле.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
]

export function Services() {
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
    <section ref={sectionRef} id="services" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p
            className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Наши практики
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Что мы предлагаем
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-background p-10 lg:p-14 transition-all duration-1000 hover:bg-card ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="text-sage mb-6 transition-transform duration-500 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}

          {/* Маятниковое тестирование — особая карточка с фото */}
          <div
            className={`group relative md:col-span-2 overflow-hidden transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${300 + services.length * 150}ms` }}
          >
            <div className="relative h-80 md:h-96">
              <img
                src="https://cdn.poehali.dev/projects/21761104-a408-4f0e-9e4b-1e3dfd6173f1/bucket/cfedd88e-4f55-4e41-96d5-1650fadb11f5.jpg"
                alt="Маятниковое тестирование"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
              <div className="absolute inset-0 flex items-center p-10 lg:p-14">
                <div className="max-w-lg">
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">Маятниковое тестирование</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Древняя практика работы с маятником для получения ответов из глубин подсознания. Помогает в принятии решений, поиске баланса и раскрытии внутренних ресурсов.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}