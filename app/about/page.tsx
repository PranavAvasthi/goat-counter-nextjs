"use client";

import { ViewCount, GCEvent, TotalViews } from "next-goatcounter";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    // Track custom event when about page is visited
    GCEvent("/about", "About Page Visit");
  }, []);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <p className="mb-4">This is the about page of our Next.js application.</p>

      <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded">
        <p>
          Page Views: <ViewCount path="/about" fallback="Loading..." />
        </p>
        <p>
          Total Website Views: <TotalViews fallback="Loading..." />
        </p>
      </div>
    </div>
  );
}
