import { useState, useEffect } from "react";
import { NewsData } from "../types/news";
import useLoadingContext from "./useLoadingContext";

export default function useFetchNews(url: string) {
  const [news, setNews] = useState<NewsData[]>([]);
  const { handleTurnOnLoader, handleTurnOffLoader } = useLoadingContext();
  const translatedNewsDataArray: NewsData[] = [];

  // function translates newsId to detailed news data
  async function translateNewsData(newsId: number) {
    // Get detailed news data by using newsId
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`
    );
    const translatedNews: NewsData = await response.json();
    // TODO:Stop unnecessary rendering
    const isTranslatedNewsExist = translatedNewsDataArray.find((news) => {
      return news?.id === translatedNews?.id;
    });
    if (!isTranslatedNewsExist) translatedNewsDataArray.push(translatedNews);
  }

  // function fetch news (array of number) and update news data
  async function fetchNews(url: string) {
    try {
      // Turn on loading animation
      handleTurnOnLoader();
      const response = await fetch(url);
      const newsData: number[] = await response.json();
      for (const newsId of newsData) {
        await translateNewsData(newsId);
      }
      setNews(translatedNewsDataArray);
      // Turn off loading animation
      handleTurnOffLoader();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchNews(url);
  }, []);

  return { news, fetchNews };
}
