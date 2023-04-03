import Headline from "../components/headline/Headline";
import NewsList from "../components/list/NewsList";
import LatestNewsBlock from "../features/block/LatestNewsBlock";
import CategorizedNewsBlock from "../features/block/CategorizedNewsBlock";

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
        <LatestNewsBlock />
      </div>
      {/* TODO:Refactor these three CategorizedNewsBlock components later. */}
      <CategorizedNewsBlock />
      <CategorizedNewsBlock />
      <CategorizedNewsBlock />
    </div>
  );
}
