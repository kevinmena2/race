import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Reveal } from "@/components/reveal"

const faqs = [
  {
    question: "Do you sign a Business Associate Agreement (BAA)?",
    answer:
      "Yes. As a HIPAA-focused consultant working with medical and dental practices, I'm BAA-ready and will sign a Business Associate Agreement before handling anything involving protected health information.",
  },
  {
    question: "Do you work on-site or remotely?",
    answer:
      "Both. I'm based in Dallas–Fort Worth, so I can come on-site when hands-on work or face-to-face conversations matter. Plenty of work — assessments, setup, and ongoing support — can also be handled securely and efficiently remotely.",
  },
  {
    question: "What size practices and companies do you work with?",
    answer:
      "I specialize in small, independent medical and dental practices and growing startups — typically the businesses that need serious IT and security help but aren't ready for a full-time team or a big firm.",
  },
  {
    question: "How does the free consultation work?",
    answer:
      "It's a no-pressure, 30-minute conversation about your practice, your current setup, and what's keeping you up at night. You'll walk away with a clearer picture of your risks and next steps — whether or not we end up working together.",
  },
]

export function Faq() {
  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl">
          <Reveal className="text-center">
            <span className="pill-label">Common Questions</span>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl text-balance">
              Answers before you ask
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Still have questions? Reach out — I respond quickly.
            </p>
          </Reveal>

          <Accordion type="single" collapsible className="mt-12 w-full space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-sm transition-all duration-200 data-[state=open]:border-teal/35 data-[state=open]:shadow-[0_0_0_1px_hsl(174,95%,40%,0.1),0_4px_16px_-4px_hsl(174,95%,40%,0.12)] data-[state=open]:bg-gradient-to-r data-[state=open]:from-teal/[0.03] data-[state=open]:to-transparent"
              >
                <AccordionTrigger className="py-5 text-left text-sm font-semibold text-primary hover:no-underline md:text-base data-[state=open]:text-teal">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
