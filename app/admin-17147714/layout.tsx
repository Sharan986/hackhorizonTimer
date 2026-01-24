import React from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white px-4 sm:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Organizer Control Panel</h1>
      <div className="w-full max-w-xl p-4 sm:p-8 bg-zinc-800 rounded-lg shadow-lg flex flex-col items-center">
        {children}
      </div>
    </div>
  );
}
