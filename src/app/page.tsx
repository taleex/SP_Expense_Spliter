import HomePageBtns from "@/components/HomePage/home-page-btns";
import HomePageCard from "@/components/HomePage/home-page-card";

export default function Home() {
  return (
      <main className="flex gap-12 min-h-screen p-24">
        <HomePageCard />
        <HomePageBtns />
      </main>
  );
}
