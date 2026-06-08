import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSnippet } from "@/components/home/AboutSnippet";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { MarqueeStrip } from "@/components/home/MarqueeStrip";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TeamPreview } from "@/components/home/TeamPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { ContactCTA } from "@/components/home/ContactCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VertebraVita — Restore Your Spine. Reclaim Your Life." },
      { name: "description", content: "Premium chiropractic care, sports rehab, and neurological physiotherapy. 15+ years of clinical excellence." },
      { property: "og:title", content: "VertebraVita — Restore Your Spine. Reclaim Your Life." },
      { property: "og:description", content: "Premium chiropractic care, sports rehab, and neurological physiotherapy." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSnippet />
      <ServicesGrid />
      <MarqueeStrip />
      <WhyChooseUs />
      <TeamPreview />
      <TestimonialsSection />
      <StatsSection />
      <BlogPreview />
      <ContactCTA />
    </>
  );
}
