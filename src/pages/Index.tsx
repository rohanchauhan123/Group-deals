import { useEffect } from "react";
import { Helmet } from 'react-helmet-async'
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import PropertyShowcase from "@/components/PropertyShowcase";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Add animation classes when elements come into view
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll(".fade-up, .slide-in-left, .slide-in-right, .info-card, .property-card");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
          
  <Helmet>
  <title>GroupDealz - Real Estate Investment in Gurgaon</title>
  <meta name="title" content="GroupDealz - Real Estate Investment in Gurgaon" />
  <meta
    name="description"
    content="Find the Best Real Estate Investment in Gurgaon. See top properties, simple tips, and smart ideas to help you earn more from your investment."
  />
  <meta
    name="keywords"
    content="GroupDealz, Real Estate Investment in Gurgaon, Top Real Estate Investment in Gurgaon, Best Real Estate Investment, Real Estate Investment, Gurgaon Real Estate Investment"
  />
  <link rel="canonical" href="https://www.groupdealz.in/" />

  <meta name="DC.Title" content="GroupDealz - Real Estate Investment in Gurgaon" />
  <meta
    name="DC.Subject"
    content="Find the Best Real Estate Investment in Gurgaon. See top properties, simple tips, and smart ideas to help you earn more from your investment."
  />

  <meta property="og:title" content="GroupDealz - Real Estate Investment in Gurgaon" />
  <meta
    property="og:description"
    content="Find the Best Real Estate Investment in Gurgaon. See top properties, simple tips, and smart ideas to help you earn more from your investment."
  />
  <meta name="google-site-verification" content="WXPsCSPr5ZvAns8CYksYVhYgXFZnnTwD-e8C_lFACQA" />
  <meta name="language" content="en-us" />
  <meta name="coverage" content="Global" />
  <meta name="robots" content="INDEX,FOLLOW" />
  <meta name="GOOGLEBOT" content="INDEX, FOLLOW" />
  <meta name="doc-type" content="Webpage" />
  <meta name="revisit-after" content="7 days" />
</Helmet>

      <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <PropertyShowcase />
      <Benefits />
      <CTA />
      <Footer />
    </div>
    </>
  );
};

export default Index;


