"use client";

import { useState } from "react";

export default function AdminPage() {
  const [isLaunching, setIsLaunching] = useState(false);
  const [message, setMessage] = useState<string>("");

  const handleLaunch = async () => {
    setIsLaunching(true);
    setMessage("");

    try {
      const response = await fetch("/api/timer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = (await response.json()) as {
        success?: boolean;
        started?: boolean;
      };

      if (result.success) {
        setMessage("Hackathon launched successfully.");
        window.location.href = "/";
        return;
      }

      if (result.started) {
        setMessage("Hackathon is already live. Redirecting...");
        window.location.href = "/";
        return;
      }

      setMessage("Could not launch the hackathon. Try again.");
    } catch {
      setMessage("Launch failed due to a network error.");
    } finally {
      setIsLaunching(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full px-4 sm:px-8 md:px-16 lg:px-32 max-w-2xl mx-auto">
      <p className="text-lg text-center">Press the button below to launch the hackathon timer.</p>
      <button
        type="button"
        onClick={handleLaunch}
        disabled={isLaunching}
        className="w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 disabled:bg-green-800 disabled:cursor-not-allowed rounded-lg text-2xl font-bold shadow-lg transition-all"
      >
        {isLaunching ? "Launching..." : "Launch Hackathon"}
      </button>
      {message ? <p className="text-center text-sm text-zinc-200">{message}</p> : null}
    </div>
  );
}
