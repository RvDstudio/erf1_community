import { Banner } from "@/components/frontpage/Banner";
import DealOfTheDay from "@/components/frontpage/DealOfTheDay";
import Hero from "@/components/frontpage/hero/Hero";
import { NewArrivals } from "@/components/frontpage/NewArrivals";

export default function Home() {
  return (
    <div>
      <Hero />
      <DealOfTheDay />
      <Banner />
      <NewArrivals />
    </div>
  );
}
