import CategorizedNewsBlock from "../block/CategorizedNewsBlock";
import { categorizedNewsArr } from "../../constants/categorizedNews";

export default function CategoryNewsSection() {
  return (
    <div>
      {categorizedNewsArr.map((categoryObj) => {
        return (
          <CategorizedNewsBlock
            key={categoryObj.newsType}
            newsStory={categoryObj.newsStory}
            newsType={categoryObj.newsType}
            initialNumOfNews={categoryObj.initialNumOfNews}
          />
        );
      })}
    </div>
  );
}
