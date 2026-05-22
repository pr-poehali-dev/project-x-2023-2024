import { useEffect, useRef, useState } from "react"
import { Layers, Truck, ShieldCheck, Wrench } from "lucide-react"
import { HighlightedText } from "./HighlightedText"

const expertiseAreas = [
  {
    title: "Широкий ассортимент",
    description: "Более 5000 позиций: кирпич, блоки, цемент, утеплитель, кровля, отделка — всё в одном месте для любого этапа строительства.",
    icon: Layers,
  },
  {
    title: "Быстрая доставка",
    description:
      "Доставляем материалы на объект день в день или на следующий день. Работаем с частными застройщиками и строительными компаниями.",
    icon: Truck,
  },
  {
    title: "Гарантия качества",
    description:
      "Все материалы сертифицированы и соответствуют ГОСТ. Работаем напрямую с производителями, исключая посредников.",
    icon: ShieldCheck,
  },
  {
    title: "Консультация эксперта",
    description:
      "Наши специалисты помогут подобрать материалы под ваш проект и бюджет. Бесплатный расчёт необходимого количества.",
    icon: Wrench,
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наши преимущества</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            <HighlightedText>Надёжность</HighlightedText>, проверенная
            <br />
            тысячами строек
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Мы поставляем строительные материалы уже более 15 лет. За это время помогли построить тысячи домов, офисов и производственных объектов.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`relative pl-8 border-l border-border transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`transition-all duration-1000 ${
                    visibleItems.includes(index) ? "animate-draw-stroke" : ""
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <Icon className="w-10 h-10 mb-4 text-foreground" strokeWidth={1.25} />
                </div>
                <h3 className="text-xl font-medium mb-4">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
