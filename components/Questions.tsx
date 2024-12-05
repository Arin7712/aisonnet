import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Questions = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="text-lg flex justify-center">
        <h2 className="text-3xl font-medium md:text-center w-3/5">
          We know you have 😄 questions,{" "}
          <span className="text-gray-400">and we come with answers.</span>
        </h2>
      </div>

      <div className="bg-gray-100 p-2 mt-6">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Questions;
