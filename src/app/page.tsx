import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { FeaturedKits } from "@/components/home/FeaturedKits";
import { WhySparkBots } from "@/components/home/WhySparkBots";
import { SoftwareShowcase } from "@/components/home/SoftwareShowcase";
import { Newsletter } from "@/components/home/Newsletter";
import { StarterKitPopup } from "@/components/home/StarterKitPopup";
import { StarterKitBanner } from "@/components/home/StarterKitBanner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <StarterKitPopup />
      <Hero />
      <TrustBar />
      <StarterKitBanner />
      <FeaturedKits />
      <WhySparkBots />
      <SoftwareShowcase />
      <Newsletter />
    </main>
  );
}
