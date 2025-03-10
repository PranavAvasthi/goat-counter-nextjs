"use client";

import { ViewCount, GCEvent } from "next-goatcounter";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    // Track custom event when contact page is visited
    GCEvent("/contact", "Contact Page Visit");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Track form submission event
    GCEvent("/contact/submit", "Contact Form Submission");
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded dark:bg-gray-800"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded dark:bg-gray-800"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full p-2 border rounded dark:bg-gray-800"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-foreground text-background rounded hover:opacity-90"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded">
        <p>
          Page Views: <ViewCount fallback="Loading..." />
        </p>
      </div>
    </div>
  );
}
