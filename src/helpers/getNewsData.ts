import { NewsData } from "../types/news";

async function translateNewsData(
  newsId: number,
  translatedNewsDataArray: NewsData[]
) {
  // Get detailed news data by using newsId
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`
  );
  const translatedNews: NewsData = await response.json();

  // Only add translatedNews to translatedNewsDataArray if it is not falsy
  if (translatedNews) {
    const isTranslatedNewsExist = translatedNewsDataArray.find((news) => {
      return news?.id === translatedNews?.id;
    });
    if (!isTranslatedNewsExist) translatedNewsDataArray.push(translatedNews);
  }
}

export async function getNewsData(url: string) {
  try {
    const response = await fetch(url);
    const newsData: number[] = await response.json();
    const translatedNewsDataArray: NewsData[] = [];
    for (const newsId of newsData) {
      await translateNewsData(newsId, translatedNewsDataArray);
    }
    // sort newsData by time
    const sortedTranslatedNewsDataArray = translatedNewsDataArray.sort(
      (a, b) => b?.time - a?.time
    );
    return sortedTranslatedNewsDataArray;
  } catch (error) {
    console.log(error);
  }
}
