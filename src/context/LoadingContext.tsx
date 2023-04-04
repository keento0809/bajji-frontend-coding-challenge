import { createContext, ReactNode, useState } from "react";

interface LoadingCtx {
  isLoading: boolean;
  handleTurnOnLoader: () => void;
  handleTurnOffLoader: () => void;
}

interface Props {
  children: ReactNode;
}

export const LoadingContext = createContext<LoadingCtx>({
  isLoading: false,
  handleTurnOnLoader: () => {},
  handleTurnOffLoader: () => {},
});

export default function LoadingContextProvider({ children }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const handleTurnOnLoader = () => {
    setIsLoading(true);
  };
  const handleTurnOffLoader = () => {
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider
      value={{ isLoading, handleTurnOnLoader, handleTurnOffLoader }}
    >
      {children}
    </LoadingContext.Provider>
  );
}
