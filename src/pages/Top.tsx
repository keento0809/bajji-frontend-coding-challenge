import Headline from "../components/headline/Headline";
import MainHeader from "../components/mainHeader/MainHeader";
import Navbar from "../components/navbar/Navbar";
import TopHeader from "../components/topHeader/TopHeader";
import MainContentWrapper from "../components/wrapper/MainContentWrapper";
import NewsContentWrapper from "../components/wrapper/NewsContentWrapper";
import NewsList from "../components/list/NewsList";
import LatestNewsSection from "../features/section/LatestNewsSection";
import CategorizedNewsSection from "../features/section/CategorizedNewsSection";
import Footer from "../components/footer/Footer";
import useFetchNews from "../hooks/useFetchNews";

export default function Home() {
  // Test fetching data
  //TODO: delete test codes below later
  const { news, fetchNews } = useFetchNews(
    `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=19&orderBy="$key"`
  );
  console.log(news, fetchNews);
  return (
    <div>
      <TopHeader />
      <MainContentWrapper>
        <MainHeader />
        <Navbar />
        <NewsContentWrapper>
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
        </NewsContentWrapper>
      </MainContentWrapper>
      <Footer />
    </div>
  );
}
