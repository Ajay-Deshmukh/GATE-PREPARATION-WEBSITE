import { useEffect } from "react";

export const useDynamicTitle = (title, defaultTitle = "Gate : A Step Towards Success") => {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = defaultTitle;
    };
  }, [defaultTitle, title]);
};
