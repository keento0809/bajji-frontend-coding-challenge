import { useState, useEffect } from "react";
import { NewsData } from "../types/news";

export default function useFetchNews(url: string) {
  const [news, setNews] = useState<NewsData[]>([]);
  const translatedNewsDataArray: NewsData[] = [];

  const translateNewsData = async (newsId: number) => {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`
    );
    const translatedNews: NewsData = await response.json();
    // TODO:Stop unnecessary rendering
    const isTranslatedNewsExist = translatedNewsDataArray.find((news) => {
      return news?.id === translatedNews?.id;
    });
    if (!isTranslatedNewsExist) translatedNewsDataArray.push(translatedNews);
  };

  const fetchNews = async (url: string) => {
    try {
      const response = await fetch(url);
      const newsData: number[] = await response.json();
      for (const newsId of newsData) {
        await translateNewsData(newsId);
      }
      setNews(translatedNewsDataArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews(url);
  }, []);

  return { news, fetchNews };
}
