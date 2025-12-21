import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

/**
 * Custom hook for handling navigation with scroll-to-section support.
 * Provides a function that navigates to a page and optionally scrolls to a section.
 */
export const useScrollToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const navigateToSection = useCallback(
    (path: string, sectionId?: string) => {
      // If we're already on the target page
      if (location.pathname === path || (path === "/" && location.pathname === "/")) {
        if (sectionId) {
          scrollToSection(sectionId);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        // Navigate to the new page with hash if section specified
        const targetPath = sectionId ? `${path}#${sectionId}` : path;
        navigate(targetPath);
      }
    },
    [navigate, location.pathname, scrollToSection]
  );

  return { navigateToSection, scrollToSection };
};

export default useScrollToSection;
