import { createContext, ReactNode, useState } from "react";

interface LoadingCtx {
  isOtherNewsLoading: boolean;
  isTopNewsLoading: boolean;
  handleTurnOnLoader: () => void;
  handleTurnOffLoader: () => void;
  handleTurnOnLoaderForTopNews: () => void;
  handleTurnOffLoaderForTopNews: () => void;
}

interface Props {
  children: ReactNode;
}

export const LoadingContext = createContext<LoadingCtx>({
  isTopNewsLoading: false,
  isOtherNewsLoading: false,
  handleTurnOnLoader: () => {},
  handleTurnOffLoader: () => {},
  handleTurnOnLoaderForTopNews: () => {},
  handleTurnOffLoaderForTopNews: () => {},
});

export default function LoadingContextProvider({ children }: Props) {
  const [isTopNewsLoading, setIsTopNewsLoading] = useState(false);
  const [isOtherNewsLoading, setIsOtherNewsLoading] = useState(false);

  const handleTurnOnLoaderForTopNews = () => {
    setIsTopNewsLoading(true);
  };

  const handleTurnOffLoaderForTopNews = () => {
    setIsTopNewsLoading(false);
  };

  const handleTurnOnLoader = () => {
    setIsOtherNewsLoading(true);
  };
  const handleTurnOffLoader = () => {
    setIsOtherNewsLoading(false);
  };

  return (
    <LoadingContext.Provider
      value={{
        isOtherNewsLoading,
        isTopNewsLoading,
        handleTurnOnLoader,
        handleTurnOffLoader,
        handleTurnOnLoaderForTopNews,
        handleTurnOffLoaderForTopNews,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}
