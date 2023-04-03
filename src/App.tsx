import Headline from "./components/headline/Headline";
import MainHeader from "./components/mainHeader/MainHeader";
import Navbar from "./components/navbar/Navbar";
import TopHeader from "./components/topHeader/TopHeader";

function App() {
  return (
    <div>
      <TopHeader />
      <MainHeader />
      <Navbar />
      <Headline />
    </div>
  );
}

export default App;
