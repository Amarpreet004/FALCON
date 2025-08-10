"use client";
import React from "react";

export default function PreviewLanding() {
  return (
    <main className="min-h-full w-full flex flex-col items-center justify-center gap-10 py-16 bg-white text-neutral-900">
      <section className="max-w-md text-center space-y-4 px-4">
        <h1 className="text-3xl font-extrabold tracking-tight text-[#5C0632]">Falcon Preview</h1>
        <p className="text-sm text-neutral-600 leading-relaxed">Lightweight internal preview used inside the iPhone frame. This page intentionally avoids heavy layouts, external iframes, or recursive hero sections.</p>
        <ul className="text-xs text-neutral-500 space-y-1">
          <li>✔ Internal route (no cross‑origin)</li>
          <li>✔ Fast load, no hydration recursion</li>
          <li>✔ Safe for embedding in showcase components</li>
        </ul>
      </section>
      <section className="flex flex-wrap justify-center gap-4 text-xs">
        {['Speed','Reliability','Design','Strategy'].map(tag => (
          <span key={tag} className="px-3 py-1 rounded-full bg-neutral-100 border text-neutral-700">{tag}</span>
        ))}
      </section>
      <footer className="text-[10px] uppercase tracking-wide text-neutral-400">Internal Preview Page</footer>
    </main>
  );
}
