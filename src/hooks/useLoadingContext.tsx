import { useContext } from "react";
import { LoadingContext } from "../context/LoadingContext";

export default function useLoadingContext() {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error("Invalid context");
  }

  return context;
}
