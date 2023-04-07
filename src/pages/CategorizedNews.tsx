import { useIsFetching } from "react-query";
import Loader from "../components/loader/Loader";
import CategorizedNewsSection from "../features/section/CategorizedNewsSection";

interface Props {
  category: string;
}

export default function Category({ category }: Props) {
  const isFetching = useIsFetching();

  return (
    <>
      {isFetching !== 0 && <Loader />}
      <CategorizedNewsSection category={category} />
    </>
  );
}
