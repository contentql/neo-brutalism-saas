import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Faq() {
  const faqs = [
    {
      question: 'What are AI development services?',
      answer:
        "At their core, Artificial Intelligence (AI) development services revolve around designing and tailoring artificial intelligence solutions to meet specific business needs. It's akin to architects and builders coming together; while the fundamental principles remain consistent, the final outcome is custom-built to fit an individual's requirements. So, when we discuss AI development, we're delving into specialized domains—like machine learning, natural language processing, or computer vision—each designed to address unique challenges in analytics, communication, or data interpretation.",
    },
    {
      question: 'How much does AI automation cost?',
      answer:
        'The cost depends on the complexity of the solution and the scope of automation required. We offer flexible pricing options tailored to your business needs, which will be discussed during the initial consultation.',
    },
    {
      question: 'Will AI automation disrupt my current operations?',
      answer:
        'We aim to minimize any disruption to your business. Our team works closely with you to ensure the integration is seamless, and we handle the entire process, including testing and troubleshooting, to avoid downtime.',
    },
  ]

  return (
    <div>
      <section className='border-y-2 border-border bg-bg py-20 font-base dark:bg-darkBg lg:py-[100px]'>
        <h2 className='mb-14 px-5 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl'>
          Frequently asked questions
        </h2>

        <div className='mx-auto grid w-[700px] max-w-full px-5'>
          <Accordion className='text-base sm:text-lg' type='single' collapsible>
            {faqs.map(({ answer, question }) => (
              <AccordionItem className='mb-2' value={answer} key={answer}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  )
}
