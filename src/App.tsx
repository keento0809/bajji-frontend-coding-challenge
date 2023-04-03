import Headline from "./components/headline/Headline";
import MainHeader from "./components/mainHeader/MainHeader";
import Navbar from "./components/navbar/Navbar";
import TopHeader from "./components/topHeader/TopHeader";
import MainContentWrapper from "./components/wrapper/MainContentWrapper";
import NewsContentWrapper from "./components/wrapper/NewsContentWrapper";
import NewsList from "./components/list/NewsList";
import LatestNewsSection from "./features/section/LatestNewsSection";

function App() {
  return (
    <div>
      <TopHeader />
      <MainContentWrapper>
        <MainHeader />
        <Navbar />
        <NewsContentWrapper>
          <Headline />
          <NewsList />
          <LatestNewsSection />
        </NewsContentWrapper>
      </MainContentWrapper>
    </div>
  );
}

export default App;
