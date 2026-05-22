import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "В каких регионах осуществляется доставка?",
    answer:
      "Доставляем по всему региону и соседним областям. Собственный автопарк позволяет доставить материалы прямо на ваш объект. Уточните стоимость и сроки доставки у нашего менеджера.",
  },
  {
    question: "Есть ли минимальный объём заказа?",
    answer:
      "Работаем как с розничными покупателями, так и с оптовыми клиентами. Минимальный объём заказа зависит от категории товара. Для большинства позиций минимальный заказ — от 1 единицы или 1 упаковки.",
  },
  {
    question: "Как быстро вы доставляете?",
    answer:
      "При наличии товара на складе доставка осуществляется в течение 1-2 рабочих дней. Для срочных заказов возможна доставка день в день — уточняйте при оформлении заказа.",
  },
  {
    question: "Предоставляете ли вы документы на материалы?",
    answer:
      "Да, на все товары предоставляем сертификаты соответствия, паспорта качества и накладные. Работаем с НДС и без НДС, выставляем счета для юридических лиц.",
  },
  {
    question: "Можно ли вернуть товар?",
    answer:
      "Принимаем возврат неиспользованных материалов в оригинальной упаковке в течение 14 дней с момента покупки. Для крупных партий условия возврата обсуждаются индивидуально.",
  },
  {
    question: "Как оформить заказ?",
    answer:
      "Оставьте заявку на сайте или позвоните нам. Менеджер перезвонит, уточнит детали, рассчитает точное количество материалов и оформит счёт. Оплата наличными, картой или безналичным расчётом.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
