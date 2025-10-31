import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I schedule a service appointment?",
      answer: "Simply navigate to the 'Book Service' page, select your vehicle, choose the service type, and pick your preferred date and time. You'll receive a confirmation email immediately.",
    },
    {
      question: "What types of services do you offer?",
      answer: "We offer comprehensive automotive services including oil changes, brake services, tire rotations, engine diagnostics, transmission services, air conditioning maintenance, battery replacements, and general inspections.",
    },
    {
      question: "How do I track my service history?",
      answer: "All your service records are automatically saved in the 'Services' section. You can view detailed information about past, current, and upcoming services for each of your vehicles.",
    },
    {
      question: "Can I manage multiple vehicles?",
      answer: "Yes! You can add and manage multiple vehicles in the 'Vehicles' section. Each vehicle has its own maintenance schedule and service history.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and digital payment methods. Payment is processed securely at the time of service completion.",
    },
    {
      question: "How will I be notified about upcoming maintenance?",
      answer: "You'll receive automated email and SMS reminders before scheduled services. You can customize notification preferences in your account settings.",
    },
    {
      question: "What if I need to cancel or reschedule?",
      answer: "You can cancel or reschedule appointments up to 24 hours before the scheduled time through your dashboard or by contacting our support team.",
    },
    {
      question: "Are your mechanics certified?",
      answer: "Yes, all our mechanics are ASE certified professionals with years of experience. We maintain the highest standards of quality and expertise.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 rounded-lg px-6 bg-card hover:border-accent/50 transition-smooth"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
