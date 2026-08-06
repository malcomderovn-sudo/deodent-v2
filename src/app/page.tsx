import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { ApproachSection } from "@/components/sections/approach";
import { FamilySection } from "@/components/sections/family";
import { ProcessSection } from "@/components/sections/process";
import { WhyUsSection } from "@/components/sections/why-us";
import { StatsSection } from "@/components/sections/stats";
import { GallerySection } from "@/components/sections/gallery";
import { TeamSection } from "@/components/sections/team";
import { BeforeAfterSection } from "@/components/sections/before-after";
import { CalculatorSection } from "@/components/sections/calculator";
import { OffersSection } from "@/components/sections/offers";
import { QuizSection } from "@/components/sections/quiz";
import { ReviewsSection } from "@/components/sections/reviews";
import { FaqSection } from "@/components/sections/faq";
import { FearsSection } from "@/components/sections/fears";
import { CommunitySection } from "@/components/sections/community";
import { BlogSection } from "@/components/sections/blog";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col">
        <HeroSection />
        <ServicesSection />
        <ApproachSection />
        <FamilySection />
        <ProcessSection />
        <WhyUsSection />
        <StatsSection />
        <GallerySection />
        <TeamSection />
        <BeforeAfterSection />
        <CalculatorSection />
        <OffersSection />
        <ReviewsSection />
        <QuizSection />
        <FearsSection />
        <CommunitySection />
        <FaqSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}