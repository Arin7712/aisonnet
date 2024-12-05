import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export function AccordionDemo() {
    return (
      <div className="flex justify-center items-center md:p-0 p-6 w-full">
        <div className="bg-gray-100 p-1 w-full max-w-3xl rounded-lg">
          <Accordion type="single" collapsible className="w-full flex flex-col gap-1">
            <AccordionItem value="item-1">
              <div className="bg-white px-3 py-1 rounded-md shadow-sm">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent className="overflow-hidden transition-all duration-300 ease-in-out max-h-[100px] text-gray-400">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="item-2">
              <div className="bg-white px-3 py-1 rounded-md shadow-sm">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent className="overflow-hidden transition-all duration-300 ease-in-out max-h-[100px] text-gray-400">
                  Yes. It comes with default styles that match the other components' aesthetic.
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="item-3">
              <div className="bg-white px-3 py-1 rounded-md shadow-sm">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent className="overflow-hidden transition-all duration-300 ease-in-out max-h-[100px] text-gray-400">
                  Yes. It's animated by default, but you can disable it if you prefer.
                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    );
  }
  