export const checkInitialLocation = (path: string) => {
  return path === "Top" || path === "Ask" || path === "Show" || path === "Jobs"
    ? path
    : "Top";
};
