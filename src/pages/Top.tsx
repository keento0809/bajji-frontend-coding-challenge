import CategoryNewsSection from "../features/section/CategoryNewsSection";
import TopLatestNewsSection from "../features/section/TopLatestNewsSection";

export default function Home() {
  console.log("rendering-home");
  return (
    <>
      <TopLatestNewsSection />
      <CategoryNewsSection />
    </>
  );
}
