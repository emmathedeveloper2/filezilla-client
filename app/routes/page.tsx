import Footer from "@components/shared/Footer";
import HeroSection from "@components/landing/HeroSection";
import Nav from "@components/shared/Nav";
import type { Route } from "./+types/page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Filezilla" },
    { name: "description", content: "Welcome to Filezilla!" },
  ];
}

export default function LandingPage() {
  return <>
  <Nav />
  <HeroSection />
  <Footer />
  </>
}
