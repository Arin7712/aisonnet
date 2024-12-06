import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export function AccordionDemo() {
    return (
      <div className="flex flex-col justify-center items-center md:p-0 p-6 mt-24 w-full">
        <div className="text-lg flex justify-center mb-10">
        <h2 className="text-3xl font-medium md:text-center w-full md:w-2/5">
          We know you have 😄 questions,{" "}
          <span className="text-gray-400">and we come with answers.</span>
        </h2>
      </div>
        <div className="bg-gray-100 p-1 w-full max-w-3xl rounded-lg">
          <Accordion type="single" collapsible className="w-full flex flex-col gap-1">
            <AccordionItem value="item-1">
              <div className="bg-white px-3 py-1 rounded-md shadow-sm">
                <AccordionTrigger>How does the development process work at AI Sonnet</AccordionTrigger>
                <AccordionContent className="overflow-hidden transition-all duration-300 ease-in-out max-h-[150px] text-gray-400">
                  
                At AI Sonnet, we create tailored AI chatbots by understanding client needs, developing solutions, and continuously refining through feedback.
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="item-2">
              <div className="bg-white px-3 py-1 rounded-md shadow-sm">
                <AccordionTrigger>Can AI Sonnet assist at larger scale ?</AccordionTrigger>
                <AccordionContent className="overflow-hidden transition-all duration-300 ease-in-out max-h-[150px] text-gray-400">
                Yes, AI Sonnet is equipped to handle projects of all sizes. Whether you're a startup launching an MVP or an established business seeking scalable solutions, we tailor our services to meet your specific needs.
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="item-3">
              <div className="bg-white px-3 py-1 rounded-md shadow-sm">
                <AccordionTrigger>What industries does AI Sonnet specialize in ?</AccordionTrigger>
                <AccordionContent className="overflow-hidden transition-all duration-300 ease-in-out max-h-[150px] text-gray-400">
                We have expertise across various industries, including but not limited to healthcare, finance, e-commerce, and technology. Our team's diverse skill set enables us to tailor solutions to meet the unique challenges and opportunities in each sector.
                </AccordionContent>
              </div>
            </AccordionItem>
            <AccordionItem value="item-4">
              <div className="bg-white px-3 py-1 rounded-md shadow-sm">
                <AccordionTrigger>What sets AI Sonnet apart from other technologies ?</AccordionTrigger>
                <AccordionContent className="overflow-hidden transition-all duration-300 ease-in-out max-h-[350px] text-gray-400">

                AI Sonnet stands out for its personalized approach, delivering AI chatbots tailored to each client's unique needs. We focus on continuous improvement, seamless integration, and exceptional customer support. Our solutions are designed for scalability and efficiency, ensuring businesses can grow with the technology. Additionally, we prioritize understanding industry-specific challenges, enabling us to create truly customized AI solutions that drive real results.                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    );
  }
  