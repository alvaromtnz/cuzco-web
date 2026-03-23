import Hero from "@/app/components /Hero";
import ServicesPreview from "@/app/components /ServicesPreview";
import WhyChooseUs from "@/app/components /WhyChooseUs";
import ContactBlock from "@/app/components /ContactBlock";
import FAQSection from "@/app/components /FAQSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <FAQSection />
      <ContactBlock />
    </main>
  );
}