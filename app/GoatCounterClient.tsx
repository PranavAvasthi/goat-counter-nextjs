"use client";

import { useEffect } from "react";

export default function GoatCounterClient() {
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.goatcounter && window.goatcounter.visit_count) {
        clearInterval(interval);
        window.goatcounter.visit_count({ append: "body" });
      }
    }, 100);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return null; // No visible UI needed for this
}
