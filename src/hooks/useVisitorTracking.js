
import { useEffect } from "react";

export default function useVisitorTracking() {
  useEffect(() => {
    const storageKey = "portfolio_visitor_notified";

    // Prevent duplicate notifications in this tab session
    if (sessionStorage.getItem(storageKey)) {
      return;
    }

    const userAgent = navigator.userAgent;

    const device = /tablet|ipad/i.test(userAgent)
      ? "Tablet"
      : /mobile|android|iphone/i.test(userAgent)
      ? "Mobile"
      : "Desktop";

    const browser =
      /Edg/i.test(userAgent)
        ? "Edge"
        : /Chrome/i.test(userAgent)
        ? "Chrome"
        : /Firefox/i.test(userAgent)
        ? "Firefox"
        : /Safari/i.test(userAgent)
        ? "Safari"
        : "Other";

    const trackVisitor = async () => {
      try {
        const response = await fetch("/api/track-visitor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            page: window.location.pathname,
            device,
            browser,
          }),
        });

        if (!response.ok) {
          const errorMessage = await response.text();
          console.error(
            "Visitor tracking request failed:",
            response.status,
            errorMessage
          );
          return;
        }

        sessionStorage.setItem(storageKey, "true");
      } catch (error) {
        console.error("Visitor tracking failed:", error);
      }
    };

    trackVisitor();
  }, []);
}
