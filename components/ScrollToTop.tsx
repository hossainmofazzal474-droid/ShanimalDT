
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component ensures that the window scrolls to (0,0)
 * every time the navigation path changes.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
