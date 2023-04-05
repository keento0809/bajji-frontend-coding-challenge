import { useState, useEffect } from "react";
import { NewsData } from "../types/news";
import useLoadingContext from "./useLoadingContext";
import { useLocation } from "react-router-dom";

export default function useFetchNews(
  url: string,
  txt: "topNews" | "otherNews"
) {
  const [news, setNews] = useState<NewsData[]>([]);
  const {
    handleTurnOnLoader,
    handleTurnOffLoader,
    handleTurnOnLoaderForTopNews,
    handleTurnOffLoaderForTopNews,
  } = useLoadingContext();
  const translatedNewsDataArray: NewsData[] = [];
  const location = useLocation();

  // function translates newsId to detailed news data
  async function translateNewsData(newsId: number) {
    // Get detailed news data by using newsId
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`
    );
    const translatedNews: NewsData = await response.json();
    // TODO:Stop unnecessary rendering
    // Only add translatedNews to translatedNewsDataArray if it is not falsy
    if (translatedNews) {
      const isTranslatedNewsExist = translatedNewsDataArray.find((news) => {
        return news?.id === translatedNews?.id;
      });
      if (!isTranslatedNewsExist) translatedNewsDataArray.push(translatedNews);
    }
  }

  // function fetch news (array of number) and update news data
  async function fetchNews(url: string, txt: "topNews" | "otherNews") {
    try {
      // Turn on loading animation
      // txt === "topNews" ? handleTurnOnLoaderForTopNews() : handleTurnOnLoader();
      const response = await fetch(url);
      const newsData: number[] = await response.json();
      for (const newsId of newsData) {
        await translateNewsData(newsId);
      }
      // sort newsData by time
      const sortedTranslatedNewsDataArray = translatedNewsDataArray.sort(
        (a, b) => b?.time - a?.time
      );
      setNews(sortedTranslatedNewsDataArray);
      // Turn off loading animation
      // txt === "topNews"
      //   ? handleTurnOffLoaderForTopNews()
      //   : handleTurnOffLoader();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchNews(url, txt);
  }, []);

  return { news, fetchNews };
}
