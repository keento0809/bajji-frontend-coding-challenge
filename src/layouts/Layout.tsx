import { ReactNode } from "react";
import TopHeader from "../components/topHeader/TopHeader";
import MainHeader from "../components/mainHeader/MainHeader";
import Navbar from "../components/navbar/Navbar";
import MainContentWrapper from "../components/wrapper/MainContentWrapper";
import NewsContentWrapper from "../components/wrapper/NewsContentWrapper";
import Footer from "../components/footer/Footer";
import Loader from "../components/loader/Loader";
import useLoadingContext from "../hooks/useLoadingContext";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const { isLoading } = useLoadingContext();
  return (
    <>
      {isLoading && <Loader />}
      <TopHeader />
      <MainContentWrapper>
        <MainHeader />
        <Navbar />
        <NewsContentWrapper>{children}</NewsContentWrapper>
      </MainContentWrapper>
      <Footer />
    </>
  );
}
