import CategorizedNewsSection from "../features/section/CategorizedNewsSection";

interface Props {
  category: string;
}

export default function Category({ category }: Props) {
  return (
    <>
      <CategorizedNewsSection category={category} />
    </>
  );
}
