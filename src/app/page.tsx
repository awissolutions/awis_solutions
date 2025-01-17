import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Boarding from "@/components/Boarding";
import WhyUs from "@/components/WhyUs";
import Accounting from "@/components/services/Accounting";

// for required for deploying on cloudflare
// export const runtime = "edge";

export const metadata: Metadata = {
  title: "awis solutions",
  description: "awis solutions,financial management to help your business grow and thrive",
};

export default function Home() {
  // const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <Accounting />
      <WhyUs />
      <Industries />
      <About />
      <Boarding />
      <CallToAction />
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <Faq />
      <Team />
      {/* <HomeBlogSection posts={posts} /> */}
      <Contact />
      <Clients />
    </main>
  );
}
