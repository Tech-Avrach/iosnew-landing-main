import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Device Issues: Why is my iPhone battery draining quickly?",
    answer: "We help identify apps or settings causing excessive battery usage and optimize performance.",
    value: "item-1",
  },
  {
    question: "App Troubleshooting: How do I fix crashing apps?",
    answer:
      "Resolve app crashes, update issues, and installation problems efficiently.",
    value: "item-2",
  },
  {
    question:
      "iOS Updates: Why is my iOS update stuck?",
    answer:
      "Assistance with failed or stuck iOS updates to keep your device running smoothly.",
    value: "item-3",
  },
  {
    question: "iCloud Support: How do I recover files from iCloud?",
    answer: "Recover lost files, sync data, and manage backups with expert guidance.",
    value: "item-4",
  },
  {
    question:
      "Apple ID Issues: How do I reset my Apple ID password?",
    answer:
      "We assist with resetting passwords, unlocking accounts, and enhancing security.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Common Issues We Can Help With{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
