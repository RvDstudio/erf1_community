import { Banner } from "@/components/frontpage/banner";
import DealOfTheDay from "@/components/frontpage/DealOfTheDay";
import Hero from "@/components/frontpage/hero/Hero";
import { NewArrivals } from "@/components/frontpage/NewArrivals";
import { Offers } from "@/components/frontpage/Offers";
import { ProductShowcase } from "@/components/frontpage/ProductShowcase";
import { ServiceFeatures } from "@/components/frontpage/ServiceFeatures";

export default function Home() {
  return (
    <div>
      <Hero />
      <DealOfTheDay />
      <Banner />
      <NewArrivals />
      <Offers />
      <ServiceFeatures />
      <ProductShowcase />
    </div>
  );
}
