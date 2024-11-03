"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How secure is Nexus Pay?",
    answer: "Nexus Pay uses state-of-the-art encryption and security measures. Your funds are protected by multiple layers of security, and we never store your private keys on our servers."
  },
  {
    question: "What are the transaction fees?",
    answer: "Our fees are among the lowest in the industry, typically less than 0.1% per transaction. For small transactions under $100, we charge a flat fee of $0.50."
  },
  {
    question: "How long do transfers take?",
    answer: "Most transfers are instant. In some cases, depending on the payment method and destination, it might take up to 30 minutes for the transaction to be confirmed."
  },
  {
    question: "Which countries do you support?",
    answer: "Nexus Pay is available in over 150 countries. You can send and receive payments globally, subject to local regulations."
  },
  {
    question: "How do I integrate Nexus Pay into my business?",
    answer: "We provide comprehensive SDKs and APIs for easy integration. Our documentation includes step-by-step guides and code examples for various platforms."
  }
];

export function FAQ() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-plus-jakarta">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about Nexus Pay
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-plus-jakarta">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}