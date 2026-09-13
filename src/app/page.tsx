import NexusScrollProgress from "@/components/nexus-scroll-progress";
import NexusNavbar from "@/components/nexus-navbar";
import NexusPortalHero from "@/components/nexus-portal-hero";
import NexusMarquee from "@/components/nexus-marquee";
import NexusCapabilities from "@/components/nexus-capabilities";
import NexusProjects from "@/components/nexus-projects";
import NexusProcess from "@/components/nexus-process";
import NexusPositioning from "@/components/nexus-positioning";
import NexusContact from "@/components/nexus-contact";
import NexusFooter from "@/components/nexus-footer";

export default function Home() {
  return (
    <main className="bg-[#10182f]">
      <NexusScrollProgress />

      <NexusNavbar />

      <NexusPortalHero />

      <NexusMarquee />

      <NexusCapabilities />

      <NexusProjects />

      <NexusProcess />

      <NexusPositioning />

      <NexusContact />

      <NexusFooter />
    </main>
  );
}
