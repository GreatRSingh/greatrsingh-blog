"use client";
import React, { useState, FormEvent } from "react";

export default function SubscribeButton() {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyC2Iw6GzeG3WuBZExvBnTZyZdILT2wMcUoe1WeIvPGZlr11NqwfCa-uZY2AhnsTVwa/exec" as string,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const responseData = await response.text();
        setMessage("You are subscribed!");
        alert("Thank you for subscribing!");
        if (event.currentTarget) {
          event.currentTarget.reset();
        }
      } else {
        setMessage("Error subscribing.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error subscribing.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md">
      {message && <h1>{message}</h1>}
      {!message && (
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-between mb-4">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              className="bg-red-600 hover:bg-red-700 cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {submitting ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
