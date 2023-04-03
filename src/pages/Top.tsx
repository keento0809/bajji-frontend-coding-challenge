import Headline from "../components/headline/Headline";
import NewsList from "../components/list/NewsList";
import LatestNewsSection from "../features/section/LatestNewsSection";
import CategorizedNewsSection from "../features/section/CategorizedNewsSection";

export default function Home() {
  return (
    <div>
      <Headline />
      {/* TODO:Refactor styling for this div tag later */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "48px",
        }}
      >
        <NewsList />
        <LatestNewsSection />
      </div>
      {/* TODO:Refactor these three CategorizedNewsSection components later. */}
      <CategorizedNewsSection />
      <CategorizedNewsSection />
      <CategorizedNewsSection />
    </div>
  );
}
